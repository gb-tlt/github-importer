export { homeSchema } from './home'
export { aboutSchema } from './about'
export { theWorkSchema } from './theWork'
export { servicesSchema } from './services'
export { fitCohortSchema } from './fitCohort'
export { oneOnOneSchema } from './oneOnOne'
export { lifeCoachingSchema } from './lifeCoaching'
export { resourcesSchema } from './resources'
export { contactSchema } from './contact'
export { globalSchema } from './global'
export { collectionsSchema } from './collections'

export const pageSchemas = {
  home: () => import('./home').then((m) => m.homeSchema),
  about: () => import('./about').then((m) => m.aboutSchema),
  theWork: () => import('./theWork').then((m) => m.theWorkSchema),
  services: () => import('./services').then((m) => m.servicesSchema),
  fitCohort: () => import('./fitCohort').then((m) => m.fitCohortSchema),
  oneOnOne: () => import('./oneOnOne').then((m) => m.oneOnOneSchema),
  lifeCoaching: () => import('./lifeCoaching').then((m) => m.lifeCoachingSchema),
  resources: () => import('./resources').then((m) => m.resourcesSchema),
  contact: () => import('./contact').then((m) => m.contactSchema),
  global: () => import('./global').then((m) => m.globalSchema),
}
