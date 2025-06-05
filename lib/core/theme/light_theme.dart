import 'package:everypal_admin/core/theme/color_setting.dart';
import 'package:everypal_admin/core/theme/custom_theme.dart';
import 'package:flutter/material.dart';

ThemeData lightTheme() {
  final ThemeData base = ThemeData.light();
  return base.copyWith(
    textTheme: ThemeData.light().textTheme.apply(fontFamily: "Pretendard"),
    primaryTextTheme: ThemeData.light().textTheme.apply(
      fontFamily: "Pretendard",
    ),
    splashColor: Colors.transparent,
    highlightColor: Colors.transparent,
    splashFactory: NoSplash.splashFactory,
    colorScheme: ColorScheme.fromSwatch(
      backgroundColor: ColorSetting.backgroundLight,
    ),
    scaffoldBackgroundColor: ColorSetting.backgroundLight,
    extensions: [CustomTheme.lightMode],
    appBarTheme: const AppBarTheme(
      backgroundColor: ColorSetting.backgroundLight,
      foregroundColor: Colors.transparent,
      elevation: 0,
      centerTitle: true,
      toolbarHeight: 50,
      scrolledUnderElevation: 0,
      titleTextStyle: TextStyle(
        color: ColorSetting.textLight,
        fontWeight: FontWeight.bold,
        fontSize: 17,
      ),
      iconTheme: IconThemeData(color: ColorSetting.backgroundDark, size: 22),
    ),
    tabBarTheme: const TabBarTheme(dividerColor: Colors.transparent),
    radioTheme: RadioThemeData(
      fillColor: WidgetStateColor.resolveWith((states) {
        if (states.contains(WidgetState.selected)) {
          return ColorSetting.greenLight;
        }
        return ColorSetting.greyLight;
      }),
    ),
    checkboxTheme: CheckboxThemeData(
      side: const BorderSide(color: ColorSetting.textLight, width: 0.5),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      fillColor: WidgetStateColor.resolveWith((states) {
        if (states.contains(WidgetState.selected)) {
          return ColorSetting.greenDark;
        }
        return Colors.transparent;
      }),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        foregroundColor: ColorSetting.backgroundLight,
        disabledBackgroundColor: const Color(0xFFF2F2F2),
        disabledForegroundColor: ColorSetting.backgroundLight,
        shadowColor: Colors.transparent,
        elevation: 0,
      ),
    ),
    outlinedButtonTheme: OutlinedButtonThemeData(
      style: OutlinedButton.styleFrom(
        side: const BorderSide(color: ColorSetting.greenDark),
        backgroundColor: Colors.transparent,
        foregroundColor: ColorSetting.greenLight,
        shadowColor: Colors.transparent,
        elevation: 0,
      ),
    ),
    dialogTheme: DialogTheme(
      shadowColor: Colors.transparent,
      surfaceTintColor: Colors.transparent,
      backgroundColor: ColorSetting.backgroundLight,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
    ),
    bottomSheetTheme: const BottomSheetThemeData(
      surfaceTintColor: Colors.transparent,
      backgroundColor: ColorSetting.backgroundLight,
      modalBackgroundColor: ColorSetting.backgroundLight,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
    ),
  );
}
