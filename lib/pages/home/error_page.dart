import 'package:everypal_admin/common/widgets/custom_elevated_button.dart';
import 'package:everypal_admin/core/provider/device_state.dart';
import 'package:everypal_admin/core/theme/custom_theme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class ErrorPage extends ConsumerWidget {
  const ErrorPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final status = ref.watch(authState);
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "404",
              style: TextStyle(
                color: context.theme.mainColor,
                fontWeight: FontWeight.w600,
                fontSize: 70,
              ),
            ),
            Text(
              "접근 권한이 없습니다.\n다시 시도해주세요.",
              textAlign: TextAlign.center,
              style: TextStyle(color: context.theme.textColor, fontSize: 20),
            ),
            SizedBox(height: 20),
            CustomElevatedButton(
              buttonWidth: 300,
              buttonHeight: 35,
              textColor: context.theme.textReversed,
              backgroundColor: context.theme.textColor,
              loadingColor: context.theme.textReversed,
              onPressed: () async {
                await ref.read(authState.notifier).signOut(context);
              },
              text: "확인",
              showLoading: status.isLoading,
            ),
            const SizedBox(height: 15),
          ],
        ),
      ),
    );
  }
}
