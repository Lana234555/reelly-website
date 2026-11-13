// Extra attributes used by the Webflow markup and its integrations (Wized, Webflow forms).
import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    wized?: string;
  }
  interface FormHTMLAttributes<T> {
    redirect?: string;
  }
}
