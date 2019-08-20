export interface LaunchesListItem {
  flightNumber: number,
  launchDate: string,
  rocketName: string,
  launchStatus: boolean
}

export interface LaunchDetails {
  flightNumber: number,
  launchDate: string,
  rocketName: string,
  launchStatus: boolean,
  images?: string[],
  details: string,
  videoId?: string;
}
