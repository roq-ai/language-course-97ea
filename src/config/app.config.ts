interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Teacher', 'Student'],
  tenantName: 'Company',
  applicationName: 'Language Course',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user', 'Manage company', 'Manage lesson', 'Manage assignment'],
  getQuoteUrl: 'https://app.roq.ai/proposal/29e4f5d5-79c4-44cf-8740-ddbc3f8764be',
};
