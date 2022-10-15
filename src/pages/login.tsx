import { Button, Input } from "@material-tailwind/react";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProfessorSVG from "../assets/professor.svg";
import LcoButton from "../components/LcoButton";
import LcoInput from "../components/LcoInput";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { authStartAction, setAuthenticatedAdmin } from "../redux/features/auth/authAction";
import { LoginInput } from "../types/login";

function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const loginFormState = useForm<LoginInput>();

    const authState = useAppSelector((state) => state.auth);

    const onSubmit: SubmitHandler<LoginInput> = (data) => {
        dispatch(authStartAction(data));
    };

    useEffect(() => {
        if (authState.authError?.includes("Email")) {
            loginFormState.setError("email", { message: authState.authError, type: "validate" });
            loginFormState.setFocus("email");
        } else {
            loginFormState.setError("password", { message: authState.authError, type: "validate" });
            loginFormState.setFocus("password");
        }
    }, [authState.authError]);

    useEffect(() => {
        dispatch(setAuthenticatedAdmin());
    }, []);

    useEffect(() => {
        if (authState.adminDetails) {
            navigate("/dashboard", { replace: true });
        }
    }, [authState.adminDetails]);

    return (
        <div>
            <div className="flex">
                <div className="flex-[.7] bg-[#34a853] h-[100vh]">
                    <div className="w-[400px] mx-auto mt-[140px]">
                        <img src={ProfessorSVG} className="w-full h-full block" alt="professor" />
                    </div>
                </div>
                <div className="flex-1 mt-[40px] mx-[40px]">
                    <h1 className="text-[3rem] text-[#30333d] text-center font-[600]">
                        Welcome to Your Dashboard
                    </h1>

                    <form
                        onSubmit={loginFormState.handleSubmit(onSubmit)}
                        className="mx-auto bg-gray-100 pt-[20px] px-[40px] mt-[50px] w-[500px] min-h-[400px] bg-slate-100 rounded-md"
                    >
                        <p className="text-[1.4rem] text-[#25272f] font-[600] mb-[20px] mt-[40px]">
                            LOGIN
                        </p>
                        <LcoInput
                            label="Email"
                            register={loginFormState.register}
                            error={loginFormState.formState.errors.email?.message ? true : false}
                            errorMessage={loginFormState.formState.errors.email?.message}
                            defaultValue="hiteshchoudhary@gmail.com"
                        />
                        <div className="my-[15px]" />
                        <LcoInput
                            label="Password"
                            register={loginFormState.register}
                            type="password"
                            error={loginFormState.formState.errors.password?.message ? true : false}
                            errorMessage={loginFormState.formState.errors.password?.message}
                            defaultValue="123456789"
                        />
                        <div className="my-[10px]" />
                        <div className="flex justify-center">
                            <LcoButton type="submit" title="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
