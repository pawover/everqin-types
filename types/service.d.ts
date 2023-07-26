/**
 * 包括常用的接口请求类型
 *
 * @namespace Req 服务请求
 */
declare namespace Req {
  /** Page Object */
  interface Page<T = unknown> extends Record<keyof any, T> {
    page?: number | undefined;
    pageSize?: number | undefined;
  }
}

/**
 * 包括常用的接口响应类型
 *
 * @namespace Res 服务响应
 */
declare namespace Res {
  /** Promise Object */
  interface Promises<T = unknown> extends Promise<Base<T>> {}

  /** Base Object */
  interface Base<T = unknown> {
    code: number;
    data: T;
    msg: string;
  }

  /** Page Object */
  interface Page<Rows extends unknown[] = unknown[]> {
    page: number;
    pageSize: number;
    total: number;
    rows: Rows;
  }

  /** FileUpload Response Data */
  interface FileUpload {
    filePath: string;
    newName: string;
    originName: string;
  }

  /** File Data */
  interface File extends FileUpload {
    readonly id: number;
    relatedId: number;
    relatedCode: string;
    createTime: string;
    updateTime: string;
  }

  /** Enum Object */
  interface EnumType {
    label: string;
    value: number;
    type: string;
  }
}
