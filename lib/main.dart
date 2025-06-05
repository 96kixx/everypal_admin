import 'package:everypal_admin/core/provider/device_state.dart';
import 'package:everypal_admin/core/routes/routes_web.dart';
import 'package:everypal_admin/core/theme/dark_theme.dart';
import 'package:everypal_admin/core/theme/light_theme.dart';
import 'package:everypal_admin/firebase_options.dart';
import 'package:everypal_admin/pages/welcome/welcome_page.dart';
import 'package:firebase_app_check/firebase_app_check.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await dotenv.load(fileName: "assets/.env");
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
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
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: lightTheme(),
      darkTheme: darkTheme(),
      themeMode: ref.watch(themeState),
      home: WelcomePage(),
      onGenerateRoute: RoutesWeb.onGenerateRoute,
    );
  }
}
