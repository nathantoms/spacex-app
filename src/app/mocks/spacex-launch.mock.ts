const LaunchListItemDefault = (): any => ({
  flight_number: 1,
  launch_date_utc: 'my_date',
  rocket: {
    rocket_name: 'rocket 1'
  },
  launch_success: true
});

const LaunchDetailDefault = (): any => ({
  flight_number: 1,
  launch_date_utc: 'myDate',
  rocket: {
    rocket_name: 'rocket 1'
  },
  launch_success: true,
  links: {
    flickr_images: 'myImageUrl',
    youtube_id: 'id'
  },
  details: 'description of rocket launch'
});

export const getLaunchesListMock = (launches?: Array<any>): any => ({
  ...LaunchListItemDefault,
  ...launches
});

export const getLaunchDetailMock = (): any => ({
  ...LaunchDetailDefault
});
