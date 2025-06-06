import 'package:everypal_admin/core/theme/custom_theme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';

class LoadingPage extends StatelessWidget {
  const LoadingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "Loading...",
              style: TextStyle(color: context.theme.textColor, fontSize: 20),
            ),
            SizedBox(height: 5),
            SpinKitFadingCircle(color: context.theme.mainColor!, size: 40),
          ],
        ),
      ),
    );
  }
}
