export type CreateCardResponse = {
  id:                    string;
  address:               string;
  badges:                Badges;
  checkItemStates:       string[];
  closed:                boolean;
  coordinates:           string;
  creationMethod:        string;
  dateLastActivity:      Date;
  desc:                  string;
  descData:              DescData;
  due:                   string;
  dueReminder:           string;
  idBoard:               string;
  idChecklists:          IDChecklist[];
  idLabels:              IDLabel[];
  idList:                string;
  idMembers:             string[];
  idMembersVoted:        string[];
  idShort:               number;
  labels:                string[];
  limits:                Limits;
  locationName:          string;
  manualCoverAttachment: boolean;
  name:                  string;
  pos:                   number;
  shortLink:             string;
  shortUrl:              string;
  subscribed:            boolean;
  url:                   string;
  cover:                 Cover;
};

type Badges = {
  attachmentsByType:  AttachmentsByType;
  location:           boolean;
  votes:              number;
  viewingMemberVoted: boolean;
  subscribed:         boolean;
  fogbugz:            string;
  checkItems:         number;
  checkItemsChecked:  number;
  comments:           number;
  attachments:        number;
  description:        boolean;
  due:                string;
  start:              string;
  dueComplete:        boolean;
};

type AttachmentsByType = {
  trello: Trello;
};

type Trello = {
  board: number;
  card:  number;
};

type Cover = {
  color:                string;
  idUploadedBackground: boolean;
  size:                 string;
  brightness:           string;
  isTemplate:           boolean;
};

type DescData = {
  emoji: Emoji;
};

type Emoji = object;

type IDChecklist = {
  id: string;
};

type IDLabel = {
  id:      string;
  idBoard: string;
  name:    string;
  color:   string;
};

type Limits = {
  attachments: Attachments;
};

type Attachments = {
  perBoard: PerBoard;
};

type PerBoard = {
  status:    string;
  disableAt: number;
  warnAt:    number;
};
