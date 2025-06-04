import 'package:everypal_admin/core/routes/routes.dart';
import 'package:everypal_admin/pages/home/home_page.dart';
import 'package:everypal_admin/pages/welcome/welcome_page.dart';
import 'package:flutter/material.dart';

class RoutesWeb {
  static Route<dynamic> onGenerateRoute(RouteSettings settings) {
    switch (settings.name) {
      case Routes.home:
        return MaterialPageRoute(
          settings: const RouteSettings(name: Routes.home),
          builder: (context) => const HomePage(),
        );

      case Routes.welcome:
        return MaterialPageRoute(
          settings: const RouteSettings(name: Routes.welcome),
          builder: (context) => const WelcomePage(),
        );

      default:
        return MaterialPageRoute(
          builder:
              (context) =>
                  const Scaffold(body: Center(child: Text("Not found"))),
        );
    }
  }
}
