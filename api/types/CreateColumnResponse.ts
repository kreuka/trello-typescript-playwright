export type CreateColumnResponse = {
  id:         string;
  name:       string;
  closed:     boolean;
  pos:        number;
  softLimit:  string;
  idBoard:    string;
  subscribed: boolean;
  limits:     Limits;
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
