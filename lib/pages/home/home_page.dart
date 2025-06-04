import 'package:everypal_admin/core/routes/routes.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Center(child: Text("HOME")),
        TextButton(
          onPressed: () {
            Navigator.pushNamed(context, Routes.welcome);
          },
          child: Text("MOVE TO WELCOME"),
        ),
      ],
    );
  }
}
