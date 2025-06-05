import 'package:cloud_firestore/cloud_firestore.dart';
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
