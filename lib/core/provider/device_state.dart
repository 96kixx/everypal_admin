import 'dart:async';
import 'dart:developer';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:everypal_admin/core/model/provider_model.dart';
import 'package:everypal_admin/core/routes/routes.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final auth = FirebaseAuth.instance;
final firestore = FirebaseFirestore.instance;

// 진행 프로세스 관리
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
final loadingProcessState = StateProvider.autoDispose<bool>((ref) => false);

// 테마 변경 관리
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
final themeState = StateNotifierProvider<ThemeNotifier, ThemeMode>((ref) {
  return ThemeNotifier();
});

class ThemeNotifier extends StateNotifier<ThemeMode> {
  ThemeNotifier() : super(ThemeMode.system) {
    state = ThemeMode.system;
  }

  void setThemeMode({required ThemeMode themeMode}) async {
    if (themeMode == ThemeMode.light) {
      state = ThemeMode.light;
    } else if (themeMode == ThemeMode.dark) {
      state = ThemeMode.dark;
    } else {
      state = ThemeMode.system;
    }
  }
}

// 계정 상태 관리
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
final authState = StateNotifierProvider<AuthNotifier, AuthState>((ref) {
  return AuthNotifier();
});

class AuthNotifier extends StateNotifier<AuthState> {
  final _auth = FirebaseAuth.instance;
  late final StreamSubscription<User?> _subscription;
  AuthNotifier() : super(AuthState()) {
    _subscription = _auth.authStateChanges().listen(
      (user) {
        state = state.copyWith(user: user, isLoading: false, isError: false);
      },
      onError: (error) {
        state = state.copyWith(isError: true, isLoading: false);
      },
    );
  }

  @override
  void dispose() {
    _subscription.cancel();
    super.dispose();
  }

  Future<void> signOut(BuildContext context) async {
    if (state.isLoading) return;
    state = state.copyWith(isLoading: true);
    try {
      log("0");
      if (state.isError) state = state.copyWith(isError: false);
      await Future.delayed(Duration(seconds: 2));
      await _auth.signOut();
      if (context.mounted) {
        Navigator.pushNamedAndRemoveUntil(
          context,
          Routes.home,
          (route) => false,
        );
      }
      log("1");
    } catch (e) {
      log("signOut: $e");
    } finally {
      state = state.copyWith(isLoading: false);
      log("2");
    }
  }

  User? get currentUser => state.user;
}
