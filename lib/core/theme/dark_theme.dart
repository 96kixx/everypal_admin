import 'package:everypal_admin/core/theme/color_setting.dart';
import 'package:everypal_admin/core/theme/custom_theme.dart';
import 'package:flutter/material.dart';

ThemeData darkTheme() {
  final ThemeData base = ThemeData.dark();
  return base.copyWith(
    textTheme: ThemeData.dark().textTheme.apply(fontFamily: "Pretendard"),
    primaryTextTheme: ThemeData.dark().textTheme.apply(
      fontFamily: "Pretendard",
    ),
    splashColor: Colors.transparent,
    highlightColor: Colors.transparent,
    splashFactory: NoSplash.splashFactory,
    colorScheme: ColorScheme.fromSwatch(
      backgroundColor: ColorSetting.backgroundDark,
    ),
    scaffoldBackgroundColor: ColorSetting.backgroundDark,
    extensions: [CustomTheme.darkMode],
    appBarTheme: const AppBarTheme(
      backgroundColor: ColorSetting.backgroundDark,
      foregroundColor: Colors.transparent,
      elevation: 0,
      centerTitle: true,
      toolbarHeight: 50,
      scrolledUnderElevation: 0,
      titleTextStyle: TextStyle(
        color: ColorSetting.textDark,
        fontWeight: FontWeight.bold,
        fontSize: 17,
      ),
      iconTheme: IconThemeData(color: Colors.white, size: 22),
    ),
    tabBarTheme: const TabBarTheme(dividerColor: Colors.transparent),
    radioTheme: RadioThemeData(
      fillColor: WidgetStateColor.resolveWith((states) {
        if (states.contains(WidgetState.selected)) {
          return Colors.white;
        }
        return ColorSetting.greyDark;
      }),
    ),
    checkboxTheme: CheckboxThemeData(
      side: const BorderSide(color: ColorSetting.textDark, width: 0.5),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      fillColor: WidgetStateColor.resolveWith((states) {
        if (states.contains(WidgetState.selected)) {
          return ColorSetting.greenLight;
        }
        return Colors.transparent;
      }),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        foregroundColor: ColorSetting.backgroundDark,
        disabledBackgroundColor: const Color(0xFF202020),
        disabledForegroundColor: ColorSetting.backgroundLight,
        shadowColor: Colors.transparent,
        elevation: 0,
      ),
    ),
    outlinedButtonTheme: OutlinedButtonThemeData(
      style: OutlinedButton.styleFrom(
        backgroundColor: Colors.transparent,
        foregroundColor: Colors.transparent,
        shadowColor: Colors.transparent,
        elevation: 0,
      ),
    ),
    dialogTheme: DialogTheme(
      surfaceTintColor: Colors.transparent,
      backgroundColor: ColorSetting.backgroundDark,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
    ),
    bottomSheetTheme: const BottomSheetThemeData(
      surfaceTintColor: Colors.transparent,
      backgroundColor: ColorSetting.backgroundDark,
      modalBackgroundColor: ColorSetting.backgroundDark,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
    ),
  );
}
