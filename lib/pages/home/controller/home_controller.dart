import 'dart:developer';

import 'package:everypal_admin/common/dialog/show_alert_dialog.dart';
import 'package:everypal_admin/core/provider/device_state.dart';
import 'package:everypal_admin/core/routes/routes.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:firebase_auth/firebase_auth.dart';

final homeController = Provider(
  (ref) => HomeController(auth: FirebaseAuth.instance, ref: ref),
);

class HomeController {
  final FirebaseAuth auth;
  final Ref ref;

  HomeController({required this.auth, required this.ref});

  // 이메일 로그인
  Future<void> signInWithEmail({
    required BuildContext context,
    required String email,
    required String password,
  }) async {
    final loadingState = ref.read(loadingProcessState.notifier);
    try {
      loadingState.state = true;
      // final response = await Future.wait([
      //   Future.delayed(const Duration(seconds: 1)),
      //   auth.signInWithEmailAndPassword(email: email, password: password),
      // ]);
      // final UserCredential userCredential = response[1];
      // final User? user = userCredential.user;
      // if (user != null) {
      //   if (context.mounted) {
      //     if (!user.emailVerified) {
      //       showAlertDialog(context: context, message: "접근 권한이 없습니다");
      //     } else {
      //       log("로그인 완료");
      //       Navigator.pushNamed(context, Routes.main);
      //     }
      //   }
      // }
      await Future.delayed(const Duration(seconds: 5));
      if (context.mounted) Navigator.pushNamed(context, Routes.main);
    } catch (e) {
      log("signInWithEmail: $e");
      if (context.mounted) {
        showAlertDialog(context: context, message: "오류가 발생했습니다. 다시 시도해주세요.");
      }
    } finally {
      loadingState.state = false;
    }
  }
}
