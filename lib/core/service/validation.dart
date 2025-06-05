typedef ValidationFunction = bool Function();

class Validation {
  final ValidationFunction validation;
  final String messageKey;

  Validation(this.validation, this.messageKey);
}

RegExp emailType = RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
RegExp passwordType = RegExp(
  r'^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#\$&*~])[A-Za-z\d!@#\$&*~]+$',
);

class EmailValidation {
  final String email;
  EmailValidation(this.email);

  List<Validation> get validations => [
    Validation(
      () => email.isEmpty || !emailType.hasMatch(email),
      "이메일을 입력해주세요",
    ),
  ];
}

class PasswordValidation {
  final String password;

  PasswordValidation(this.password);

  List<Validation> get validations => [
    Validation(() => password.isEmpty, "비밀번호를 입력해주세요."),
    Validation(() => password.length < 8, "비밀번호는 8자 이상이어야 합니다."),
  ];
}
