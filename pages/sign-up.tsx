import FormInput from "@/components/form-input";
import HorizontalButton from "@/components/horizontal-button";
import MainBody from "@/components/layouts/main-body";
import { useForm } from "react-hook-form";

interface SignUpForm {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignUpForm>();
  const isFormValid = ({
    email,
    username,
    password,
    confirmPassword,
  }: SignUpForm) => {
    // Sign up user with api.
    console.log(email, username, password, confirmPassword);
  };

  const isPasswordSame = () => {
    const password = getValues("password");
    const confirmPassword = getValues("confirmPassword");
    return password === confirmPassword;
  };

  return (
    <MainBody>
      <article className="p-10">
        {/* Welcome */}
        <section className="mb-5">
          <h1 className="text-3xl tracking-wider font-bold text-violet-500">
            Welcome!
          </h1>
        </section>

        {/* Form */}
        <section>
          <form className="space-y-4" onSubmit={handleSubmit(isFormValid)}>
            {/* Email */}
            <FormInput
              register={register("email", {
                required: "이메일은 필수값입니다.",
              })}
              type="email"
              placeholder="이메일을 입력해주세요."
              error={errors.email?.message}
            />
            {/* Username */}
            <FormInput
              register={register("username", {
                required: "닉네임은 필수값입니다.",
                minLength: {
                  value: 8,
                  message: "닉네임은 최소 8자리 이상이어야 합니다.",
                },
                maxLength: {
                  value: 20,
                  message: "닉네임은 20자리를 초과할 수 없습니다.",
                },
              })}
              type="text"
              placeholder="닉네임을 입력해주세요."
              error={errors.username?.message}
              autoCapitalize
            />

            {/* Password */}
            <FormInput
              register={register("password", {
                required: "비밀번호는 필수값입니다.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자리 이상이어야 합니다.",
                },
              })}
              type="password"
              placeholder="비밀번호를 입력해주세요."
              error={errors.password?.message}
              autoCapitalize
            />

            {/* Confirm Password */}
            <FormInput
              register={register("confirmPassword", {
                required: "비밀번호 확인은 필수값입니다.",
                validate: isPasswordSame,
              })}
              type="password"
              placeholder="비밀번호 확인을 입력해주세요."
              error={
                errors?.confirmPassword
                  ? "비밀번호와 비밀번호 확인이 일치하지 않습니다."
                  : undefined
              }
              autoCapitalize
            />

            <HorizontalButton text="회원가입" type="submit" />
          </form>
        </section>
      </article>
    </MainBody>
  );
}
