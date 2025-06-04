import 'package:everypal_admin/core/routes/routes.dart';
import 'package:flutter/material.dart';

class WelcomePage extends StatelessWidget {
  const WelcomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Center(child: Text("Welcome")),
        TextButton(
          onPressed: () {
            Navigator.pushNamed(context, Routes.home);
          },
          child: Text("MOVE TO HOME"),
        ),
      ],
    );
  }
}
