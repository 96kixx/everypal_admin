import 'package:everypal_admin/common/widgets/custom_elevated_button.dart';
import 'package:everypal_admin/common/widgets/custom_text_field.dart';
import 'package:everypal_admin/core/provider/device_state.dart';
import 'package:everypal_admin/core/service/validation.dart';
import 'package:everypal_admin/core/theme/custom_theme.dart';
import 'package:everypal_admin/pages/home/controller/home_controller.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class HomePage extends ConsumerStatefulWidget {
  const HomePage({super.key});

  @override
  ConsumerState<HomePage> createState() => _HomePageState();
}

class _HomePageState extends ConsumerState<HomePage> {
  bool isVisible = false;
  String? emailError;
  String? passwordError;
  late TextEditingController emailController;
  late TextEditingController passwordController;

  void signInWithEmail() {
    bool allValidationsPassed = true;
    FocusManager.instance.primaryFocus?.unfocus();
    String email = emailController.text.toLowerCase().trim();
    String password = passwordController.text.trim();

    final emailValidations = EmailValidation(email).validations;
    for (var validation in emailValidations) {
      if (validation.validation()) {
        setState(() {
          emailError = validation.messageKey;
          allValidationsPassed = false;
        });
        break;
      }
    }

    final isAvailable = PasswordValidation(password);
    final passwordValidations = isAvailable.validations;
    for (var validation in passwordValidations) {
      if (validation.validation()) {
        setState(() {
          passwordError = validation.messageKey;
          allValidationsPassed = false;
        });
        break;
      }
    }

    if (allValidationsPassed) {
      ref
          .read(homeController)
          .signInWithEmail(context: context, email: email, password: password);
    }
  }

  void updateText() {
    setState(() {
      emailError = null;
      passwordError = null;
    });
  }

  @override
  void initState() {
    super.initState();
    emailController = TextEditingController(text: "");
    passwordController = TextEditingController(text: "");
  }

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isLoading = ref.watch(loadingProcessState);
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
            Container(
              width: 300,
              margin: EdgeInsets.only(top: 15, bottom: 10),
              child: CustomTextField(
                onChanged: (email) => updateText(),
                fontSize: 15,
                textAlign: TextAlign.start,
                controller: emailController,
                keyboardType: TextInputType.emailAddress,
                hintText: "Email",
              ),
            ),
            Container(
              width: 300,
              margin: EdgeInsets.only(bottom: 15),
              child: CustomTextField(
                onChanged: (password) => setState(() => passwordError = null),
                obscureText: !isVisible,
                fontSize: 15,
                textAlign: TextAlign.start,
                hintText: "Password",
                controller: passwordController,
              ),
            ),
            CustomElevatedButton(
              buttonWidth: 300,
              buttonHeight: 38,
              textColor: context.theme.textReversed,
              backgroundColor: context.theme.textColor,
              loadingColor: context.theme.textReversed,
              onPressed: signInWithEmail,
              text: "로그인",
              showLoading: isLoading,
            ),
            const SizedBox(height: 15),
            _errorText(emailError, passwordError),
          ],
        ),
      ),
    );
  }

  Widget _errorText(String? emailError, String? passwordError) {
    if (emailError != null) {
      return Padding(
        padding: const EdgeInsets.only(left: 5),
        child: Text(
          emailError,
          style: const TextStyle(fontSize: 14, color: Colors.red),
        ),
      );
    } else if (emailError == null && passwordError != null) {
      return Padding(
        padding: const EdgeInsets.only(left: 5),
        child: Text(
          passwordError,
          style: const TextStyle(fontSize: 14, color: Colors.red),
        ),
      );
    } else {
      return Padding(
        padding: const EdgeInsets.only(left: 5),
        child: Text(
          "",
          style: const TextStyle(fontSize: 14, color: Colors.red),
        ),
      );
    }
  }
}
