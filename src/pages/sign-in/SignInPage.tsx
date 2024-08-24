import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function SignInPage() {
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
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@domain.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="inline-block ml-auto text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
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
