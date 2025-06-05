import 'package:everypal_admin/core/theme/custom_theme.dart';
import 'package:flutter/material.dart';

class WelcomePage extends StatelessWidget {
  const WelcomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "everypal",
              style: TextStyle(
                color: context.theme.mainColor,
                fontWeight: FontWeight.w600,
                fontSize: 26,
              ),
            ),
            SizedBox(height: 15),
            SizedBox(
              width: 300,
              child: TextFormField(
                keyboardType: TextInputType.emailAddress,
                style: TextStyle(color: Colors.black, fontSize: 15),
                decoration: InputDecoration(
                  floatingLabelStyle: TextStyle(
                    color: context.theme.textColor,
                    fontSize: 18,
                  ),
                  labelStyle: TextStyle(
                    color: context.theme.iconColor,
                    fontSize: 13,
                  ),
                  filled: true,
                  fillColor: context.theme.fieldColor,
                  hintText: "Email",
                  hintStyle: TextStyle(
                    color: context.theme.iconColor,
                    fontSize: 14,
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: const BorderRadius.all(Radius.circular(10)),
                    borderSide: BorderSide(color: context.theme.subColor!),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderRadius: const BorderRadius.all(Radius.circular(10)),
                    borderSide: BorderSide(color: context.theme.mainColor!),
                  ),
                ),
              ),
            ),
            SizedBox(height: 15),
            SizedBox(
              width: 300,
              child: TextFormField(
                obscureText: true,
                style: TextStyle(color: Colors.black, fontSize: 15),
                decoration: InputDecoration(
                  floatingLabelStyle: TextStyle(
                    color: context.theme.textColor,
                    fontSize: 18,
                  ),
                  labelStyle: TextStyle(
                    color: context.theme.iconColor,
                    fontSize: 13,
                  ),
                  filled: true,
                  fillColor: context.theme.fieldColor,
                  hintText: "Password",
                  hintStyle: TextStyle(
                    color: context.theme.iconColor,
                    fontSize: 14,
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: const BorderRadius.all(Radius.circular(10)),
                    borderSide: BorderSide(color: context.theme.subColor!),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderRadius: const BorderRadius.all(Radius.circular(10)),
                    borderSide: BorderSide(color: context.theme.mainColor!),
                  ),
                ),
              ),
            ),
            SizedBox(height: 15),
            SizedBox(
              width: 300,
              height: 42,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(5),
                  ),
                  backgroundColor: context.theme.textColor,
                ),
                onPressed: () {},
                child: Text(
                  "로그인",
                  style: TextStyle(
                    color: context.theme.textReversed,
                    fontSize: 15,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
