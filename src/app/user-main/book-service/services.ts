export class Services {
  value: string;
  viewValue: string;
}

export class ServiceGroup {
  disabled?: boolean;
  name: string;
  services: Services[];
}

export class Cities {
  value: string;
  viewValue: string;
}

export interface TimeSlot {
  value: string;
  viewValue: string;
}
