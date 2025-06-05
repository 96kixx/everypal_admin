import 'package:everypal_admin/common/widgets/custom_elevated_button.dart';
import 'package:everypal_admin/core/theme/custom_theme.dart';
import 'package:flutter/material.dart';

void showAlertDialog({
  required BuildContext context,
  required String message,
  VoidCallback? onPressed,
  String? btnText,
}) {
  showDialog(
    context: context,
    builder: (context) {
      return AlertDialog(
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              message,
              textAlign: TextAlign.center,
              style: TextStyle(
                color: context.theme.textColor,
                fontWeight: FontWeight.w600,
                fontSize: 15,
              ),
            ),
          ],
        ),
        contentPadding: const EdgeInsets.fromLTRB(20, 20, 20, 10),
        actionsPadding: const EdgeInsets.fromLTRB(15, 10, 15, 15),
        actionsAlignment: MainAxisAlignment.center,
        actions: [
          CustomElevatedButton(
            onPressed: () {
              Navigator.pop(context);
              onPressed;
            },
            text: "확인인",
            buttonWidth: 130,
          ),
        ],
      );
    },
  );
}
