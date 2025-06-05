// 테마 변경 관리
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

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
