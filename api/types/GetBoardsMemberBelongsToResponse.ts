export type GetBoardsMemberBelongsToResponse = {
  id: string
  nodeId: string
  name: string
  desc: string
  descData: null
  closed: boolean
  dateClosed?: string
  idOrganization: string
  idEnterprise: null
  limits: Limits
  pinned: boolean
  starred: boolean
  url: string
  prefs: Prefs
  shortLink: string
  subscribed: boolean
  labelNames: LabelNames
  powerUps: string[]
  dateLastActivity?: string
  dateLastView?: string
  shortUrl: string
  idTags: string[]
  datePluginDisable: null
  creationMethod?: string
  ixUpdate: string
  templateGallery: null
  enterpriseOwned: boolean
  idBoardSource: null
  premiumFeatures: string[]
  idMemberCreator: string
  memberships: Membership[]
};

type Limits = {
  attachments: Attachments
  boards: Boards
  cards: Cards
  checklists: Checklists
  checkItems: CheckItems
  customFields: CustomFields
  customFieldOptions: CustomFieldOptions
  labels: Labels
  lists: Lists
  stickers: Stickers
  reactions: Reactions
};

type Attachments = {
  perBoard: PerBoard
  perCard: PerCard
};

type PerBoard = {
  status: string
  disableAt: number
  warnAt: number
};

type PerCard = {
  status: string
  disableAt: number
  warnAt: number
};

type Boards = {
  totalMembersPerBoard: TotalMembersPerBoard
  totalAccessRequestsPerBoard: TotalAccessRequestsPerBoard
};

type TotalMembersPerBoard = {
  status: string
  disableAt: number
  warnAt: number
};

type TotalAccessRequestsPerBoard = {
  status: string
  disableAt: number
  warnAt: number
};

type Cards = {
  openPerBoard: OpenPerBoard
  openPerList: OpenPerList
  totalPerBoard: TotalPerBoard
  totalPerList: TotalPerList
};

type OpenPerBoard = {
  status: string
  disableAt: number
  warnAt: number
};

type OpenPerList = {
  status: string
  disableAt: number
  warnAt: number
};

type TotalPerBoard = {
  status: string
  disableAt: number
  warnAt: number
};

type TotalPerList = {
  status: string
  disableAt: number
  warnAt: number
};

type Checklists = {
  perBoard: PerBoard2
  perCard: PerCard2
};

type PerBoard2 = {
  status: string
  disableAt: number
  warnAt: number
};

type PerCard2 = {
  status: string
  disableAt: number
  warnAt: number
};

type CheckItems = {
  perChecklist: PerChecklist
};

type PerChecklist = {
  status: string
  disableAt: number
  warnAt: number
};

type CustomFields = {
  perBoard: PerBoard3
};

type PerBoard3 = {
  status: string
  disableAt: number
  warnAt: number
};

type CustomFieldOptions = {
  perField: PerField
};

type PerField = {
  status: string
  disableAt: number
  warnAt: number
};

type Labels = {
  perBoard: PerBoard4
};

type PerBoard4 = {
  status: string
  disableAt: number
  warnAt: number
};

type Lists = {
  openPerBoard: OpenPerBoard2
  totalPerBoard: TotalPerBoard2
};

type OpenPerBoard2 = {
  status: string
  disableAt: number
  warnAt: number
};

type TotalPerBoard2 = {
  status: string
  disableAt: number
  warnAt: number
};

type Stickers = {
  perCard: PerCard3
};

type PerCard3 = {
  status: string
  disableAt: number
  warnAt: number
};

type Reactions = {
  perAction: PerAction
  uniquePerAction: UniquePerAction
};

type PerAction = {
  status: string
  disableAt: number
  warnAt: number
};

type UniquePerAction = {
  status: string
  disableAt: number
  warnAt: number
};

type Prefs = {
  permissionLevel: string
  hideVotes: boolean
  voting: string
  comments: string
  invitations: string
  selfJoin: boolean
  cardCovers: boolean
  cardCounts: boolean
  isTemplate: boolean
  cardAging: string
  calendarFeedEnabled: boolean
  hiddenPluginBoardButtons: string[]
  switcherViews: SwitcherView[]
  background: string
  backgroundColor?: string
  backgroundImage?: string
  backgroundTile: boolean
  backgroundBrightness: string
  sharedSourceUrl?: string
  backgroundImageScaled?: BackgroundImageScaled[]
  backgroundBottomColor: string
  backgroundTopColor: string
  canBePublic: boolean
  canBeEnterprise: boolean
  canBeOrg: boolean
  canBePrivate: boolean
  canInvite: boolean
};

type SwitcherView = {
  viewType: string
  enabled: boolean
};

type BackgroundImageScaled = {
  width: number
  height: number
  url: string
};

type LabelNames = {
  green: string
  yellow: string
  orange: string
  red: string
  purple: string
  blue: string
  sky: string
  lime: string
  pink: string
  black: string
  green_dark: string
  yellow_dark: string
  orange_dark: string
  red_dark: string
  purple_dark: string
  blue_dark: string
  sky_dark: string
  lime_dark: string
  pink_dark: string
  black_dark: string
  green_light: string
  yellow_light: string
  orange_light: string
  red_light: string
  purple_light: string
  blue_light: string
  sky_light: string
  lime_light: string
  pink_light: string
  black_light: string
};

type Membership = {
  id: string
  idMember: string
  memberType: string
  unconfirmed: boolean
  deactivated: boolean
};
