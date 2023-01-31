import { lazy } from 'react'

const LandingPage = lazy(async () => await import('./pages/LandingPage'))
const SearchPage = lazy(async () => await import('./pages/SearchPage'))
const AddCampground = lazy(async () => await import('./pages/AddCampground'))
const AddNewComment = lazy(async () => await import('./pages/AddNewComment'))
const SignUpPage = lazy(async () => await import('./pages/auth/SignUpPage'))
const SignInPage = lazy(async () => await import('./pages/auth/SignInPage'))
const ChangePassPage = lazy(async () => await import('./pages/auth/ChangePassPage'))
const ForgotPasswordPage = lazy(async () => await import('./pages/auth/ForgotPassPage'))
const ResetPasswordPage = lazy(async () => await import('./pages/auth/ResetPassPage'))

interface IRoute {
  path: string
  component: any
  name: string
  protected: boolean
  nav: boolean
  showWhenLoggedIn: boolean
  showWhenLoggedOut: boolean
}

const routes: IRoute[] = [
  {
    path: '/',
    component: LandingPage,
    name: 'Home',
    protected: false,
    nav: true,
    showWhenLoggedIn: true,
    showWhenLoggedOut: true
  },
  {
    path: '/camps',
    component: SearchPage,
    name: 'Camps',
    protected: false,
    nav: true,
    showWhenLoggedIn: true,
    showWhenLoggedOut: true
  },
  {
    path: '/add-campground',
    component: AddCampground,
    name: 'Add Campground',
    protected: true,
    nav: false,
    showWhenLoggedIn: false,
    showWhenLoggedOut: false
  },
  {
    path: '/add-comment',
    component: AddNewComment,
    name: 'New Comment',
    protected: true,
    nav: false,
    showWhenLoggedIn: false,
    showWhenLoggedOut: false
  },
  {
    path: '/sign-in',
    component: SignInPage,
    name: 'Login',
    protected: false,
    nav: true,
    showWhenLoggedIn: false,
    showWhenLoggedOut: true
  },
  {
    path: '/sign-up',
    component: SignUpPage,
    name: 'Create an account',
    protected: false,
    nav: true,
    showWhenLoggedIn: false,
    showWhenLoggedOut: true
  },
  {
    path: '/change-pass',
    component: ChangePassPage,
    name: 'Change Password Page',
    protected: true,
    nav: false,
    showWhenLoggedIn: true,
    showWhenLoggedOut: false
  },
  {
    path: '/forgot-pass',
    component: ForgotPasswordPage,
    name: 'Forgot Password Page',
    protected: false,
    nav: false,
    showWhenLoggedIn: true,
    showWhenLoggedOut: true
  },
  {
    path: '/reset-pass',
    component: ResetPasswordPage,
    name: 'Reset Password Page',
    protected: false,
    nav: false,
    showWhenLoggedIn: false,
    showWhenLoggedOut: false
  }

]

export default routes
