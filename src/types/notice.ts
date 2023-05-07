export interface NoticeItem {
  id: string;
  title: string;
  modifiedDate: string;
}

export interface NoticeDetail extends NoticeItem {
  content: string;
}
