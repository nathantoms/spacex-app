export interface LaunchesListItem {
  flightNumber: number,
  launchDate: string,
  rocketName: string,
  launchStatus: Boolean
}

export interface LaunchDetails {
  flightNumber: number,
  launchDate: string,
  rocketName: string,
  launchStatus: Boolean,
  images?: string[]
}
