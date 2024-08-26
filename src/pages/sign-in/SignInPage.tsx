import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { adminFormSchema } from "@/validators/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usePost as useLogin } from "@/hooks";
import { z } from "zod";
import { useEffect } from "react";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Loader, LogIn } from "lucide-react";

export function SignInPage() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof adminFormSchema>>({
    resolver: zodResolver(adminFormSchema),
    defaultValues: {
      name: "",
      email:  "",
      password: "",
    },
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid, errors },
  } = form;

  const {
    data: loginData,
    mutate: login,
    isPending: isExecuting,
    isSuccess: isPostSuccessful,
  } = useLogin("/api/admin/login");

  useEffect(() => {
    if (isPostSuccessful) {
      reset();
      console.log(loginData);
      localStorage.setItem("authenticated", loginData.authenticated);
      navigate("/dashboard");
    }
  }, [isPostSuccessful, loginData, navigate, reset]);

  async function onSubmit(data: z.infer<typeof adminFormSchema>) {
    console.log(data);
    login(data);
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12 ">
        <div className="grid gap-6 mx-auto w-[70%]">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your credentials below to login to your account
            </p>
          </div>
          <div className="grid gap-4 space-y-4">
            <Form {...form}>
              <form
                autoComplete="off"
                className="space-y-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <FormField
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="name">Name</Label>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isExecuting}
                          id="name"
                          placeholder="Enter your full name"
                          className={`${
                            errors.name
                              ? "border border-destructive focus-visible:ring-destructive"
                              : "border-primary"
                          }`}
                        />
                      </FormControl>
                      <FormMessage>{errors.name?.message}</FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="email">Email</Label>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isExecuting}
                          id="email"
                          placeholder="name@domain.com"
                          className={`${
                            errors.email
                              ? "border-destructive focus-visible:ring-destructive"
                              : ""
                          }`}
                          type="email"
                        />
                      </FormControl>
                      <FormMessage>{errors.email?.message}</FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isExecuting}
                          id="password"
                          placeholder="Enter your password"
                          className={`${
                            errors.password
                              ? "border-destructive focus-visible:ring-destructive"
                              : ""
                          }`}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage>{errors.password?.message}</FormMessage>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isExecuting}
                  className="w-full h-12"
                  onClick={() => {
                    if (!isValid) {
                      toast.error("Please fill required fields");
                    }
                  }}
                >
                  {isExecuting ? (
                    <>
                      Authenticating
                      <Loader className="w-5 h-5 ml-1 animate-spin" />
                    </>
                  ) : (
                    <>
                      Login <LogIn className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src="/knust_pic.jpeg"
          alt="Image"
          width="1920"
          height="1080"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
