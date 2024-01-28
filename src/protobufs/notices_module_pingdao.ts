/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "notices_module_pingdao";

export interface PlacardsList {
  code: number;
  message: string;
  data: Placard[];
}

export interface Placard {
  id: number;
  status: number;
  placardid: string;
  origin: string;
  title: string;
  type: string;
  description: string;
  avatar: string;
}

export interface FilterType {
  type: string;
  uid: string;
  status: string;
}

export interface TempType {
  type: string;
}

export interface NoticesTemp {
  code: number;
  message: string;
  data: Notice[];
}

export interface Notice {
  id: number;
  isread: number;
  origin: string;
  noticeid: string;
  originUid: string;
  receiver: string;
  receiverUid: string;
  avatar: string;
  title: string;
  type: string;
  description: string;
  status: string;
  extra: string;
  created: string;
}

function createBasePlacardsList(): PlacardsList {
  return { code: 0, message: "", data: [] };
}

export const PlacardsList = {
  encode(message: PlacardsList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.data) {
      Placard.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlacardsList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlacardsList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data.push(Placard.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlacardsList {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Placard.fromJSON(e)) : [],
    };
  },

  toJSON(message: PlacardsList): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => Placard.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlacardsList>, I>>(base?: I): PlacardsList {
    return PlacardsList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlacardsList>, I>>(object: I): PlacardsList {
    const message = createBasePlacardsList();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.data = object.data?.map((e) => Placard.fromPartial(e)) || [];
    return message;
  },
};

function createBasePlacard(): Placard {
  return { id: 0, status: 0, placardid: "", origin: "", title: "", type: "", description: "", avatar: "" };
}

export const Placard = {
  encode(message: Placard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.placardid !== "") {
      writer.uint32(26).string(message.placardid);
    }
    if (message.origin !== "") {
      writer.uint32(34).string(message.origin);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    if (message.avatar !== "") {
      writer.uint32(66).string(message.avatar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Placard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlacard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.placardid = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.origin = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.title = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.type = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.description = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.avatar = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Placard {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      placardid: isSet(object.placardid) ? globalThis.String(object.placardid) : "",
      origin: isSet(object.origin) ? globalThis.String(object.origin) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      avatar: isSet(object.avatar) ? globalThis.String(object.avatar) : "",
    };
  },

  toJSON(message: Placard): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.placardid !== "") {
      obj.placardid = message.placardid;
    }
    if (message.origin !== "") {
      obj.origin = message.origin;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.avatar !== "") {
      obj.avatar = message.avatar;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Placard>, I>>(base?: I): Placard {
    return Placard.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Placard>, I>>(object: I): Placard {
    const message = createBasePlacard();
    message.id = object.id ?? 0;
    message.status = object.status ?? 0;
    message.placardid = object.placardid ?? "";
    message.origin = object.origin ?? "";
    message.title = object.title ?? "";
    message.type = object.type ?? "";
    message.description = object.description ?? "";
    message.avatar = object.avatar ?? "";
    return message;
  },
};

function createBaseFilterType(): FilterType {
  return { type: "", uid: "", status: "" };
}

export const FilterType = {
  encode(message: FilterType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.uid !== "") {
      writer.uint32(18).string(message.uid);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FilterType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilterType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FilterType {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
    };
  },

  toJSON(message: FilterType): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FilterType>, I>>(base?: I): FilterType {
    return FilterType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FilterType>, I>>(object: I): FilterType {
    const message = createBaseFilterType();
    message.type = object.type ?? "";
    message.uid = object.uid ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseTempType(): TempType {
  return { type: "" };
}

export const TempType = {
  encode(message: TempType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TempType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTempType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TempType {
    return { type: isSet(object.type) ? globalThis.String(object.type) : "" };
  },

  toJSON(message: TempType): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TempType>, I>>(base?: I): TempType {
    return TempType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TempType>, I>>(object: I): TempType {
    const message = createBaseTempType();
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseNoticesTemp(): NoticesTemp {
  return { code: 0, message: "", data: [] };
}

export const NoticesTemp = {
  encode(message: NoticesTemp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.data) {
      Notice.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoticesTemp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoticesTemp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data.push(Notice.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NoticesTemp {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Notice.fromJSON(e)) : [],
    };
  },

  toJSON(message: NoticesTemp): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => Notice.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NoticesTemp>, I>>(base?: I): NoticesTemp {
    return NoticesTemp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NoticesTemp>, I>>(object: I): NoticesTemp {
    const message = createBaseNoticesTemp();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.data = object.data?.map((e) => Notice.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNotice(): Notice {
  return {
    id: 0,
    isread: 0,
    origin: "",
    noticeid: "",
    originUid: "",
    receiver: "",
    receiverUid: "",
    avatar: "",
    title: "",
    type: "",
    description: "",
    status: "",
    extra: "",
    created: "",
  };
}

export const Notice = {
  encode(message: Notice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.isread !== 0) {
      writer.uint32(16).int32(message.isread);
    }
    if (message.origin !== "") {
      writer.uint32(26).string(message.origin);
    }
    if (message.noticeid !== "") {
      writer.uint32(34).string(message.noticeid);
    }
    if (message.originUid !== "") {
      writer.uint32(42).string(message.originUid);
    }
    if (message.receiver !== "") {
      writer.uint32(50).string(message.receiver);
    }
    if (message.receiverUid !== "") {
      writer.uint32(58).string(message.receiverUid);
    }
    if (message.avatar !== "") {
      writer.uint32(66).string(message.avatar);
    }
    if (message.title !== "") {
      writer.uint32(74).string(message.title);
    }
    if (message.type !== "") {
      writer.uint32(82).string(message.type);
    }
    if (message.description !== "") {
      writer.uint32(90).string(message.description);
    }
    if (message.status !== "") {
      writer.uint32(98).string(message.status);
    }
    if (message.extra !== "") {
      writer.uint32(106).string(message.extra);
    }
    if (message.created !== "") {
      writer.uint32(114).string(message.created);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isread = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.origin = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.noticeid = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.originUid = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.receiverUid = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.avatar = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.title = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.type = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.description = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.status = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.extra = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.created = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Notice {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      isread: isSet(object.isread) ? globalThis.Number(object.isread) : 0,
      origin: isSet(object.origin) ? globalThis.String(object.origin) : "",
      noticeid: isSet(object.noticeid) ? globalThis.String(object.noticeid) : "",
      originUid: isSet(object.originUid) ? globalThis.String(object.originUid) : "",
      receiver: isSet(object.receiver) ? globalThis.String(object.receiver) : "",
      receiverUid: isSet(object.receiverUid) ? globalThis.String(object.receiverUid) : "",
      avatar: isSet(object.avatar) ? globalThis.String(object.avatar) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      extra: isSet(object.extra) ? globalThis.String(object.extra) : "",
      created: isSet(object.created) ? globalThis.String(object.created) : "",
    };
  },

  toJSON(message: Notice): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.isread !== 0) {
      obj.isread = Math.round(message.isread);
    }
    if (message.origin !== "") {
      obj.origin = message.origin;
    }
    if (message.noticeid !== "") {
      obj.noticeid = message.noticeid;
    }
    if (message.originUid !== "") {
      obj.originUid = message.originUid;
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    if (message.receiverUid !== "") {
      obj.receiverUid = message.receiverUid;
    }
    if (message.avatar !== "") {
      obj.avatar = message.avatar;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.extra !== "") {
      obj.extra = message.extra;
    }
    if (message.created !== "") {
      obj.created = message.created;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Notice>, I>>(base?: I): Notice {
    return Notice.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Notice>, I>>(object: I): Notice {
    const message = createBaseNotice();
    message.id = object.id ?? 0;
    message.isread = object.isread ?? 0;
    message.origin = object.origin ?? "";
    message.noticeid = object.noticeid ?? "";
    message.originUid = object.originUid ?? "";
    message.receiver = object.receiver ?? "";
    message.receiverUid = object.receiverUid ?? "";
    message.avatar = object.avatar ?? "";
    message.title = object.title ?? "";
    message.type = object.type ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? "";
    message.extra = object.extra ?? "";
    message.created = object.created ?? "";
    return message;
  },
};

export interface NoticeService {
  GetTemplateNotices(request: TempType): Promise<NoticesTemp>;
  AllPlacard(request: FilterType): Promise<PlacardsList>;
}

export const NoticeServiceServiceName = "notices_module_pingdao.NoticeService";
export class NoticeServiceClientImpl implements NoticeService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || NoticeServiceServiceName;
    this.rpc = rpc;
    this.GetTemplateNotices = this.GetTemplateNotices.bind(this);
    this.AllPlacard = this.AllPlacard.bind(this);
  }
  GetTemplateNotices(request: TempType): Promise<NoticesTemp> {
    const data = TempType.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTemplateNotices", data);
    return promise.then((data) => NoticesTemp.decode(_m0.Reader.create(data)));
  }

  AllPlacard(request: FilterType): Promise<PlacardsList> {
    const data = FilterType.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllPlacard", data);
    return promise.then((data) => PlacardsList.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
