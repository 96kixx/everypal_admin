import 'package:everypal_admin/core/routes/routes.dart';
import 'package:flutter/material.dart';

class MainPage extends StatelessWidget {
  const MainPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Center(child: Text("HOME")),
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
