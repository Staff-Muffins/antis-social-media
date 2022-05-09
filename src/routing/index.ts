import { matchPath } from "react-router";

/* pages */
import AnalyticPage from "../pages/Analytic";
import MessagePage from "../pages/Message";
import SocialMediaPage from "../pages/SocialMedia";
import PostsPage from "../pages/SocialMedia/Posts";
import ProfilePage from "../pages/SocialMedia/Profile";
import StatisticPage from "../pages/SocialMedia/Statistic";
import UsersPage from "../pages/SocialMedia/Users";
import UserPage from "../pages/SocialMedia/Users/User";
import NotFoundPage from "../pages/Static/NotFound";
import { RedirectToHome } from "./Routing";

export interface IRoute {
  readonly name: Pages;
  readonly title?: string;
  readonly path: string;
  readonly isExact: boolean;
  readonly component: any;
  childRoutes?: IRoute[];
}

export type Pages =
  | "notFound"
  | "analytic"
  | "posts"
  | "post"
  | "statistic"
  | "message"
  | "profile"
  | "users"
  | "user";

class RoutingSchema {
  private schema: IRoute[] = [
    {
      name: "analytic",
      path: "/analytic",
      title: "Analytic",
      isExact: false,
      component: AnalyticPage,
    },
    {
      name: "posts",
      path: "/posts",
      title: "Posts",
      isExact: false,
      component: PostsPage,
      childRoutes: [
        {
          name: "post",
          path: "posts/:id",
          title: "Post",
          isExact: false,
          component: PostsPage,
        },
      ],
    },
    {
      name: "statistic",
      path: "/statistic",
      title: "Statistic",
      isExact: false,
      component: StatisticPage,
    },
    {
      name: "message",
      path: "/message",
      title: "Message",
      isExact: false,
      component: MessagePage,
    },
    {
      name: "profile",
      path: "/profile",
      title: "Profile",
      isExact: false,
      component: ProfilePage,
    },
    {
      name: "users",
      path: "/users",
      title: "Users",
      isExact: false,
      component: UsersPage,
      childRoutes: [
        {
          name: "user",
          path: "users/:id",
          title: "User",
          isExact: false,
          component: UserPage,
        },
      ],
    },
    // {
    //   name: "notFound",
    //   path: "*",
    //   isExact: true,
    //   component: RedirectToHome,
    // },
  ];
  private findRouteByPath(path: string): IRoute | undefined {
    return this.schema.find(({ path: routePath }) => routePath === path);
  }
  private findRouteInArray(
    routes: IRoute[],
    routeName: Pages
  ): IRoute | undefined {
    for (let route of routes) {
      if (route.name === routeName) return route;
      if (route.childRoutes && route.childRoutes.length) {
        const foundRoute = this.findRouteInArray(route.childRoutes, routeName);
        if (foundRoute) return foundRoute;
      }
    }
  }
  private findRouteByName(name: Pages): IRoute | undefined {
    const route = this.findRouteInArray(this.schema, name);
    if (route) return route;
    return undefined;
  }
  public get getSchema() {
    return this.schema;
  }
  public getSchemaItem(name: Pages): IRoute | undefined {
    const route = this.findRouteByName(name);
    if (route && route.path) return route;
  }
  public getLink(name?: Pages): string {
    const route = name && this.findRouteByName(name);
    if (route && route.path) {
      return route.path;
    } else {
      return "/error";
    }
  }
  public getName(path: string): Pages | false {
    const route = this.findRouteByPath(path);
    if (route && route.path) {
      return route.name;
    } else {
      return false;
    }
  }
}

export default new RoutingSchema();
