// 사용자 state
import 'package:firebase_auth/firebase_auth.dart';

class AuthState {
  final User? user;
  final bool isLoading;
  final bool isError;

  AuthState({this.user, this.isLoading = false, this.isError = false});

  AuthState copyWith({User? user, bool? isLoading, bool? isError}) {
    return AuthState(
      user: user ?? this.user,
      isLoading: isLoading ?? this.isLoading,
      isError: isError ?? this.isError,
    );
  }
}
