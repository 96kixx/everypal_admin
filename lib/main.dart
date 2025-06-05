import 'dart:developer';
import 'package:everypal_admin/core/routes/routes_web.dart';
import 'package:everypal_admin/firebase_options.dart';
import 'package:everypal_admin/pages/welcome/welcome_page.dart';
import 'package:firebase_app_check/firebase_app_check.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await dotenv.load();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  await FirebaseAppCheck.instance.activate(
    webProvider: ReCaptchaV3Provider(dotenv.env["RECAPTCHA_SITE_KEY"] ?? ""),
  );
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyApp> {
  @override
  void initState() {
    super.initState();
    log("KEY: ${dotenv.env["RECAPTCHA_SITE_KEY"]}");
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: WelcomePage(),
      onGenerateRoute: RoutesWeb.onGenerateRoute,
    );
  }
}
