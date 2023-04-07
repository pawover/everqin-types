/**
 * 包括常用的接口请求参数
 *
 * @namespace Req 服务请求
 */
declare namespace Req {
  /** 分页请求参数 */
  interface Page {
    page: number;
    pageSize: number;
  }
}

/**
 * 包括常用的接口响应数据
 *
 * @namespace Res 服务响应
 */
declare namespace Res {
  /** 接口响应类型 */
  type Data<T = unknown> = Promise<Base<T>>;

  /** 响应对象 */
  interface Base<T = unknown> {
    code: number;
    data: T;
    message: string;
  }

  /** 分页类型数据 */
  interface PageList<Rows extends unknown[] = unknown[]> {
    page: number;
    pageSize: number;
    total: number;
    rows: Rows;
  }

  /** 文件上传 */
  interface FileUpload {
    filePath: string;
    newName: string;
    originName: string;
  }

  /** 文件数据 */
  interface File extends FileUpload {
    readonly id: number;
    relatedId: number;
    relatedCode: string;
    createTime: string;
    updateTime: string;
  }

  /** 后端枚举 */
  interface EnumType {
    label: string;
    value: number;
    type: string;
  }
}
