interface Buttons {
  image: string;
  text: string;
}

export const SelfHostedSignInOptions: Buttons[] = [
  {
    image: "/signin/gitlab.svg",
    text: "Self Hosted GitLab",
  },
  {
    image: "/signin/sso.svg",
    text: "Sign in with SSO",
  },
];

export const SaasSignInOptions: Buttons[] = [
  {
    image: "/signin/github.svg",
    text: "Sign in with Github",
  },
  {
    image: "/signin/bitbucket.svg",
    text: "Sign in with BitBucket",
  },
  {
    image: "/signin/azure-devops.svg",
    text: "Sign in with Azure Devops",
  },
  {
    image: "/signin/gitlab.svg",
    text: "Self Hosted GitLab",
  },
];
