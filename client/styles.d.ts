// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface NavLink {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
