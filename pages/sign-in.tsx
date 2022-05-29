import FormInput from "@/components/form-input";
import HorizontalButton from "@/components/horizontal-button";
import MainBody from "@/components/layouts/main-body";
import { useForm } from "react-hook-form";

export interface SignInForm {
  email: string;
  password: string;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>();
  const isFormValid = ({ email, password }: SignInForm) => {
    // Sign up user with api.
    console.log(email, password);
  };

  return (
    <MainBody>
      <article className="p-10">
        {/* Welcome */}
        <section className="mb-8">
          <div className="flex flex-col gap-2">
            <span className="text-3xl tracking-wider font-bold text-violet-500 cursor-default">
              Welcome to
            </span>
            <span className="text-4xl tracking-wider font-bold text-violet-500 uppercase cursor-default transition hover:text-red-500 hover:scale-105 origin-left">
              Cium
            </span>
          </div>
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

            <HorizontalButton text="로그인" type="submit" />
          </form>
        </section>
      </article>
    </MainBody>
  );
}
