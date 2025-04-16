import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "@/hooks/useForm";
import { startCreatingUserWithEmailPassword } from "@/store/auth/thunks";
import { Label } from "@radix-ui/react-menubar";
import { AlertCircle } from "lucide-react";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  email: [
    (value) => {
      return value.includes("@");
    },
    "El correo debe tener una @",
  ],
  password: [
    (value) => {
      return value.length >= 6;
    },
    "El password debe de tener mas de 6 letras",
  ],
  displayName: [
    (value) => {
      return value.length >= 1;
    },
    "El nombre es obligatorio",
  ],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector((state) => state.auth);
  const {
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    formState,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <div className="flex min-h-screen flex-col-reverse md:flex-row">
      <div className="flex w-full flex-1 items-center justify-center p-6 md:w-1/2">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-blue-900">
              Crear cuenta
            </h1>
            <p className="text-gray-500">Regístrate para comenzar</p>
          </div>

          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="text" className="text-blue-900">
                Nombre de usuario
              </Label>
              <Input
                id="displayName"
                type="text"
                placeholder="Tu nombre"
                className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${
                  !!displayNameValid && formSubmitted
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                required
              />
              {!!displayNameValid && formSubmitted && (
                <p className="text-sm text-red-500 mt-1">{displayNameValid}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-blue-900">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@ejemplo.com"
                className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${
                  !!emailValid && formSubmitted
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                name="email"
                value={email}
                onChange={onInputChange}
                required
              />
              {!!emailValid && formSubmitted && (
                <p className="text-sm text-red-500 mt-1">{displayNameValid}</p>
              )}
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
                className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${
                  !!passwordValid && formSubmitted
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                name="password"
                value={password}
                onChange={onInputChange}
                required
              />
              {!!passwordValid && formSubmitted && (
                <p className="text-sm text-red-500 mt-1">{displayNameValid}</p>
              )}
            </div>
            <Alert
              variant="destructive"
              className={!!errorMessage ? "" : "hidden"}
            >
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
            <Button
              type="submit"
              disabled={isCheckingAuthentication}
              className="w-full bg-blue-900 hover:bg-blue-800 hover:cursor-pointer"
            >
              Registrarse
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/auth/login"
              className="font-medium text-blue-900 hover:underline"
            >
              Iniciar sesión
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
