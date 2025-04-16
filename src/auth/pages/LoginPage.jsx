import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "@/hooks/useForm";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "@/store/auth/thunks";
import { Label } from "@radix-ui/react-menubar";
import { AlertCircle } from "lucide-react";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const { email, password, onInputChange } = useForm(formData);
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <div className="flex min-h-screen flex-col-reverse md:flex-row ">
      <div className="flex w-full flex-1 items-center justify-center p-6 md:w-1/2 ">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-blue-900">
              Iniciar sesión
            </h1>
            <p className="text-gray-500">
              Ingresa tus credenciales para acceder
            </p>
          </div>

          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-blue-900">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@ejemplo.com"
                className="border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                value={email}
                onChange={onInputChange}
                name="email"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-blue-900">
                  Contraseña
                </Label>
                <Link
                  href="#"
                  className="text-sm font-medium text-blue-900 hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                className="border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                value={password}
                onChange={onInputChange}
                name="password"
                required
              />
            </div>
            <Alert
              variant="destructive"
              className={!!errorMessage ? "" : "hidden"}
            >
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
            <div className="flex  gap-1">
              <Button
                disabled={isAuthenticating}
                type="submit"
                className="w-1/2 bg-blue-900 hover:bg-blue-800 hover:cursor-pointer"
              >
                Iniciar Sesión
              </Button>
              <Button
                disabled={isAuthenticating}
                type="submit"
                onClick={onGoogleSignIn}
                className="w-1/2 bg-blue-900 hover:bg-blue-800 hover:cursor-pointer"
              >
                Google
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/auth/register"
              className="font-medium text-blue-900 hover:underline"
            >
              Regístrate
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex w-full items-center justify-center bg-blue-50 md:w-1/2">
        <img
          src="https://www.technewsworld.com/wp-content/uploads/sites/3/2021/05/xl-2018-ecommerce-trends-1.jpg"
          alt="Login illustration"
          width={800}
          height={600}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
