import 'package:everypal_admin/core/provider/device_state.dart';
import 'package:everypal_admin/core/routes/routes_web.dart';
import 'package:everypal_admin/core/theme/dark_theme.dart';
import 'package:everypal_admin/core/theme/light_theme.dart';
import 'package:everypal_admin/firebase_options.dart';
import 'package:everypal_admin/pages/home/error_page.dart';
import 'package:everypal_admin/pages/home/home_page.dart';
import 'package:everypal_admin/pages/home/loading_page.dart';
import 'package:everypal_admin/pages/main/main_page.dart';
import 'package:firebase_app_check/firebase_app_check.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await dotenv.load(fileName: "assets/.env");
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  await FirebaseAuth.instance.setPersistence(Persistence.LOCAL);
  await FirebaseAppCheck.instance.activate(
    webProvider: ReCaptchaV3Provider(dotenv.env["RECAPTCHA_SITE_KEY"] ?? ""),
  );
  runApp(ProviderScope(child: MyApp()));
}

class MyApp extends ConsumerStatefulWidget {
  const MyApp({super.key});

  @override
  ConsumerState<MyApp> createState() => _MyHomePageState();
}

class _MyHomePageState extends ConsumerState<MyApp> {
  @override
  Widget build(BuildContext context) {
    final status = ref.watch(authState);
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: lightTheme(),
      darkTheme: darkTheme(),
      themeMode: ref.watch(themeState),
      home:
          status.isError
              ? ErrorPage()
              : status.isLoading
              ? LoadingPage()
              : status.user == null
              ? HomePage()
              : MainPage(),
      onGenerateRoute: RoutesWeb.onGenerateRoute,
    );
  }
}
