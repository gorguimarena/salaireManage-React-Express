
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model PayRun
 * 
 */
export type PayRun = $Result.DefaultSelection<Prisma.$PayRunPayload>
/**
 * Model Payslip
 * 
 */
export type Payslip = $Result.DefaultSelection<Prisma.$PayslipPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model WorkSchedule
 * 
 */
export type WorkSchedule = $Result.DefaultSelection<Prisma.$WorkSchedulePayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ContractType: {
  DAILY: 'DAILY',
  HOURLY: 'HOURLY',
  FIXED: 'FIXED',
  FEE: 'FEE'
};

export type ContractType = (typeof ContractType)[keyof typeof ContractType]


export const PayRunType: {
  MONTHLY: 'MONTHLY',
  WEEKLY: 'WEEKLY',
  DAILY: 'DAILY'
};

export type PayRunType = (typeof PayRunType)[keyof typeof PayRunType]


export const PayRunStatus: {
  DRAFT: 'DRAFT',
  APPROVED: 'APPROVED',
  CLOSED: 'CLOSED'
};

export type PayRunStatus = (typeof PayRunStatus)[keyof typeof PayRunStatus]


export const PayslipStatus: {
  DRAFT: 'DRAFT',
  APPROVED: 'APPROVED',
  PAID: 'PAID',
  PARTIAL: 'PARTIAL',
  PENDING: 'PENDING'
};

export type PayslipStatus = (typeof PayslipStatus)[keyof typeof PayslipStatus]


export const PaymentMode: {
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER',
  ORANGE_MONEY: 'ORANGE_MONEY',
  WAVE: 'WAVE',
  OTHER: 'OTHER'
};

export type PaymentMode = (typeof PaymentMode)[keyof typeof PaymentMode]

}

export type ContractType = $Enums.ContractType

export const ContractType: typeof $Enums.ContractType

export type PayRunType = $Enums.PayRunType

export const PayRunType: typeof $Enums.PayRunType

export type PayRunStatus = $Enums.PayRunStatus

export const PayRunStatus: typeof $Enums.PayRunStatus

export type PayslipStatus = $Enums.PayslipStatus

export const PayslipStatus: typeof $Enums.PayslipStatus

export type PaymentMode = $Enums.PaymentMode

export const PaymentMode: typeof $Enums.PaymentMode

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payRun`: Exposes CRUD operations for the **PayRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayRuns
    * const payRuns = await prisma.payRun.findMany()
    * ```
    */
  get payRun(): Prisma.PayRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payslip`: Exposes CRUD operations for the **Payslip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payslips
    * const payslips = await prisma.payslip.findMany()
    * ```
    */
  get payslip(): Prisma.PayslipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workSchedule`: Exposes CRUD operations for the **WorkSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkSchedules
    * const workSchedules = await prisma.workSchedule.findMany()
    * ```
    */
  get workSchedule(): Prisma.WorkScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Employee: 'Employee',
    PayRun: 'PayRun',
    Payslip: 'Payslip',
    Payment: 'Payment',
    WorkSchedule: 'WorkSchedule',
    Attendance: 'Attendance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "employee" | "payRun" | "payslip" | "payment" | "workSchedule" | "attendance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      PayRun: {
        payload: Prisma.$PayRunPayload<ExtArgs>
        fields: Prisma.PayRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          findFirst: {
            args: Prisma.PayRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          findMany: {
            args: Prisma.PayRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>[]
          }
          create: {
            args: Prisma.PayRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          createMany: {
            args: Prisma.PayRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PayRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          update: {
            args: Prisma.PayRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          deleteMany: {
            args: Prisma.PayRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          aggregate: {
            args: Prisma.PayRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayRun>
          }
          groupBy: {
            args: Prisma.PayRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayRunCountArgs<ExtArgs>
            result: $Utils.Optional<PayRunCountAggregateOutputType> | number
          }
        }
      }
      Payslip: {
        payload: Prisma.$PayslipPayload<ExtArgs>
        fields: Prisma.PayslipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayslipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayslipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          findFirst: {
            args: Prisma.PayslipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayslipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          findMany: {
            args: Prisma.PayslipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>[]
          }
          create: {
            args: Prisma.PayslipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          createMany: {
            args: Prisma.PayslipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PayslipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          update: {
            args: Prisma.PayslipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          deleteMany: {
            args: Prisma.PayslipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayslipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayslipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          aggregate: {
            args: Prisma.PayslipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayslip>
          }
          groupBy: {
            args: Prisma.PayslipGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayslipGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayslipCountArgs<ExtArgs>
            result: $Utils.Optional<PayslipCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      WorkSchedule: {
        payload: Prisma.$WorkSchedulePayload<ExtArgs>
        fields: Prisma.WorkScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          findFirst: {
            args: Prisma.WorkScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          findMany: {
            args: Prisma.WorkScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>[]
          }
          create: {
            args: Prisma.WorkScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          createMany: {
            args: Prisma.WorkScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          update: {
            args: Prisma.WorkScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          deleteMany: {
            args: Prisma.WorkScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          aggregate: {
            args: Prisma.WorkScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkSchedule>
          }
          groupBy: {
            args: Prisma.WorkScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<WorkScheduleCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    employee?: EmployeeOmit
    payRun?: PayRunOmit
    payslip?: PayslipOmit
    payment?: PaymentOmit
    workSchedule?: WorkScheduleOmit
    attendance?: AttendanceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    payslips: number
    payments: number
    workSchedules: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payslips?: boolean | EmployeeCountOutputTypeCountPayslipsArgs
    payments?: boolean | EmployeeCountOutputTypeCountPaymentsArgs
    workSchedules?: boolean | EmployeeCountOutputTypeCountWorkSchedulesArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPayslipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayslipWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountWorkSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkScheduleWhereInput
  }


  /**
   * Count Type PayRunCountOutputType
   */

  export type PayRunCountOutputType = {
    payslips: number
  }

  export type PayRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payslips?: boolean | PayRunCountOutputTypeCountPayslipsArgs
  }

  // Custom InputTypes
  /**
   * PayRunCountOutputType without action
   */
  export type PayRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRunCountOutputType
     */
    select?: PayRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayRunCountOutputType without action
   */
  export type PayRunCountOutputTypeCountPayslipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayslipWhereInput
  }


  /**
   * Count Type PayslipCountOutputType
   */

  export type PayslipCountOutputType = {
    payments: number
  }

  export type PayslipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PayslipCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * PayslipCountOutputType without action
   */
  export type PayslipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayslipCountOutputType
     */
    select?: PayslipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayslipCountOutputType without action
   */
  export type PayslipCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type WorkScheduleCountOutputType
   */

  export type WorkScheduleCountOutputType = {
    attendances: number
  }

  export type WorkScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | WorkScheduleCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * WorkScheduleCountOutputType without action
   */
  export type WorkScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkScheduleCountOutputType
     */
    select?: WorkScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkScheduleCountOutputType without action
   */
  export type WorkScheduleCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    salaryOrRate: Decimal | null
  }

  export type EmployeeSumAggregateOutputType = {
    salaryOrRate: Decimal | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    position: string | null
    contractType: $Enums.ContractType | null
    salaryOrRate: Decimal | null
    bankDetails: string | null
    active: boolean | null
    email: string | null
    phone: string | null
    hireDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    position: string | null
    contractType: $Enums.ContractType | null
    salaryOrRate: Decimal | null
    bankDetails: string | null
    active: boolean | null
    email: string | null
    phone: string | null
    hireDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    fullName: number
    position: number
    contractType: number
    salaryOrRate: number
    bankDetails: number
    active: number
    email: number
    phone: number
    hireDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    salaryOrRate?: true
  }

  export type EmployeeSumAggregateInputType = {
    salaryOrRate?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    fullName?: true
    position?: true
    contractType?: true
    salaryOrRate?: true
    bankDetails?: true
    active?: true
    email?: true
    phone?: true
    hireDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    fullName?: true
    position?: true
    contractType?: true
    salaryOrRate?: true
    bankDetails?: true
    active?: true
    email?: true
    phone?: true
    hireDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    fullName?: true
    position?: true
    contractType?: true
    salaryOrRate?: true
    bankDetails?: true
    active?: true
    email?: true
    phone?: true
    hireDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    fullName: string
    position: string | null
    contractType: $Enums.ContractType
    salaryOrRate: Decimal
    bankDetails: string | null
    active: boolean
    email: string | null
    phone: string | null
    hireDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    position?: boolean
    contractType?: boolean
    salaryOrRate?: boolean
    bankDetails?: boolean
    active?: boolean
    email?: boolean
    phone?: boolean
    hireDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payslips?: boolean | Employee$payslipsArgs<ExtArgs>
    payments?: boolean | Employee$paymentsArgs<ExtArgs>
    workSchedules?: boolean | Employee$workSchedulesArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    id?: boolean
    fullName?: boolean
    position?: boolean
    contractType?: boolean
    salaryOrRate?: boolean
    bankDetails?: boolean
    active?: boolean
    email?: boolean
    phone?: boolean
    hireDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "position" | "contractType" | "salaryOrRate" | "bankDetails" | "active" | "email" | "phone" | "hireDate" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payslips?: boolean | Employee$payslipsArgs<ExtArgs>
    payments?: boolean | Employee$paymentsArgs<ExtArgs>
    workSchedules?: boolean | Employee$workSchedulesArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      payslips: Prisma.$PayslipPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      workSchedules: Prisma.$WorkSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      position: string | null
      contractType: $Enums.ContractType
      salaryOrRate: Prisma.Decimal
      bankDetails: string | null
      active: boolean
      email: string | null
      phone: string | null
      hireDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payslips<T extends Employee$payslipsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$payslipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Employee$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workSchedules<T extends Employee$workSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$workSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly fullName: FieldRef<"Employee", 'String'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly contractType: FieldRef<"Employee", 'ContractType'>
    readonly salaryOrRate: FieldRef<"Employee", 'Decimal'>
    readonly bankDetails: FieldRef<"Employee", 'String'>
    readonly active: FieldRef<"Employee", 'Boolean'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly hireDate: FieldRef<"Employee", 'DateTime'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.payslips
   */
  export type Employee$payslipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    where?: PayslipWhereInput
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    cursor?: PayslipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * Employee.payments
   */
  export type Employee$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Employee.workSchedules
   */
  export type Employee$workSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    where?: WorkScheduleWhereInput
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    cursor?: WorkScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model PayRun
   */

  export type AggregatePayRun = {
    _count: PayRunCountAggregateOutputType | null
    _min: PayRunMinAggregateOutputType | null
    _max: PayRunMaxAggregateOutputType | null
  }

  export type PayRunMinAggregateOutputType = {
    id: string | null
    periodStart: Date | null
    periodEnd: Date | null
    type: $Enums.PayRunType | null
    status: $Enums.PayRunStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type PayRunMaxAggregateOutputType = {
    id: string | null
    periodStart: Date | null
    periodEnd: Date | null
    type: $Enums.PayRunType | null
    status: $Enums.PayRunStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type PayRunCountAggregateOutputType = {
    id: number
    periodStart: number
    periodEnd: number
    type: number
    status: number
    createdAt: number
    updatedAt: number
    companyId: number
    _all: number
  }


  export type PayRunMinAggregateInputType = {
    id?: true
    periodStart?: true
    periodEnd?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type PayRunMaxAggregateInputType = {
    id?: true
    periodStart?: true
    periodEnd?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type PayRunCountAggregateInputType = {
    id?: true
    periodStart?: true
    periodEnd?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    _all?: true
  }

  export type PayRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayRun to aggregate.
     */
    where?: PayRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRuns to fetch.
     */
    orderBy?: PayRunOrderByWithRelationInput | PayRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayRuns
    **/
    _count?: true | PayRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayRunMaxAggregateInputType
  }

  export type GetPayRunAggregateType<T extends PayRunAggregateArgs> = {
        [P in keyof T & keyof AggregatePayRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayRun[P]>
      : GetScalarType<T[P], AggregatePayRun[P]>
  }




  export type PayRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayRunWhereInput
    orderBy?: PayRunOrderByWithAggregationInput | PayRunOrderByWithAggregationInput[]
    by: PayRunScalarFieldEnum[] | PayRunScalarFieldEnum
    having?: PayRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayRunCountAggregateInputType | true
    _min?: PayRunMinAggregateInputType
    _max?: PayRunMaxAggregateInputType
  }

  export type PayRunGroupByOutputType = {
    id: string
    periodStart: Date
    periodEnd: Date
    type: $Enums.PayRunType
    status: $Enums.PayRunStatus
    createdAt: Date
    updatedAt: Date
    companyId: string
    _count: PayRunCountAggregateOutputType | null
    _min: PayRunMinAggregateOutputType | null
    _max: PayRunMaxAggregateOutputType | null
  }

  type GetPayRunGroupByPayload<T extends PayRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayRunGroupByOutputType[P]>
            : GetScalarType<T[P], PayRunGroupByOutputType[P]>
        }
      >
    >


  export type PayRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    payslips?: boolean | PayRun$payslipsArgs<ExtArgs>
    _count?: boolean | PayRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payRun"]>



  export type PayRunSelectScalar = {
    id?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
  }

  export type PayRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "periodStart" | "periodEnd" | "type" | "status" | "createdAt" | "updatedAt" | "companyId", ExtArgs["result"]["payRun"]>
  export type PayRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payslips?: boolean | PayRun$payslipsArgs<ExtArgs>
    _count?: boolean | PayRunCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PayRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayRun"
    objects: {
      payslips: Prisma.$PayslipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      periodStart: Date
      periodEnd: Date
      type: $Enums.PayRunType
      status: $Enums.PayRunStatus
      createdAt: Date
      updatedAt: Date
      companyId: string
    }, ExtArgs["result"]["payRun"]>
    composites: {}
  }

  type PayRunGetPayload<S extends boolean | null | undefined | PayRunDefaultArgs> = $Result.GetResult<Prisma.$PayRunPayload, S>

  type PayRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayRunCountAggregateInputType | true
    }

  export interface PayRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayRun'], meta: { name: 'PayRun' } }
    /**
     * Find zero or one PayRun that matches the filter.
     * @param {PayRunFindUniqueArgs} args - Arguments to find a PayRun
     * @example
     * // Get one PayRun
     * const payRun = await prisma.payRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayRunFindUniqueArgs>(args: SelectSubset<T, PayRunFindUniqueArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayRunFindUniqueOrThrowArgs} args - Arguments to find a PayRun
     * @example
     * // Get one PayRun
     * const payRun = await prisma.payRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayRunFindUniqueOrThrowArgs>(args: SelectSubset<T, PayRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunFindFirstArgs} args - Arguments to find a PayRun
     * @example
     * // Get one PayRun
     * const payRun = await prisma.payRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayRunFindFirstArgs>(args?: SelectSubset<T, PayRunFindFirstArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunFindFirstOrThrowArgs} args - Arguments to find a PayRun
     * @example
     * // Get one PayRun
     * const payRun = await prisma.payRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayRunFindFirstOrThrowArgs>(args?: SelectSubset<T, PayRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayRuns
     * const payRuns = await prisma.payRun.findMany()
     * 
     * // Get first 10 PayRuns
     * const payRuns = await prisma.payRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payRunWithIdOnly = await prisma.payRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayRunFindManyArgs>(args?: SelectSubset<T, PayRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayRun.
     * @param {PayRunCreateArgs} args - Arguments to create a PayRun.
     * @example
     * // Create one PayRun
     * const PayRun = await prisma.payRun.create({
     *   data: {
     *     // ... data to create a PayRun
     *   }
     * })
     * 
     */
    create<T extends PayRunCreateArgs>(args: SelectSubset<T, PayRunCreateArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayRuns.
     * @param {PayRunCreateManyArgs} args - Arguments to create many PayRuns.
     * @example
     * // Create many PayRuns
     * const payRun = await prisma.payRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayRunCreateManyArgs>(args?: SelectSubset<T, PayRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PayRun.
     * @param {PayRunDeleteArgs} args - Arguments to delete one PayRun.
     * @example
     * // Delete one PayRun
     * const PayRun = await prisma.payRun.delete({
     *   where: {
     *     // ... filter to delete one PayRun
     *   }
     * })
     * 
     */
    delete<T extends PayRunDeleteArgs>(args: SelectSubset<T, PayRunDeleteArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayRun.
     * @param {PayRunUpdateArgs} args - Arguments to update one PayRun.
     * @example
     * // Update one PayRun
     * const payRun = await prisma.payRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayRunUpdateArgs>(args: SelectSubset<T, PayRunUpdateArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayRuns.
     * @param {PayRunDeleteManyArgs} args - Arguments to filter PayRuns to delete.
     * @example
     * // Delete a few PayRuns
     * const { count } = await prisma.payRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayRunDeleteManyArgs>(args?: SelectSubset<T, PayRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayRuns
     * const payRun = await prisma.payRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayRunUpdateManyArgs>(args: SelectSubset<T, PayRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PayRun.
     * @param {PayRunUpsertArgs} args - Arguments to update or create a PayRun.
     * @example
     * // Update or create a PayRun
     * const payRun = await prisma.payRun.upsert({
     *   create: {
     *     // ... data to create a PayRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayRun we want to update
     *   }
     * })
     */
    upsert<T extends PayRunUpsertArgs>(args: SelectSubset<T, PayRunUpsertArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunCountArgs} args - Arguments to filter PayRuns to count.
     * @example
     * // Count the number of PayRuns
     * const count = await prisma.payRun.count({
     *   where: {
     *     // ... the filter for the PayRuns we want to count
     *   }
     * })
    **/
    count<T extends PayRunCountArgs>(
      args?: Subset<T, PayRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayRunAggregateArgs>(args: Subset<T, PayRunAggregateArgs>): Prisma.PrismaPromise<GetPayRunAggregateType<T>>

    /**
     * Group by PayRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayRunGroupByArgs['orderBy'] }
        : { orderBy?: PayRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayRun model
   */
  readonly fields: PayRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payslips<T extends PayRun$payslipsArgs<ExtArgs> = {}>(args?: Subset<T, PayRun$payslipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayRun model
   */
  interface PayRunFieldRefs {
    readonly id: FieldRef<"PayRun", 'String'>
    readonly periodStart: FieldRef<"PayRun", 'DateTime'>
    readonly periodEnd: FieldRef<"PayRun", 'DateTime'>
    readonly type: FieldRef<"PayRun", 'PayRunType'>
    readonly status: FieldRef<"PayRun", 'PayRunStatus'>
    readonly createdAt: FieldRef<"PayRun", 'DateTime'>
    readonly updatedAt: FieldRef<"PayRun", 'DateTime'>
    readonly companyId: FieldRef<"PayRun", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PayRun findUnique
   */
  export type PayRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRun to fetch.
     */
    where: PayRunWhereUniqueInput
  }

  /**
   * PayRun findUniqueOrThrow
   */
  export type PayRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRun to fetch.
     */
    where: PayRunWhereUniqueInput
  }

  /**
   * PayRun findFirst
   */
  export type PayRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRun to fetch.
     */
    where?: PayRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRuns to fetch.
     */
    orderBy?: PayRunOrderByWithRelationInput | PayRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayRuns.
     */
    cursor?: PayRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayRuns.
     */
    distinct?: PayRunScalarFieldEnum | PayRunScalarFieldEnum[]
  }

  /**
   * PayRun findFirstOrThrow
   */
  export type PayRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRun to fetch.
     */
    where?: PayRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRuns to fetch.
     */
    orderBy?: PayRunOrderByWithRelationInput | PayRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayRuns.
     */
    cursor?: PayRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayRuns.
     */
    distinct?: PayRunScalarFieldEnum | PayRunScalarFieldEnum[]
  }

  /**
   * PayRun findMany
   */
  export type PayRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRuns to fetch.
     */
    where?: PayRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRuns to fetch.
     */
    orderBy?: PayRunOrderByWithRelationInput | PayRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayRuns.
     */
    cursor?: PayRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRuns.
     */
    skip?: number
    distinct?: PayRunScalarFieldEnum | PayRunScalarFieldEnum[]
  }

  /**
   * PayRun create
   */
  export type PayRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * The data needed to create a PayRun.
     */
    data: XOR<PayRunCreateInput, PayRunUncheckedCreateInput>
  }

  /**
   * PayRun createMany
   */
  export type PayRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayRuns.
     */
    data: PayRunCreateManyInput | PayRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayRun update
   */
  export type PayRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * The data needed to update a PayRun.
     */
    data: XOR<PayRunUpdateInput, PayRunUncheckedUpdateInput>
    /**
     * Choose, which PayRun to update.
     */
    where: PayRunWhereUniqueInput
  }

  /**
   * PayRun updateMany
   */
  export type PayRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayRuns.
     */
    data: XOR<PayRunUpdateManyMutationInput, PayRunUncheckedUpdateManyInput>
    /**
     * Filter which PayRuns to update
     */
    where?: PayRunWhereInput
    /**
     * Limit how many PayRuns to update.
     */
    limit?: number
  }

  /**
   * PayRun upsert
   */
  export type PayRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * The filter to search for the PayRun to update in case it exists.
     */
    where: PayRunWhereUniqueInput
    /**
     * In case the PayRun found by the `where` argument doesn't exist, create a new PayRun with this data.
     */
    create: XOR<PayRunCreateInput, PayRunUncheckedCreateInput>
    /**
     * In case the PayRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayRunUpdateInput, PayRunUncheckedUpdateInput>
  }

  /**
   * PayRun delete
   */
  export type PayRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter which PayRun to delete.
     */
    where: PayRunWhereUniqueInput
  }

  /**
   * PayRun deleteMany
   */
  export type PayRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayRuns to delete
     */
    where?: PayRunWhereInput
    /**
     * Limit how many PayRuns to delete.
     */
    limit?: number
  }

  /**
   * PayRun.payslips
   */
  export type PayRun$payslipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    where?: PayslipWhereInput
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    cursor?: PayslipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * PayRun without action
   */
  export type PayRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
  }


  /**
   * Model Payslip
   */

  export type AggregatePayslip = {
    _count: PayslipCountAggregateOutputType | null
    _avg: PayslipAvgAggregateOutputType | null
    _sum: PayslipSumAggregateOutputType | null
    _min: PayslipMinAggregateOutputType | null
    _max: PayslipMaxAggregateOutputType | null
  }

  export type PayslipAvgAggregateOutputType = {
    gross: Decimal | null
    deductions: Decimal | null
    netPay: Decimal | null
    daysWorked: number | null
  }

  export type PayslipSumAggregateOutputType = {
    gross: Decimal | null
    deductions: Decimal | null
    netPay: Decimal | null
    daysWorked: number | null
  }

  export type PayslipMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    payRunId: string | null
    gross: Decimal | null
    deductions: Decimal | null
    netPay: Decimal | null
    daysWorked: number | null
    status: $Enums.PayslipStatus | null
    lockedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayslipMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    payRunId: string | null
    gross: Decimal | null
    deductions: Decimal | null
    netPay: Decimal | null
    daysWorked: number | null
    status: $Enums.PayslipStatus | null
    lockedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayslipCountAggregateOutputType = {
    id: number
    employeeId: number
    payRunId: number
    gross: number
    deductions: number
    netPay: number
    daysWorked: number
    status: number
    lockedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayslipAvgAggregateInputType = {
    gross?: true
    deductions?: true
    netPay?: true
    daysWorked?: true
  }

  export type PayslipSumAggregateInputType = {
    gross?: true
    deductions?: true
    netPay?: true
    daysWorked?: true
  }

  export type PayslipMinAggregateInputType = {
    id?: true
    employeeId?: true
    payRunId?: true
    gross?: true
    deductions?: true
    netPay?: true
    daysWorked?: true
    status?: true
    lockedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayslipMaxAggregateInputType = {
    id?: true
    employeeId?: true
    payRunId?: true
    gross?: true
    deductions?: true
    netPay?: true
    daysWorked?: true
    status?: true
    lockedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayslipCountAggregateInputType = {
    id?: true
    employeeId?: true
    payRunId?: true
    gross?: true
    deductions?: true
    netPay?: true
    daysWorked?: true
    status?: true
    lockedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayslipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payslip to aggregate.
     */
    where?: PayslipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payslips to fetch.
     */
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayslipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payslips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payslips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payslips
    **/
    _count?: true | PayslipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayslipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayslipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayslipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayslipMaxAggregateInputType
  }

  export type GetPayslipAggregateType<T extends PayslipAggregateArgs> = {
        [P in keyof T & keyof AggregatePayslip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayslip[P]>
      : GetScalarType<T[P], AggregatePayslip[P]>
  }




  export type PayslipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayslipWhereInput
    orderBy?: PayslipOrderByWithAggregationInput | PayslipOrderByWithAggregationInput[]
    by: PayslipScalarFieldEnum[] | PayslipScalarFieldEnum
    having?: PayslipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayslipCountAggregateInputType | true
    _avg?: PayslipAvgAggregateInputType
    _sum?: PayslipSumAggregateInputType
    _min?: PayslipMinAggregateInputType
    _max?: PayslipMaxAggregateInputType
  }

  export type PayslipGroupByOutputType = {
    id: string
    employeeId: string
    payRunId: string
    gross: Decimal
    deductions: Decimal
    netPay: Decimal
    daysWorked: number | null
    status: $Enums.PayslipStatus
    lockedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PayslipCountAggregateOutputType | null
    _avg: PayslipAvgAggregateOutputType | null
    _sum: PayslipSumAggregateOutputType | null
    _min: PayslipMinAggregateOutputType | null
    _max: PayslipMaxAggregateOutputType | null
  }

  type GetPayslipGroupByPayload<T extends PayslipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayslipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayslipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayslipGroupByOutputType[P]>
            : GetScalarType<T[P], PayslipGroupByOutputType[P]>
        }
      >
    >


  export type PayslipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    payRunId?: boolean
    gross?: boolean
    deductions?: boolean
    netPay?: boolean
    daysWorked?: boolean
    status?: boolean
    lockedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payRun?: boolean | PayRunDefaultArgs<ExtArgs>
    payments?: boolean | Payslip$paymentsArgs<ExtArgs>
    _count?: boolean | PayslipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payslip"]>



  export type PayslipSelectScalar = {
    id?: boolean
    employeeId?: boolean
    payRunId?: boolean
    gross?: boolean
    deductions?: boolean
    netPay?: boolean
    daysWorked?: boolean
    status?: boolean
    lockedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayslipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "payRunId" | "gross" | "deductions" | "netPay" | "daysWorked" | "status" | "lockedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payslip"]>
  export type PayslipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payRun?: boolean | PayRunDefaultArgs<ExtArgs>
    payments?: boolean | Payslip$paymentsArgs<ExtArgs>
    _count?: boolean | PayslipCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PayslipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payslip"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      payRun: Prisma.$PayRunPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      payRunId: string
      gross: Prisma.Decimal
      deductions: Prisma.Decimal
      netPay: Prisma.Decimal
      daysWorked: number | null
      status: $Enums.PayslipStatus
      lockedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payslip"]>
    composites: {}
  }

  type PayslipGetPayload<S extends boolean | null | undefined | PayslipDefaultArgs> = $Result.GetResult<Prisma.$PayslipPayload, S>

  type PayslipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayslipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayslipCountAggregateInputType | true
    }

  export interface PayslipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payslip'], meta: { name: 'Payslip' } }
    /**
     * Find zero or one Payslip that matches the filter.
     * @param {PayslipFindUniqueArgs} args - Arguments to find a Payslip
     * @example
     * // Get one Payslip
     * const payslip = await prisma.payslip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayslipFindUniqueArgs>(args: SelectSubset<T, PayslipFindUniqueArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payslip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayslipFindUniqueOrThrowArgs} args - Arguments to find a Payslip
     * @example
     * // Get one Payslip
     * const payslip = await prisma.payslip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayslipFindUniqueOrThrowArgs>(args: SelectSubset<T, PayslipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payslip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipFindFirstArgs} args - Arguments to find a Payslip
     * @example
     * // Get one Payslip
     * const payslip = await prisma.payslip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayslipFindFirstArgs>(args?: SelectSubset<T, PayslipFindFirstArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payslip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipFindFirstOrThrowArgs} args - Arguments to find a Payslip
     * @example
     * // Get one Payslip
     * const payslip = await prisma.payslip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayslipFindFirstOrThrowArgs>(args?: SelectSubset<T, PayslipFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payslips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payslips
     * const payslips = await prisma.payslip.findMany()
     * 
     * // Get first 10 Payslips
     * const payslips = await prisma.payslip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payslipWithIdOnly = await prisma.payslip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayslipFindManyArgs>(args?: SelectSubset<T, PayslipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payslip.
     * @param {PayslipCreateArgs} args - Arguments to create a Payslip.
     * @example
     * // Create one Payslip
     * const Payslip = await prisma.payslip.create({
     *   data: {
     *     // ... data to create a Payslip
     *   }
     * })
     * 
     */
    create<T extends PayslipCreateArgs>(args: SelectSubset<T, PayslipCreateArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payslips.
     * @param {PayslipCreateManyArgs} args - Arguments to create many Payslips.
     * @example
     * // Create many Payslips
     * const payslip = await prisma.payslip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayslipCreateManyArgs>(args?: SelectSubset<T, PayslipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payslip.
     * @param {PayslipDeleteArgs} args - Arguments to delete one Payslip.
     * @example
     * // Delete one Payslip
     * const Payslip = await prisma.payslip.delete({
     *   where: {
     *     // ... filter to delete one Payslip
     *   }
     * })
     * 
     */
    delete<T extends PayslipDeleteArgs>(args: SelectSubset<T, PayslipDeleteArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payslip.
     * @param {PayslipUpdateArgs} args - Arguments to update one Payslip.
     * @example
     * // Update one Payslip
     * const payslip = await prisma.payslip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayslipUpdateArgs>(args: SelectSubset<T, PayslipUpdateArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payslips.
     * @param {PayslipDeleteManyArgs} args - Arguments to filter Payslips to delete.
     * @example
     * // Delete a few Payslips
     * const { count } = await prisma.payslip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayslipDeleteManyArgs>(args?: SelectSubset<T, PayslipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payslips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payslips
     * const payslip = await prisma.payslip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayslipUpdateManyArgs>(args: SelectSubset<T, PayslipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payslip.
     * @param {PayslipUpsertArgs} args - Arguments to update or create a Payslip.
     * @example
     * // Update or create a Payslip
     * const payslip = await prisma.payslip.upsert({
     *   create: {
     *     // ... data to create a Payslip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payslip we want to update
     *   }
     * })
     */
    upsert<T extends PayslipUpsertArgs>(args: SelectSubset<T, PayslipUpsertArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payslips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipCountArgs} args - Arguments to filter Payslips to count.
     * @example
     * // Count the number of Payslips
     * const count = await prisma.payslip.count({
     *   where: {
     *     // ... the filter for the Payslips we want to count
     *   }
     * })
    **/
    count<T extends PayslipCountArgs>(
      args?: Subset<T, PayslipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayslipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payslip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayslipAggregateArgs>(args: Subset<T, PayslipAggregateArgs>): Prisma.PrismaPromise<GetPayslipAggregateType<T>>

    /**
     * Group by Payslip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayslipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayslipGroupByArgs['orderBy'] }
        : { orderBy?: PayslipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayslipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayslipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payslip model
   */
  readonly fields: PayslipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payslip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayslipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payRun<T extends PayRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayRunDefaultArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Payslip$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Payslip$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payslip model
   */
  interface PayslipFieldRefs {
    readonly id: FieldRef<"Payslip", 'String'>
    readonly employeeId: FieldRef<"Payslip", 'String'>
    readonly payRunId: FieldRef<"Payslip", 'String'>
    readonly gross: FieldRef<"Payslip", 'Decimal'>
    readonly deductions: FieldRef<"Payslip", 'Decimal'>
    readonly netPay: FieldRef<"Payslip", 'Decimal'>
    readonly daysWorked: FieldRef<"Payslip", 'Int'>
    readonly status: FieldRef<"Payslip", 'PayslipStatus'>
    readonly lockedAt: FieldRef<"Payslip", 'DateTime'>
    readonly createdAt: FieldRef<"Payslip", 'DateTime'>
    readonly updatedAt: FieldRef<"Payslip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payslip findUnique
   */
  export type PayslipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslip to fetch.
     */
    where: PayslipWhereUniqueInput
  }

  /**
   * Payslip findUniqueOrThrow
   */
  export type PayslipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslip to fetch.
     */
    where: PayslipWhereUniqueInput
  }

  /**
   * Payslip findFirst
   */
  export type PayslipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslip to fetch.
     */
    where?: PayslipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payslips to fetch.
     */
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payslips.
     */
    cursor?: PayslipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payslips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payslips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payslips.
     */
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * Payslip findFirstOrThrow
   */
  export type PayslipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslip to fetch.
     */
    where?: PayslipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payslips to fetch.
     */
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payslips.
     */
    cursor?: PayslipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payslips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payslips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payslips.
     */
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * Payslip findMany
   */
  export type PayslipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslips to fetch.
     */
    where?: PayslipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payslips to fetch.
     */
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payslips.
     */
    cursor?: PayslipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payslips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payslips.
     */
    skip?: number
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * Payslip create
   */
  export type PayslipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * The data needed to create a Payslip.
     */
    data: XOR<PayslipCreateInput, PayslipUncheckedCreateInput>
  }

  /**
   * Payslip createMany
   */
  export type PayslipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payslips.
     */
    data: PayslipCreateManyInput | PayslipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payslip update
   */
  export type PayslipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * The data needed to update a Payslip.
     */
    data: XOR<PayslipUpdateInput, PayslipUncheckedUpdateInput>
    /**
     * Choose, which Payslip to update.
     */
    where: PayslipWhereUniqueInput
  }

  /**
   * Payslip updateMany
   */
  export type PayslipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payslips.
     */
    data: XOR<PayslipUpdateManyMutationInput, PayslipUncheckedUpdateManyInput>
    /**
     * Filter which Payslips to update
     */
    where?: PayslipWhereInput
    /**
     * Limit how many Payslips to update.
     */
    limit?: number
  }

  /**
   * Payslip upsert
   */
  export type PayslipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * The filter to search for the Payslip to update in case it exists.
     */
    where: PayslipWhereUniqueInput
    /**
     * In case the Payslip found by the `where` argument doesn't exist, create a new Payslip with this data.
     */
    create: XOR<PayslipCreateInput, PayslipUncheckedCreateInput>
    /**
     * In case the Payslip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayslipUpdateInput, PayslipUncheckedUpdateInput>
  }

  /**
   * Payslip delete
   */
  export type PayslipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter which Payslip to delete.
     */
    where: PayslipWhereUniqueInput
  }

  /**
   * Payslip deleteMany
   */
  export type PayslipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payslips to delete
     */
    where?: PayslipWhereInput
    /**
     * Limit how many Payslips to delete.
     */
    limit?: number
  }

  /**
   * Payslip.payments
   */
  export type Payslip$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payslip without action
   */
  export type PayslipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    payslipId: string | null
    employeeId: string | null
    amount: Decimal | null
    mode: $Enums.PaymentMode | null
    note: string | null
    receiptUrl: string | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    payslipId: string | null
    employeeId: string | null
    amount: Decimal | null
    mode: $Enums.PaymentMode | null
    note: string | null
    receiptUrl: string | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    payslipId: number
    employeeId: number
    amount: number
    mode: number
    note: number
    receiptUrl: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    payslipId?: true
    employeeId?: true
    amount?: true
    mode?: true
    note?: true
    receiptUrl?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    payslipId?: true
    employeeId?: true
    amount?: true
    mode?: true
    note?: true
    receiptUrl?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    payslipId?: true
    employeeId?: true
    amount?: true
    mode?: true
    note?: true
    receiptUrl?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    payslipId: string
    employeeId: string
    amount: Decimal
    mode: $Enums.PaymentMode
    note: string | null
    receiptUrl: string | null
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payslipId?: boolean
    employeeId?: boolean
    amount?: boolean
    mode?: boolean
    note?: boolean
    receiptUrl?: boolean
    createdAt?: boolean
    payslip?: boolean | PayslipDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    payslipId?: boolean
    employeeId?: boolean
    amount?: boolean
    mode?: boolean
    note?: boolean
    receiptUrl?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "payslipId" | "employeeId" | "amount" | "mode" | "note" | "receiptUrl" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payslip?: boolean | PayslipDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      payslip: Prisma.$PayslipPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      payslipId: string
      employeeId: string
      amount: Prisma.Decimal
      mode: $Enums.PaymentMode
      note: string | null
      receiptUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payslip<T extends PayslipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayslipDefaultArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly payslipId: FieldRef<"Payment", 'String'>
    readonly employeeId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly mode: FieldRef<"Payment", 'PaymentMode'>
    readonly note: FieldRef<"Payment", 'String'>
    readonly receiptUrl: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model WorkSchedule
   */

  export type AggregateWorkSchedule = {
    _count: WorkScheduleCountAggregateOutputType | null
    _avg: WorkScheduleAvgAggregateOutputType | null
    _sum: WorkScheduleSumAggregateOutputType | null
    _min: WorkScheduleMinAggregateOutputType | null
    _max: WorkScheduleMaxAggregateOutputType | null
  }

  export type WorkScheduleAvgAggregateOutputType = {
    hoursPerDay: number | null
  }

  export type WorkScheduleSumAggregateOutputType = {
    hoursPerDay: number | null
  }

  export type WorkScheduleMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    startDate: Date | null
    endDate: Date | null
    type: $Enums.ContractType | null
    hoursPerDay: number | null
  }

  export type WorkScheduleMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    startDate: Date | null
    endDate: Date | null
    type: $Enums.ContractType | null
    hoursPerDay: number | null
  }

  export type WorkScheduleCountAggregateOutputType = {
    id: number
    employeeId: number
    startDate: number
    endDate: number
    type: number
    hoursPerDay: number
    _all: number
  }


  export type WorkScheduleAvgAggregateInputType = {
    hoursPerDay?: true
  }

  export type WorkScheduleSumAggregateInputType = {
    hoursPerDay?: true
  }

  export type WorkScheduleMinAggregateInputType = {
    id?: true
    employeeId?: true
    startDate?: true
    endDate?: true
    type?: true
    hoursPerDay?: true
  }

  export type WorkScheduleMaxAggregateInputType = {
    id?: true
    employeeId?: true
    startDate?: true
    endDate?: true
    type?: true
    hoursPerDay?: true
  }

  export type WorkScheduleCountAggregateInputType = {
    id?: true
    employeeId?: true
    startDate?: true
    endDate?: true
    type?: true
    hoursPerDay?: true
    _all?: true
  }

  export type WorkScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkSchedule to aggregate.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkSchedules
    **/
    _count?: true | WorkScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkScheduleMaxAggregateInputType
  }

  export type GetWorkScheduleAggregateType<T extends WorkScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkSchedule[P]>
      : GetScalarType<T[P], AggregateWorkSchedule[P]>
  }




  export type WorkScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkScheduleWhereInput
    orderBy?: WorkScheduleOrderByWithAggregationInput | WorkScheduleOrderByWithAggregationInput[]
    by: WorkScheduleScalarFieldEnum[] | WorkScheduleScalarFieldEnum
    having?: WorkScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkScheduleCountAggregateInputType | true
    _avg?: WorkScheduleAvgAggregateInputType
    _sum?: WorkScheduleSumAggregateInputType
    _min?: WorkScheduleMinAggregateInputType
    _max?: WorkScheduleMaxAggregateInputType
  }

  export type WorkScheduleGroupByOutputType = {
    id: string
    employeeId: string
    startDate: Date
    endDate: Date
    type: $Enums.ContractType
    hoursPerDay: number | null
    _count: WorkScheduleCountAggregateOutputType | null
    _avg: WorkScheduleAvgAggregateOutputType | null
    _sum: WorkScheduleSumAggregateOutputType | null
    _min: WorkScheduleMinAggregateOutputType | null
    _max: WorkScheduleMaxAggregateOutputType | null
  }

  type GetWorkScheduleGroupByPayload<T extends WorkScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], WorkScheduleGroupByOutputType[P]>
        }
      >
    >


  export type WorkScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    hoursPerDay?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    attendances?: boolean | WorkSchedule$attendancesArgs<ExtArgs>
    _count?: boolean | WorkScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workSchedule"]>



  export type WorkScheduleSelectScalar = {
    id?: boolean
    employeeId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    hoursPerDay?: boolean
  }

  export type WorkScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "startDate" | "endDate" | "type" | "hoursPerDay", ExtArgs["result"]["workSchedule"]>
  export type WorkScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    attendances?: boolean | WorkSchedule$attendancesArgs<ExtArgs>
    _count?: boolean | WorkScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkSchedule"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      startDate: Date
      endDate: Date
      type: $Enums.ContractType
      hoursPerDay: number | null
    }, ExtArgs["result"]["workSchedule"]>
    composites: {}
  }

  type WorkScheduleGetPayload<S extends boolean | null | undefined | WorkScheduleDefaultArgs> = $Result.GetResult<Prisma.$WorkSchedulePayload, S>

  type WorkScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkScheduleCountAggregateInputType | true
    }

  export interface WorkScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkSchedule'], meta: { name: 'WorkSchedule' } }
    /**
     * Find zero or one WorkSchedule that matches the filter.
     * @param {WorkScheduleFindUniqueArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkScheduleFindUniqueArgs>(args: SelectSubset<T, WorkScheduleFindUniqueArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkScheduleFindUniqueOrThrowArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleFindFirstArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkScheduleFindFirstArgs>(args?: SelectSubset<T, WorkScheduleFindFirstArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleFindFirstOrThrowArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkSchedules
     * const workSchedules = await prisma.workSchedule.findMany()
     * 
     * // Get first 10 WorkSchedules
     * const workSchedules = await prisma.workSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workScheduleWithIdOnly = await prisma.workSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkScheduleFindManyArgs>(args?: SelectSubset<T, WorkScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkSchedule.
     * @param {WorkScheduleCreateArgs} args - Arguments to create a WorkSchedule.
     * @example
     * // Create one WorkSchedule
     * const WorkSchedule = await prisma.workSchedule.create({
     *   data: {
     *     // ... data to create a WorkSchedule
     *   }
     * })
     * 
     */
    create<T extends WorkScheduleCreateArgs>(args: SelectSubset<T, WorkScheduleCreateArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkSchedules.
     * @param {WorkScheduleCreateManyArgs} args - Arguments to create many WorkSchedules.
     * @example
     * // Create many WorkSchedules
     * const workSchedule = await prisma.workSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkScheduleCreateManyArgs>(args?: SelectSubset<T, WorkScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkSchedule.
     * @param {WorkScheduleDeleteArgs} args - Arguments to delete one WorkSchedule.
     * @example
     * // Delete one WorkSchedule
     * const WorkSchedule = await prisma.workSchedule.delete({
     *   where: {
     *     // ... filter to delete one WorkSchedule
     *   }
     * })
     * 
     */
    delete<T extends WorkScheduleDeleteArgs>(args: SelectSubset<T, WorkScheduleDeleteArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkSchedule.
     * @param {WorkScheduleUpdateArgs} args - Arguments to update one WorkSchedule.
     * @example
     * // Update one WorkSchedule
     * const workSchedule = await prisma.workSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkScheduleUpdateArgs>(args: SelectSubset<T, WorkScheduleUpdateArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkSchedules.
     * @param {WorkScheduleDeleteManyArgs} args - Arguments to filter WorkSchedules to delete.
     * @example
     * // Delete a few WorkSchedules
     * const { count } = await prisma.workSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkScheduleDeleteManyArgs>(args?: SelectSubset<T, WorkScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkSchedules
     * const workSchedule = await prisma.workSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkScheduleUpdateManyArgs>(args: SelectSubset<T, WorkScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkSchedule.
     * @param {WorkScheduleUpsertArgs} args - Arguments to update or create a WorkSchedule.
     * @example
     * // Update or create a WorkSchedule
     * const workSchedule = await prisma.workSchedule.upsert({
     *   create: {
     *     // ... data to create a WorkSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkSchedule we want to update
     *   }
     * })
     */
    upsert<T extends WorkScheduleUpsertArgs>(args: SelectSubset<T, WorkScheduleUpsertArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleCountArgs} args - Arguments to filter WorkSchedules to count.
     * @example
     * // Count the number of WorkSchedules
     * const count = await prisma.workSchedule.count({
     *   where: {
     *     // ... the filter for the WorkSchedules we want to count
     *   }
     * })
    **/
    count<T extends WorkScheduleCountArgs>(
      args?: Subset<T, WorkScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkScheduleAggregateArgs>(args: Subset<T, WorkScheduleAggregateArgs>): Prisma.PrismaPromise<GetWorkScheduleAggregateType<T>>

    /**
     * Group by WorkSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkScheduleGroupByArgs['orderBy'] }
        : { orderBy?: WorkScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkSchedule model
   */
  readonly fields: WorkScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendances<T extends WorkSchedule$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, WorkSchedule$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkSchedule model
   */
  interface WorkScheduleFieldRefs {
    readonly id: FieldRef<"WorkSchedule", 'String'>
    readonly employeeId: FieldRef<"WorkSchedule", 'String'>
    readonly startDate: FieldRef<"WorkSchedule", 'DateTime'>
    readonly endDate: FieldRef<"WorkSchedule", 'DateTime'>
    readonly type: FieldRef<"WorkSchedule", 'ContractType'>
    readonly hoursPerDay: FieldRef<"WorkSchedule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkSchedule findUnique
   */
  export type WorkScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule findUniqueOrThrow
   */
  export type WorkScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule findFirst
   */
  export type WorkScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSchedules.
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSchedules.
     */
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * WorkSchedule findFirstOrThrow
   */
  export type WorkScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSchedules.
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSchedules.
     */
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * WorkSchedule findMany
   */
  export type WorkScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedules to fetch.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkSchedules.
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * WorkSchedule create
   */
  export type WorkScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkSchedule.
     */
    data: XOR<WorkScheduleCreateInput, WorkScheduleUncheckedCreateInput>
  }

  /**
   * WorkSchedule createMany
   */
  export type WorkScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkSchedules.
     */
    data: WorkScheduleCreateManyInput | WorkScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkSchedule update
   */
  export type WorkScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkSchedule.
     */
    data: XOR<WorkScheduleUpdateInput, WorkScheduleUncheckedUpdateInput>
    /**
     * Choose, which WorkSchedule to update.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule updateMany
   */
  export type WorkScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkSchedules.
     */
    data: XOR<WorkScheduleUpdateManyMutationInput, WorkScheduleUncheckedUpdateManyInput>
    /**
     * Filter which WorkSchedules to update
     */
    where?: WorkScheduleWhereInput
    /**
     * Limit how many WorkSchedules to update.
     */
    limit?: number
  }

  /**
   * WorkSchedule upsert
   */
  export type WorkScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkSchedule to update in case it exists.
     */
    where: WorkScheduleWhereUniqueInput
    /**
     * In case the WorkSchedule found by the `where` argument doesn't exist, create a new WorkSchedule with this data.
     */
    create: XOR<WorkScheduleCreateInput, WorkScheduleUncheckedCreateInput>
    /**
     * In case the WorkSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkScheduleUpdateInput, WorkScheduleUncheckedUpdateInput>
  }

  /**
   * WorkSchedule delete
   */
  export type WorkScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter which WorkSchedule to delete.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule deleteMany
   */
  export type WorkScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkSchedules to delete
     */
    where?: WorkScheduleWhereInput
    /**
     * Limit how many WorkSchedules to delete.
     */
    limit?: number
  }

  /**
   * WorkSchedule.attendances
   */
  export type WorkSchedule$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * WorkSchedule without action
   */
  export type WorkScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    workedHours: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    workedHours: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    workScheduleId: string | null
    date: Date | null
    workedHours: number | null
    validated: boolean | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    workScheduleId: string | null
    date: Date | null
    workedHours: number | null
    validated: boolean | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    workScheduleId: number
    date: number
    workedHours: number
    validated: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    workedHours?: true
  }

  export type AttendanceSumAggregateInputType = {
    workedHours?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    workScheduleId?: true
    date?: true
    workedHours?: true
    validated?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    workScheduleId?: true
    date?: true
    workedHours?: true
    validated?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    workScheduleId?: true
    date?: true
    workedHours?: true
    validated?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    workScheduleId: string
    date: Date
    workedHours: number | null
    validated: boolean
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workScheduleId?: boolean
    date?: boolean
    workedHours?: boolean
    validated?: boolean
    workSchedule?: boolean | WorkScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>



  export type AttendanceSelectScalar = {
    id?: boolean
    workScheduleId?: boolean
    date?: boolean
    workedHours?: boolean
    validated?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workScheduleId" | "date" | "workedHours" | "validated", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workSchedule?: boolean | WorkScheduleDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      workSchedule: Prisma.$WorkSchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workScheduleId: string
      date: Date
      workedHours: number | null
      validated: boolean
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workSchedule<T extends WorkScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkScheduleDefaultArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly workScheduleId: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly workedHours: FieldRef<"Attendance", 'Int'>
    readonly validated: FieldRef<"Attendance", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    position: 'position',
    contractType: 'contractType',
    salaryOrRate: 'salaryOrRate',
    bankDetails: 'bankDetails',
    active: 'active',
    email: 'email',
    phone: 'phone',
    hireDate: 'hireDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const PayRunScalarFieldEnum: {
    id: 'id',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyId: 'companyId'
  };

  export type PayRunScalarFieldEnum = (typeof PayRunScalarFieldEnum)[keyof typeof PayRunScalarFieldEnum]


  export const PayslipScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    payRunId: 'payRunId',
    gross: 'gross',
    deductions: 'deductions',
    netPay: 'netPay',
    daysWorked: 'daysWorked',
    status: 'status',
    lockedAt: 'lockedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayslipScalarFieldEnum = (typeof PayslipScalarFieldEnum)[keyof typeof PayslipScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    payslipId: 'payslipId',
    employeeId: 'employeeId',
    amount: 'amount',
    mode: 'mode',
    note: 'note',
    receiptUrl: 'receiptUrl',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const WorkScheduleScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    startDate: 'startDate',
    endDate: 'endDate',
    type: 'type',
    hoursPerDay: 'hoursPerDay'
  };

  export type WorkScheduleScalarFieldEnum = (typeof WorkScheduleScalarFieldEnum)[keyof typeof WorkScheduleScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    workScheduleId: 'workScheduleId',
    date: 'date',
    workedHours: 'workedHours',
    validated: 'validated'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EmployeeOrderByRelevanceFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    position: 'position',
    bankDetails: 'bankDetails',
    email: 'email',
    phone: 'phone'
  };

  export type EmployeeOrderByRelevanceFieldEnum = (typeof EmployeeOrderByRelevanceFieldEnum)[keyof typeof EmployeeOrderByRelevanceFieldEnum]


  export const PayRunOrderByRelevanceFieldEnum: {
    id: 'id',
    companyId: 'companyId'
  };

  export type PayRunOrderByRelevanceFieldEnum = (typeof PayRunOrderByRelevanceFieldEnum)[keyof typeof PayRunOrderByRelevanceFieldEnum]


  export const PayslipOrderByRelevanceFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    payRunId: 'payRunId'
  };

  export type PayslipOrderByRelevanceFieldEnum = (typeof PayslipOrderByRelevanceFieldEnum)[keyof typeof PayslipOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    payslipId: 'payslipId',
    employeeId: 'employeeId',
    note: 'note',
    receiptUrl: 'receiptUrl'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const WorkScheduleOrderByRelevanceFieldEnum: {
    id: 'id',
    employeeId: 'employeeId'
  };

  export type WorkScheduleOrderByRelevanceFieldEnum = (typeof WorkScheduleOrderByRelevanceFieldEnum)[keyof typeof WorkScheduleOrderByRelevanceFieldEnum]


  export const AttendanceOrderByRelevanceFieldEnum: {
    id: 'id',
    workScheduleId: 'workScheduleId'
  };

  export type AttendanceOrderByRelevanceFieldEnum = (typeof AttendanceOrderByRelevanceFieldEnum)[keyof typeof AttendanceOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'ContractType'
   */
  export type EnumContractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractType'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'PayRunType'
   */
  export type EnumPayRunTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayRunType'>
    


  /**
   * Reference to a field of type 'PayRunStatus'
   */
  export type EnumPayRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayRunStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'PayslipStatus'
   */
  export type EnumPayslipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayslipStatus'>
    


  /**
   * Reference to a field of type 'PaymentMode'
   */
  export type EnumPaymentModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    fullName?: StringFilter<"Employee"> | string
    position?: StringNullableFilter<"Employee"> | string | null
    contractType?: EnumContractTypeFilter<"Employee"> | $Enums.ContractType
    salaryOrRate?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    bankDetails?: StringNullableFilter<"Employee"> | string | null
    active?: BoolFilter<"Employee"> | boolean
    email?: StringNullableFilter<"Employee"> | string | null
    phone?: StringNullableFilter<"Employee"> | string | null
    hireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    payslips?: PayslipListRelationFilter
    payments?: PaymentListRelationFilter
    workSchedules?: WorkScheduleListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    position?: SortOrderInput | SortOrder
    contractType?: SortOrder
    salaryOrRate?: SortOrder
    bankDetails?: SortOrderInput | SortOrder
    active?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    hireDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payslips?: PayslipOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    workSchedules?: WorkScheduleOrderByRelationAggregateInput
    _relevance?: EmployeeOrderByRelevanceInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    fullName?: StringFilter<"Employee"> | string
    position?: StringNullableFilter<"Employee"> | string | null
    contractType?: EnumContractTypeFilter<"Employee"> | $Enums.ContractType
    salaryOrRate?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    bankDetails?: StringNullableFilter<"Employee"> | string | null
    active?: BoolFilter<"Employee"> | boolean
    email?: StringNullableFilter<"Employee"> | string | null
    phone?: StringNullableFilter<"Employee"> | string | null
    hireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    payslips?: PayslipListRelationFilter
    payments?: PaymentListRelationFilter
    workSchedules?: WorkScheduleListRelationFilter
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    position?: SortOrderInput | SortOrder
    contractType?: SortOrder
    salaryOrRate?: SortOrder
    bankDetails?: SortOrderInput | SortOrder
    active?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    hireDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    fullName?: StringWithAggregatesFilter<"Employee"> | string
    position?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    contractType?: EnumContractTypeWithAggregatesFilter<"Employee"> | $Enums.ContractType
    salaryOrRate?: DecimalWithAggregatesFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    bankDetails?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    active?: BoolWithAggregatesFilter<"Employee"> | boolean
    email?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    hireDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type PayRunWhereInput = {
    AND?: PayRunWhereInput | PayRunWhereInput[]
    OR?: PayRunWhereInput[]
    NOT?: PayRunWhereInput | PayRunWhereInput[]
    id?: StringFilter<"PayRun"> | string
    periodStart?: DateTimeFilter<"PayRun"> | Date | string
    periodEnd?: DateTimeFilter<"PayRun"> | Date | string
    type?: EnumPayRunTypeFilter<"PayRun"> | $Enums.PayRunType
    status?: EnumPayRunStatusFilter<"PayRun"> | $Enums.PayRunStatus
    createdAt?: DateTimeFilter<"PayRun"> | Date | string
    updatedAt?: DateTimeFilter<"PayRun"> | Date | string
    companyId?: StringFilter<"PayRun"> | string
    payslips?: PayslipListRelationFilter
  }

  export type PayRunOrderByWithRelationInput = {
    id?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    payslips?: PayslipOrderByRelationAggregateInput
    _relevance?: PayRunOrderByRelevanceInput
  }

  export type PayRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayRunWhereInput | PayRunWhereInput[]
    OR?: PayRunWhereInput[]
    NOT?: PayRunWhereInput | PayRunWhereInput[]
    periodStart?: DateTimeFilter<"PayRun"> | Date | string
    periodEnd?: DateTimeFilter<"PayRun"> | Date | string
    type?: EnumPayRunTypeFilter<"PayRun"> | $Enums.PayRunType
    status?: EnumPayRunStatusFilter<"PayRun"> | $Enums.PayRunStatus
    createdAt?: DateTimeFilter<"PayRun"> | Date | string
    updatedAt?: DateTimeFilter<"PayRun"> | Date | string
    companyId?: StringFilter<"PayRun"> | string
    payslips?: PayslipListRelationFilter
  }, "id">

  export type PayRunOrderByWithAggregationInput = {
    id?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    _count?: PayRunCountOrderByAggregateInput
    _max?: PayRunMaxOrderByAggregateInput
    _min?: PayRunMinOrderByAggregateInput
  }

  export type PayRunScalarWhereWithAggregatesInput = {
    AND?: PayRunScalarWhereWithAggregatesInput | PayRunScalarWhereWithAggregatesInput[]
    OR?: PayRunScalarWhereWithAggregatesInput[]
    NOT?: PayRunScalarWhereWithAggregatesInput | PayRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayRun"> | string
    periodStart?: DateTimeWithAggregatesFilter<"PayRun"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"PayRun"> | Date | string
    type?: EnumPayRunTypeWithAggregatesFilter<"PayRun"> | $Enums.PayRunType
    status?: EnumPayRunStatusWithAggregatesFilter<"PayRun"> | $Enums.PayRunStatus
    createdAt?: DateTimeWithAggregatesFilter<"PayRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayRun"> | Date | string
    companyId?: StringWithAggregatesFilter<"PayRun"> | string
  }

  export type PayslipWhereInput = {
    AND?: PayslipWhereInput | PayslipWhereInput[]
    OR?: PayslipWhereInput[]
    NOT?: PayslipWhereInput | PayslipWhereInput[]
    id?: StringFilter<"Payslip"> | string
    employeeId?: StringFilter<"Payslip"> | string
    payRunId?: StringFilter<"Payslip"> | string
    gross?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    daysWorked?: IntNullableFilter<"Payslip"> | number | null
    status?: EnumPayslipStatusFilter<"Payslip"> | $Enums.PayslipStatus
    lockedAt?: DateTimeNullableFilter<"Payslip"> | Date | string | null
    createdAt?: DateTimeFilter<"Payslip"> | Date | string
    updatedAt?: DateTimeFilter<"Payslip"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    payRun?: XOR<PayRunScalarRelationFilter, PayRunWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type PayslipOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payRunId?: SortOrder
    gross?: SortOrder
    deductions?: SortOrder
    netPay?: SortOrder
    daysWorked?: SortOrderInput | SortOrder
    status?: SortOrder
    lockedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    payRun?: PayRunOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    _relevance?: PayslipOrderByRelevanceInput
  }

  export type PayslipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_payRunId?: PayslipEmployeeIdPayRunIdCompoundUniqueInput
    AND?: PayslipWhereInput | PayslipWhereInput[]
    OR?: PayslipWhereInput[]
    NOT?: PayslipWhereInput | PayslipWhereInput[]
    employeeId?: StringFilter<"Payslip"> | string
    payRunId?: StringFilter<"Payslip"> | string
    gross?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    daysWorked?: IntNullableFilter<"Payslip"> | number | null
    status?: EnumPayslipStatusFilter<"Payslip"> | $Enums.PayslipStatus
    lockedAt?: DateTimeNullableFilter<"Payslip"> | Date | string | null
    createdAt?: DateTimeFilter<"Payslip"> | Date | string
    updatedAt?: DateTimeFilter<"Payslip"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    payRun?: XOR<PayRunScalarRelationFilter, PayRunWhereInput>
    payments?: PaymentListRelationFilter
  }, "id" | "employeeId_payRunId">

  export type PayslipOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payRunId?: SortOrder
    gross?: SortOrder
    deductions?: SortOrder
    netPay?: SortOrder
    daysWorked?: SortOrderInput | SortOrder
    status?: SortOrder
    lockedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayslipCountOrderByAggregateInput
    _avg?: PayslipAvgOrderByAggregateInput
    _max?: PayslipMaxOrderByAggregateInput
    _min?: PayslipMinOrderByAggregateInput
    _sum?: PayslipSumOrderByAggregateInput
  }

  export type PayslipScalarWhereWithAggregatesInput = {
    AND?: PayslipScalarWhereWithAggregatesInput | PayslipScalarWhereWithAggregatesInput[]
    OR?: PayslipScalarWhereWithAggregatesInput[]
    NOT?: PayslipScalarWhereWithAggregatesInput | PayslipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payslip"> | string
    employeeId?: StringWithAggregatesFilter<"Payslip"> | string
    payRunId?: StringWithAggregatesFilter<"Payslip"> | string
    gross?: DecimalWithAggregatesFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    deductions?: DecimalWithAggregatesFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    netPay?: DecimalWithAggregatesFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    daysWorked?: IntNullableWithAggregatesFilter<"Payslip"> | number | null
    status?: EnumPayslipStatusWithAggregatesFilter<"Payslip"> | $Enums.PayslipStatus
    lockedAt?: DateTimeNullableWithAggregatesFilter<"Payslip"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payslip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payslip"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    payslipId?: StringFilter<"Payment"> | string
    employeeId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFilter<"Payment"> | $Enums.PaymentMode
    note?: StringNullableFilter<"Payment"> | string | null
    receiptUrl?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    payslip?: XOR<PayslipScalarRelationFilter, PayslipWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    payslipId?: SortOrder
    employeeId?: SortOrder
    amount?: SortOrder
    mode?: SortOrder
    note?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    payslip?: PayslipOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    payslipId?: StringFilter<"Payment"> | string
    employeeId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFilter<"Payment"> | $Enums.PaymentMode
    note?: StringNullableFilter<"Payment"> | string | null
    receiptUrl?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    payslip?: XOR<PayslipScalarRelationFilter, PayslipWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    payslipId?: SortOrder
    employeeId?: SortOrder
    amount?: SortOrder
    mode?: SortOrder
    note?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    payslipId?: StringWithAggregatesFilter<"Payment"> | string
    employeeId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeWithAggregatesFilter<"Payment"> | $Enums.PaymentMode
    note?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    receiptUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type WorkScheduleWhereInput = {
    AND?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    OR?: WorkScheduleWhereInput[]
    NOT?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    id?: StringFilter<"WorkSchedule"> | string
    employeeId?: StringFilter<"WorkSchedule"> | string
    startDate?: DateTimeFilter<"WorkSchedule"> | Date | string
    endDate?: DateTimeFilter<"WorkSchedule"> | Date | string
    type?: EnumContractTypeFilter<"WorkSchedule"> | $Enums.ContractType
    hoursPerDay?: IntNullableFilter<"WorkSchedule"> | number | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    attendances?: AttendanceListRelationFilter
  }

  export type WorkScheduleOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    hoursPerDay?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
    _relevance?: WorkScheduleOrderByRelevanceInput
  }

  export type WorkScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    OR?: WorkScheduleWhereInput[]
    NOT?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    employeeId?: StringFilter<"WorkSchedule"> | string
    startDate?: DateTimeFilter<"WorkSchedule"> | Date | string
    endDate?: DateTimeFilter<"WorkSchedule"> | Date | string
    type?: EnumContractTypeFilter<"WorkSchedule"> | $Enums.ContractType
    hoursPerDay?: IntNullableFilter<"WorkSchedule"> | number | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    attendances?: AttendanceListRelationFilter
  }, "id">

  export type WorkScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    hoursPerDay?: SortOrderInput | SortOrder
    _count?: WorkScheduleCountOrderByAggregateInput
    _avg?: WorkScheduleAvgOrderByAggregateInput
    _max?: WorkScheduleMaxOrderByAggregateInput
    _min?: WorkScheduleMinOrderByAggregateInput
    _sum?: WorkScheduleSumOrderByAggregateInput
  }

  export type WorkScheduleScalarWhereWithAggregatesInput = {
    AND?: WorkScheduleScalarWhereWithAggregatesInput | WorkScheduleScalarWhereWithAggregatesInput[]
    OR?: WorkScheduleScalarWhereWithAggregatesInput[]
    NOT?: WorkScheduleScalarWhereWithAggregatesInput | WorkScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkSchedule"> | string
    employeeId?: StringWithAggregatesFilter<"WorkSchedule"> | string
    startDate?: DateTimeWithAggregatesFilter<"WorkSchedule"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"WorkSchedule"> | Date | string
    type?: EnumContractTypeWithAggregatesFilter<"WorkSchedule"> | $Enums.ContractType
    hoursPerDay?: IntNullableWithAggregatesFilter<"WorkSchedule"> | number | null
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    workScheduleId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    workedHours?: IntNullableFilter<"Attendance"> | number | null
    validated?: BoolFilter<"Attendance"> | boolean
    workSchedule?: XOR<WorkScheduleScalarRelationFilter, WorkScheduleWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    date?: SortOrder
    workedHours?: SortOrderInput | SortOrder
    validated?: SortOrder
    workSchedule?: WorkScheduleOrderByWithRelationInput
    _relevance?: AttendanceOrderByRelevanceInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    workScheduleId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    workedHours?: IntNullableFilter<"Attendance"> | number | null
    validated?: BoolFilter<"Attendance"> | boolean
    workSchedule?: XOR<WorkScheduleScalarRelationFilter, WorkScheduleWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    date?: SortOrder
    workedHours?: SortOrderInput | SortOrder
    validated?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    workScheduleId?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    workedHours?: IntNullableWithAggregatesFilter<"Attendance"> | number | null
    validated?: BoolWithAggregatesFilter<"Attendance"> | boolean
  }

  export type EmployeeCreateInput = {
    id?: string
    fullName: string
    position?: string | null
    contractType: $Enums.ContractType
    salaryOrRate: Decimal | DecimalJsLike | number | string
    bankDetails?: string | null
    active?: boolean
    email?: string | null
    phone?: string | null
    hireDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payslips?: PayslipCreateNestedManyWithoutEmployeeInput
    payments?: PaymentCreateNestedManyWithoutEmployeeInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    fullName: string
    position?: string | null
    contractType: $Enums.ContractType
    salaryOrRate: Decimal | DecimalJsLike | number | string
    bankDetails?: string | null
    active?: boolean
    email?: string | null
    phone?: string | null
    hireDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payslips?: PayslipUncheckedCreateNestedManyWithoutEmployeeInput
    payments?: PaymentUncheckedCreateNestedManyWithoutEmployeeInput
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    salaryOrRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslips?: PayslipUpdateManyWithoutEmployeeNestedInput
    payments?: PaymentUpdateManyWithoutEmployeeNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    salaryOrRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslips?: PayslipUncheckedUpdateManyWithoutEmployeeNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutEmployeeNestedInput
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    fullName: string
    position?: string | null
    contractType: $Enums.ContractType
    salaryOrRate: Decimal | DecimalJsLike | number | string
    bankDetails?: string | null
    active?: boolean
    email?: string | null
    phone?: string | null
    hireDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    salaryOrRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    salaryOrRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRunCreateInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    type: $Enums.PayRunType
    status?: $Enums.PayRunStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    payslips?: PayslipCreateNestedManyWithoutPayRunInput
  }

  export type PayRunUncheckedCreateInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    type: $Enums.PayRunType
    status?: $Enums.PayRunStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    payslips?: PayslipUncheckedCreateNestedManyWithoutPayRunInput
  }

  export type PayRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPayRunTypeFieldUpdateOperationsInput | $Enums.PayRunType
    status?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    payslips?: PayslipUpdateManyWithoutPayRunNestedInput
  }

  export type PayRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPayRunTypeFieldUpdateOperationsInput | $Enums.PayRunType
    status?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    payslips?: PayslipUncheckedUpdateManyWithoutPayRunNestedInput
  }

  export type PayRunCreateManyInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    type: $Enums.PayRunType
    status?: $Enums.PayRunStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
  }

  export type PayRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPayRunTypeFieldUpdateOperationsInput | $Enums.PayRunType
    status?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type PayRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPayRunTypeFieldUpdateOperationsInput | $Enums.PayRunType
    status?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type PayslipCreateInput = {
    id?: string
    gross?: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    daysWorked?: number | null
    status?: $Enums.PayslipStatus
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutPayslipsInput
    payRun: PayRunCreateNestedOneWithoutPayslipsInput
    payments?: PaymentCreateNestedManyWithoutPayslipInput
  }

  export type PayslipUncheckedCreateInput = {
    id?: string
    employeeId: string
    payRunId: string
    gross?: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    daysWorked?: number | null
    status?: $Enums.PayslipStatus
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutPayslipInput
  }

  export type PayslipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gross?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysWorked?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutPayslipsNestedInput
    payRun?: PayRunUpdateOneRequiredWithoutPayslipsNestedInput
    payments?: PaymentUpdateManyWithoutPayslipNestedInput
  }

  export type PayslipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    payRunId?: StringFieldUpdateOperationsInput | string
    gross?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysWorked?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutPayslipNestedInput
  }

  export type PayslipCreateManyInput = {
    id?: string
    employeeId: string
    payRunId: string
    gross?: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    daysWorked?: number | null
    status?: $Enums.PayslipStatus
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayslipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gross?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysWorked?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayslipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    payRunId?: StringFieldUpdateOperationsInput | string
    gross?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysWorked?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    mode: $Enums.PaymentMode
    note?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    payslip: PayslipCreateNestedOneWithoutPaymentsInput
    employee: EmployeeCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    payslipId: string
    employeeId: string
    amount: Decimal | DecimalJsLike | number | string
    mode: $Enums.PaymentMode
    note?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    note?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslip?: PayslipUpdateOneRequiredWithoutPaymentsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payslipId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    note?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    payslipId: string
    employeeId: string
    amount: Decimal | DecimalJsLike | number | string
    mode: $Enums.PaymentMode
    note?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    note?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    payslipId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    note?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkScheduleCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    type: $Enums.ContractType
    hoursPerDay?: number | null
    employee: EmployeeCreateNestedOneWithoutWorkSchedulesInput
    attendances?: AttendanceCreateNestedManyWithoutWorkScheduleInput
  }

  export type WorkScheduleUncheckedCreateInput = {
    id?: string
    employeeId: string
    startDate: Date | string
    endDate: Date | string
    type: $Enums.ContractType
    hoursPerDay?: number | null
    attendances?: AttendanceUncheckedCreateNestedManyWithoutWorkScheduleInput
  }

  export type WorkScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    hoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
    employee?: EmployeeUpdateOneRequiredWithoutWorkSchedulesNestedInput
    attendances?: AttendanceUpdateManyWithoutWorkScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    hoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
    attendances?: AttendanceUncheckedUpdateManyWithoutWorkScheduleNestedInput
  }

  export type WorkScheduleCreateManyInput = {
    id?: string
    employeeId: string
    startDate: Date | string
    endDate: Date | string
    type: $Enums.ContractType
    hoursPerDay?: number | null
  }

  export type WorkScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    hoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    hoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttendanceCreateInput = {
    id?: string
    date: Date | string
    workedHours?: number | null
    validated?: boolean
    workSchedule: WorkScheduleCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    workScheduleId: string
    date: Date | string
    workedHours?: number | null
    validated?: boolean
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workedHours?: NullableIntFieldUpdateOperationsInput | number | null
    validated?: BoolFieldUpdateOperationsInput | boolean
    workSchedule?: WorkScheduleUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workScheduleId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workedHours?: NullableIntFieldUpdateOperationsInput | number | null
    validated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttendanceCreateManyInput = {
    id?: string
    workScheduleId: string
    date: Date | string
    workedHours?: number | null
    validated?: boolean
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workedHours?: NullableIntFieldUpdateOperationsInput | number | null
    validated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workScheduleId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workedHours?: NullableIntFieldUpdateOperationsInput | number | null
    validated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumContractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[]
    notIn?: $Enums.ContractType[]
    not?: NestedEnumContractTypeFilter<$PrismaModel> | $Enums.ContractType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PayslipListRelationFilter = {
    every?: PayslipWhereInput
    some?: PayslipWhereInput
    none?: PayslipWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type WorkScheduleListRelationFilter = {
    every?: WorkScheduleWhereInput
    some?: WorkScheduleWhereInput
    none?: WorkScheduleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PayslipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelevanceInput = {
    fields: EmployeeOrderByRelevanceFieldEnum | EmployeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    position?: SortOrder
    contractType?: SortOrder
    salaryOrRate?: SortOrder
    bankDetails?: SortOrder
    active?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    hireDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    salaryOrRate?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    position?: SortOrder
    contractType?: SortOrder
    salaryOrRate?: SortOrder
    bankDetails?: SortOrder
    active?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    hireDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    position?: SortOrder
    contractType?: SortOrder
    salaryOrRate?: SortOrder
    bankDetails?: SortOrder
    active?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    hireDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    salaryOrRate?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumContractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[]
    notIn?: $Enums.ContractType[]
    not?: NestedEnumContractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractTypeFilter<$PrismaModel>
    _max?: NestedEnumContractTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPayRunTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunType | EnumPayRunTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunType[]
    notIn?: $Enums.PayRunType[]
    not?: NestedEnumPayRunTypeFilter<$PrismaModel> | $Enums.PayRunType
  }

  export type EnumPayRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatus | EnumPayRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunStatus[]
    notIn?: $Enums.PayRunStatus[]
    not?: NestedEnumPayRunStatusFilter<$PrismaModel> | $Enums.PayRunStatus
  }

  export type PayRunOrderByRelevanceInput = {
    fields: PayRunOrderByRelevanceFieldEnum | PayRunOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PayRunCountOrderByAggregateInput = {
    id?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type PayRunMaxOrderByAggregateInput = {
    id?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type PayRunMinOrderByAggregateInput = {
    id?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type EnumPayRunTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunType | EnumPayRunTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunType[]
    notIn?: $Enums.PayRunType[]
    not?: NestedEnumPayRunTypeWithAggregatesFilter<$PrismaModel> | $Enums.PayRunType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayRunTypeFilter<$PrismaModel>
    _max?: NestedEnumPayRunTypeFilter<$PrismaModel>
  }

  export type EnumPayRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatus | EnumPayRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunStatus[]
    notIn?: $Enums.PayRunStatus[]
    not?: NestedEnumPayRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayRunStatusFilter<$PrismaModel>
    _max?: NestedEnumPayRunStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPayslipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayslipStatus | EnumPayslipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayslipStatus[]
    notIn?: $Enums.PayslipStatus[]
    not?: NestedEnumPayslipStatusFilter<$PrismaModel> | $Enums.PayslipStatus
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type PayRunScalarRelationFilter = {
    is?: PayRunWhereInput
    isNot?: PayRunWhereInput
  }

  export type PayslipOrderByRelevanceInput = {
    fields: PayslipOrderByRelevanceFieldEnum | PayslipOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PayslipEmployeeIdPayRunIdCompoundUniqueInput = {
    employeeId: string
    payRunId: string
  }

  export type PayslipCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payRunId?: SortOrder
    gross?: SortOrder
    deductions?: SortOrder
    netPay?: SortOrder
    daysWorked?: SortOrder
    status?: SortOrder
    lockedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayslipAvgOrderByAggregateInput = {
    gross?: SortOrder
    deductions?: SortOrder
    netPay?: SortOrder
    daysWorked?: SortOrder
  }

  export type PayslipMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payRunId?: SortOrder
    gross?: SortOrder
    deductions?: SortOrder
    netPay?: SortOrder
    daysWorked?: SortOrder
    status?: SortOrder
    lockedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayslipMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payRunId?: SortOrder
    gross?: SortOrder
    deductions?: SortOrder
    netPay?: SortOrder
    daysWorked?: SortOrder
    status?: SortOrder
    lockedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayslipSumOrderByAggregateInput = {
    gross?: SortOrder
    deductions?: SortOrder
    netPay?: SortOrder
    daysWorked?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPayslipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayslipStatus | EnumPayslipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayslipStatus[]
    notIn?: $Enums.PayslipStatus[]
    not?: NestedEnumPayslipStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayslipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayslipStatusFilter<$PrismaModel>
    _max?: NestedEnumPayslipStatusFilter<$PrismaModel>
  }

  export type EnumPaymentModeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[]
    notIn?: $Enums.PaymentMode[]
    not?: NestedEnumPaymentModeFilter<$PrismaModel> | $Enums.PaymentMode
  }

  export type PayslipScalarRelationFilter = {
    is?: PayslipWhereInput
    isNot?: PayslipWhereInput
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    payslipId?: SortOrder
    employeeId?: SortOrder
    amount?: SortOrder
    mode?: SortOrder
    note?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    payslipId?: SortOrder
    employeeId?: SortOrder
    amount?: SortOrder
    mode?: SortOrder
    note?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    payslipId?: SortOrder
    employeeId?: SortOrder
    amount?: SortOrder
    mode?: SortOrder
    note?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[]
    notIn?: $Enums.PaymentMode[]
    not?: NestedEnumPaymentModeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentModeFilter<$PrismaModel>
    _max?: NestedEnumPaymentModeFilter<$PrismaModel>
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkScheduleOrderByRelevanceInput = {
    fields: WorkScheduleOrderByRelevanceFieldEnum | WorkScheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    hoursPerDay?: SortOrder
  }

  export type WorkScheduleAvgOrderByAggregateInput = {
    hoursPerDay?: SortOrder
  }

  export type WorkScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    hoursPerDay?: SortOrder
  }

  export type WorkScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    hoursPerDay?: SortOrder
  }

  export type WorkScheduleSumOrderByAggregateInput = {
    hoursPerDay?: SortOrder
  }

  export type WorkScheduleScalarRelationFilter = {
    is?: WorkScheduleWhereInput
    isNot?: WorkScheduleWhereInput
  }

  export type AttendanceOrderByRelevanceInput = {
    fields: AttendanceOrderByRelevanceFieldEnum | AttendanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    date?: SortOrder
    workedHours?: SortOrder
    validated?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    workedHours?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    date?: SortOrder
    workedHours?: SortOrder
    validated?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    date?: SortOrder
    workedHours?: SortOrder
    validated?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    workedHours?: SortOrder
  }

  export type PayslipCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayslipCreateWithoutEmployeeInput, PayslipUncheckedCreateWithoutEmployeeInput> | PayslipCreateWithoutEmployeeInput[] | PayslipUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutEmployeeInput | PayslipCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayslipCreateManyEmployeeInputEnvelope
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PaymentCreateWithoutEmployeeInput, PaymentUncheckedCreateWithoutEmployeeInput> | PaymentCreateWithoutEmployeeInput[] | PaymentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEmployeeInput | PaymentCreateOrConnectWithoutEmployeeInput[]
    createMany?: PaymentCreateManyEmployeeInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type WorkScheduleCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WorkScheduleCreateWithoutEmployeeInput, WorkScheduleUncheckedCreateWithoutEmployeeInput> | WorkScheduleCreateWithoutEmployeeInput[] | WorkScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutEmployeeInput | WorkScheduleCreateOrConnectWithoutEmployeeInput[]
    createMany?: WorkScheduleCreateManyEmployeeInputEnvelope
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
  }

  export type PayslipUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayslipCreateWithoutEmployeeInput, PayslipUncheckedCreateWithoutEmployeeInput> | PayslipCreateWithoutEmployeeInput[] | PayslipUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutEmployeeInput | PayslipCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayslipCreateManyEmployeeInputEnvelope
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PaymentCreateWithoutEmployeeInput, PaymentUncheckedCreateWithoutEmployeeInput> | PaymentCreateWithoutEmployeeInput[] | PaymentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEmployeeInput | PaymentCreateOrConnectWithoutEmployeeInput[]
    createMany?: PaymentCreateManyEmployeeInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type WorkScheduleUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WorkScheduleCreateWithoutEmployeeInput, WorkScheduleUncheckedCreateWithoutEmployeeInput> | WorkScheduleCreateWithoutEmployeeInput[] | WorkScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutEmployeeInput | WorkScheduleCreateOrConnectWithoutEmployeeInput[]
    createMany?: WorkScheduleCreateManyEmployeeInputEnvelope
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumContractTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContractType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PayslipUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayslipCreateWithoutEmployeeInput, PayslipUncheckedCreateWithoutEmployeeInput> | PayslipCreateWithoutEmployeeInput[] | PayslipUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutEmployeeInput | PayslipCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayslipUpsertWithWhereUniqueWithoutEmployeeInput | PayslipUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayslipCreateManyEmployeeInputEnvelope
    set?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    disconnect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    delete?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    update?: PayslipUpdateWithWhereUniqueWithoutEmployeeInput | PayslipUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayslipUpdateManyWithWhereWithoutEmployeeInput | PayslipUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PaymentCreateWithoutEmployeeInput, PaymentUncheckedCreateWithoutEmployeeInput> | PaymentCreateWithoutEmployeeInput[] | PaymentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEmployeeInput | PaymentCreateOrConnectWithoutEmployeeInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutEmployeeInput | PaymentUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PaymentCreateManyEmployeeInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutEmployeeInput | PaymentUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutEmployeeInput | PaymentUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type WorkScheduleUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutEmployeeInput, WorkScheduleUncheckedCreateWithoutEmployeeInput> | WorkScheduleCreateWithoutEmployeeInput[] | WorkScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutEmployeeInput | WorkScheduleCreateOrConnectWithoutEmployeeInput[]
    upsert?: WorkScheduleUpsertWithWhereUniqueWithoutEmployeeInput | WorkScheduleUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WorkScheduleCreateManyEmployeeInputEnvelope
    set?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    disconnect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    delete?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    update?: WorkScheduleUpdateWithWhereUniqueWithoutEmployeeInput | WorkScheduleUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WorkScheduleUpdateManyWithWhereWithoutEmployeeInput | WorkScheduleUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
  }

  export type PayslipUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayslipCreateWithoutEmployeeInput, PayslipUncheckedCreateWithoutEmployeeInput> | PayslipCreateWithoutEmployeeInput[] | PayslipUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutEmployeeInput | PayslipCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayslipUpsertWithWhereUniqueWithoutEmployeeInput | PayslipUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayslipCreateManyEmployeeInputEnvelope
    set?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    disconnect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    delete?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    update?: PayslipUpdateWithWhereUniqueWithoutEmployeeInput | PayslipUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayslipUpdateManyWithWhereWithoutEmployeeInput | PayslipUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PaymentCreateWithoutEmployeeInput, PaymentUncheckedCreateWithoutEmployeeInput> | PaymentCreateWithoutEmployeeInput[] | PaymentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEmployeeInput | PaymentCreateOrConnectWithoutEmployeeInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutEmployeeInput | PaymentUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PaymentCreateManyEmployeeInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutEmployeeInput | PaymentUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutEmployeeInput | PaymentUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type WorkScheduleUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutEmployeeInput, WorkScheduleUncheckedCreateWithoutEmployeeInput> | WorkScheduleCreateWithoutEmployeeInput[] | WorkScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutEmployeeInput | WorkScheduleCreateOrConnectWithoutEmployeeInput[]
    upsert?: WorkScheduleUpsertWithWhereUniqueWithoutEmployeeInput | WorkScheduleUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WorkScheduleCreateManyEmployeeInputEnvelope
    set?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    disconnect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    delete?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    update?: WorkScheduleUpdateWithWhereUniqueWithoutEmployeeInput | WorkScheduleUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WorkScheduleUpdateManyWithWhereWithoutEmployeeInput | WorkScheduleUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
  }

  export type PayslipCreateNestedManyWithoutPayRunInput = {
    create?: XOR<PayslipCreateWithoutPayRunInput, PayslipUncheckedCreateWithoutPayRunInput> | PayslipCreateWithoutPayRunInput[] | PayslipUncheckedCreateWithoutPayRunInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutPayRunInput | PayslipCreateOrConnectWithoutPayRunInput[]
    createMany?: PayslipCreateManyPayRunInputEnvelope
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
  }

  export type PayslipUncheckedCreateNestedManyWithoutPayRunInput = {
    create?: XOR<PayslipCreateWithoutPayRunInput, PayslipUncheckedCreateWithoutPayRunInput> | PayslipCreateWithoutPayRunInput[] | PayslipUncheckedCreateWithoutPayRunInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutPayRunInput | PayslipCreateOrConnectWithoutPayRunInput[]
    createMany?: PayslipCreateManyPayRunInputEnvelope
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
  }

  export type EnumPayRunTypeFieldUpdateOperationsInput = {
    set?: $Enums.PayRunType
  }

  export type EnumPayRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayRunStatus
  }

  export type PayslipUpdateManyWithoutPayRunNestedInput = {
    create?: XOR<PayslipCreateWithoutPayRunInput, PayslipUncheckedCreateWithoutPayRunInput> | PayslipCreateWithoutPayRunInput[] | PayslipUncheckedCreateWithoutPayRunInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutPayRunInput | PayslipCreateOrConnectWithoutPayRunInput[]
    upsert?: PayslipUpsertWithWhereUniqueWithoutPayRunInput | PayslipUpsertWithWhereUniqueWithoutPayRunInput[]
    createMany?: PayslipCreateManyPayRunInputEnvelope
    set?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    disconnect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    delete?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    update?: PayslipUpdateWithWhereUniqueWithoutPayRunInput | PayslipUpdateWithWhereUniqueWithoutPayRunInput[]
    updateMany?: PayslipUpdateManyWithWhereWithoutPayRunInput | PayslipUpdateManyWithWhereWithoutPayRunInput[]
    deleteMany?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
  }

  export type PayslipUncheckedUpdateManyWithoutPayRunNestedInput = {
    create?: XOR<PayslipCreateWithoutPayRunInput, PayslipUncheckedCreateWithoutPayRunInput> | PayslipCreateWithoutPayRunInput[] | PayslipUncheckedCreateWithoutPayRunInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutPayRunInput | PayslipCreateOrConnectWithoutPayRunInput[]
    upsert?: PayslipUpsertWithWhereUniqueWithoutPayRunInput | PayslipUpsertWithWhereUniqueWithoutPayRunInput[]
    createMany?: PayslipCreateManyPayRunInputEnvelope
    set?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    disconnect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    delete?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    update?: PayslipUpdateWithWhereUniqueWithoutPayRunInput | PayslipUpdateWithWhereUniqueWithoutPayRunInput[]
    updateMany?: PayslipUpdateManyWithWhereWithoutPayRunInput | PayslipUpdateManyWithWhereWithoutPayRunInput[]
    deleteMany?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutPayslipsInput = {
    create?: XOR<EmployeeCreateWithoutPayslipsInput, EmployeeUncheckedCreateWithoutPayslipsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayslipsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PayRunCreateNestedOneWithoutPayslipsInput = {
    create?: XOR<PayRunCreateWithoutPayslipsInput, PayRunUncheckedCreateWithoutPayslipsInput>
    connectOrCreate?: PayRunCreateOrConnectWithoutPayslipsInput
    connect?: PayRunWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutPayslipInput = {
    create?: XOR<PaymentCreateWithoutPayslipInput, PaymentUncheckedCreateWithoutPayslipInput> | PaymentCreateWithoutPayslipInput[] | PaymentUncheckedCreateWithoutPayslipInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPayslipInput | PaymentCreateOrConnectWithoutPayslipInput[]
    createMany?: PaymentCreateManyPayslipInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPayslipInput = {
    create?: XOR<PaymentCreateWithoutPayslipInput, PaymentUncheckedCreateWithoutPayslipInput> | PaymentCreateWithoutPayslipInput[] | PaymentUncheckedCreateWithoutPayslipInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPayslipInput | PaymentCreateOrConnectWithoutPayslipInput[]
    createMany?: PaymentCreateManyPayslipInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPayslipStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayslipStatus
  }

  export type EmployeeUpdateOneRequiredWithoutPayslipsNestedInput = {
    create?: XOR<EmployeeCreateWithoutPayslipsInput, EmployeeUncheckedCreateWithoutPayslipsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayslipsInput
    upsert?: EmployeeUpsertWithoutPayslipsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPayslipsInput, EmployeeUpdateWithoutPayslipsInput>, EmployeeUncheckedUpdateWithoutPayslipsInput>
  }

  export type PayRunUpdateOneRequiredWithoutPayslipsNestedInput = {
    create?: XOR<PayRunCreateWithoutPayslipsInput, PayRunUncheckedCreateWithoutPayslipsInput>
    connectOrCreate?: PayRunCreateOrConnectWithoutPayslipsInput
    upsert?: PayRunUpsertWithoutPayslipsInput
    connect?: PayRunWhereUniqueInput
    update?: XOR<XOR<PayRunUpdateToOneWithWhereWithoutPayslipsInput, PayRunUpdateWithoutPayslipsInput>, PayRunUncheckedUpdateWithoutPayslipsInput>
  }

  export type PaymentUpdateManyWithoutPayslipNestedInput = {
    create?: XOR<PaymentCreateWithoutPayslipInput, PaymentUncheckedCreateWithoutPayslipInput> | PaymentCreateWithoutPayslipInput[] | PaymentUncheckedCreateWithoutPayslipInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPayslipInput | PaymentCreateOrConnectWithoutPayslipInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPayslipInput | PaymentUpsertWithWhereUniqueWithoutPayslipInput[]
    createMany?: PaymentCreateManyPayslipInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPayslipInput | PaymentUpdateWithWhereUniqueWithoutPayslipInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPayslipInput | PaymentUpdateManyWithWhereWithoutPayslipInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPayslipNestedInput = {
    create?: XOR<PaymentCreateWithoutPayslipInput, PaymentUncheckedCreateWithoutPayslipInput> | PaymentCreateWithoutPayslipInput[] | PaymentUncheckedCreateWithoutPayslipInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPayslipInput | PaymentCreateOrConnectWithoutPayslipInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPayslipInput | PaymentUpsertWithWhereUniqueWithoutPayslipInput[]
    createMany?: PaymentCreateManyPayslipInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPayslipInput | PaymentUpdateWithWhereUniqueWithoutPayslipInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPayslipInput | PaymentUpdateManyWithWhereWithoutPayslipInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PayslipCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PayslipCreateWithoutPaymentsInput, PayslipUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PayslipCreateOrConnectWithoutPaymentsInput
    connect?: PayslipWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<EmployeeCreateWithoutPaymentsInput, EmployeeUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPaymentsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumPaymentModeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMode
  }

  export type PayslipUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PayslipCreateWithoutPaymentsInput, PayslipUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PayslipCreateOrConnectWithoutPaymentsInput
    upsert?: PayslipUpsertWithoutPaymentsInput
    connect?: PayslipWhereUniqueInput
    update?: XOR<XOR<PayslipUpdateToOneWithWhereWithoutPaymentsInput, PayslipUpdateWithoutPaymentsInput>, PayslipUncheckedUpdateWithoutPaymentsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<EmployeeCreateWithoutPaymentsInput, EmployeeUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPaymentsInput
    upsert?: EmployeeUpsertWithoutPaymentsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPaymentsInput, EmployeeUpdateWithoutPaymentsInput>, EmployeeUncheckedUpdateWithoutPaymentsInput>
  }

  export type EmployeeCreateNestedOneWithoutWorkSchedulesInput = {
    create?: XOR<EmployeeCreateWithoutWorkSchedulesInput, EmployeeUncheckedCreateWithoutWorkSchedulesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutWorkSchedulesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutWorkScheduleInput = {
    create?: XOR<AttendanceCreateWithoutWorkScheduleInput, AttendanceUncheckedCreateWithoutWorkScheduleInput> | AttendanceCreateWithoutWorkScheduleInput[] | AttendanceUncheckedCreateWithoutWorkScheduleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutWorkScheduleInput | AttendanceCreateOrConnectWithoutWorkScheduleInput[]
    createMany?: AttendanceCreateManyWorkScheduleInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutWorkScheduleInput = {
    create?: XOR<AttendanceCreateWithoutWorkScheduleInput, AttendanceUncheckedCreateWithoutWorkScheduleInput> | AttendanceCreateWithoutWorkScheduleInput[] | AttendanceUncheckedCreateWithoutWorkScheduleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutWorkScheduleInput | AttendanceCreateOrConnectWithoutWorkScheduleInput[]
    createMany?: AttendanceCreateManyWorkScheduleInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutWorkSchedulesNestedInput = {
    create?: XOR<EmployeeCreateWithoutWorkSchedulesInput, EmployeeUncheckedCreateWithoutWorkSchedulesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutWorkSchedulesInput
    upsert?: EmployeeUpsertWithoutWorkSchedulesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutWorkSchedulesInput, EmployeeUpdateWithoutWorkSchedulesInput>, EmployeeUncheckedUpdateWithoutWorkSchedulesInput>
  }

  export type AttendanceUpdateManyWithoutWorkScheduleNestedInput = {
    create?: XOR<AttendanceCreateWithoutWorkScheduleInput, AttendanceUncheckedCreateWithoutWorkScheduleInput> | AttendanceCreateWithoutWorkScheduleInput[] | AttendanceUncheckedCreateWithoutWorkScheduleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutWorkScheduleInput | AttendanceCreateOrConnectWithoutWorkScheduleInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutWorkScheduleInput | AttendanceUpsertWithWhereUniqueWithoutWorkScheduleInput[]
    createMany?: AttendanceCreateManyWorkScheduleInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutWorkScheduleInput | AttendanceUpdateWithWhereUniqueWithoutWorkScheduleInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutWorkScheduleInput | AttendanceUpdateManyWithWhereWithoutWorkScheduleInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutWorkScheduleNestedInput = {
    create?: XOR<AttendanceCreateWithoutWorkScheduleInput, AttendanceUncheckedCreateWithoutWorkScheduleInput> | AttendanceCreateWithoutWorkScheduleInput[] | AttendanceUncheckedCreateWithoutWorkScheduleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutWorkScheduleInput | AttendanceCreateOrConnectWithoutWorkScheduleInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutWorkScheduleInput | AttendanceUpsertWithWhereUniqueWithoutWorkScheduleInput[]
    createMany?: AttendanceCreateManyWorkScheduleInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutWorkScheduleInput | AttendanceUpdateWithWhereUniqueWithoutWorkScheduleInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutWorkScheduleInput | AttendanceUpdateManyWithWhereWithoutWorkScheduleInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type WorkScheduleCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<WorkScheduleCreateWithoutAttendancesInput, WorkScheduleUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutAttendancesInput
    connect?: WorkScheduleWhereUniqueInput
  }

  export type WorkScheduleUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutAttendancesInput, WorkScheduleUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutAttendancesInput
    upsert?: WorkScheduleUpsertWithoutAttendancesInput
    connect?: WorkScheduleWhereUniqueInput
    update?: XOR<XOR<WorkScheduleUpdateToOneWithWhereWithoutAttendancesInput, WorkScheduleUpdateWithoutAttendancesInput>, WorkScheduleUncheckedUpdateWithoutAttendancesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumContractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[]
    notIn?: $Enums.ContractType[]
    not?: NestedEnumContractTypeFilter<$PrismaModel> | $Enums.ContractType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumContractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[]
    notIn?: $Enums.ContractType[]
    not?: NestedEnumContractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractTypeFilter<$PrismaModel>
    _max?: NestedEnumContractTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPayRunTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunType | EnumPayRunTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunType[]
    notIn?: $Enums.PayRunType[]
    not?: NestedEnumPayRunTypeFilter<$PrismaModel> | $Enums.PayRunType
  }

  export type NestedEnumPayRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatus | EnumPayRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunStatus[]
    notIn?: $Enums.PayRunStatus[]
    not?: NestedEnumPayRunStatusFilter<$PrismaModel> | $Enums.PayRunStatus
  }

  export type NestedEnumPayRunTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunType | EnumPayRunTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunType[]
    notIn?: $Enums.PayRunType[]
    not?: NestedEnumPayRunTypeWithAggregatesFilter<$PrismaModel> | $Enums.PayRunType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayRunTypeFilter<$PrismaModel>
    _max?: NestedEnumPayRunTypeFilter<$PrismaModel>
  }

  export type NestedEnumPayRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatus | EnumPayRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunStatus[]
    notIn?: $Enums.PayRunStatus[]
    not?: NestedEnumPayRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayRunStatusFilter<$PrismaModel>
    _max?: NestedEnumPayRunStatusFilter<$PrismaModel>
  }

  export type NestedEnumPayslipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayslipStatus | EnumPayslipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayslipStatus[]
    notIn?: $Enums.PayslipStatus[]
    not?: NestedEnumPayslipStatusFilter<$PrismaModel> | $Enums.PayslipStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPayslipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayslipStatus | EnumPayslipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayslipStatus[]
    notIn?: $Enums.PayslipStatus[]
    not?: NestedEnumPayslipStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayslipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayslipStatusFilter<$PrismaModel>
    _max?: NestedEnumPayslipStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentModeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[]
    notIn?: $Enums.PaymentMode[]
    not?: NestedEnumPaymentModeFilter<$PrismaModel> | $Enums.PaymentMode
  }

  export type NestedEnumPaymentModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[]
    notIn?: $Enums.PaymentMode[]
    not?: NestedEnumPaymentModeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentModeFilter<$PrismaModel>
    _max?: NestedEnumPaymentModeFilter<$PrismaModel>
  }

  export type PayslipCreateWithoutEmployeeInput = {
    id?: string
    gross?: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    daysWorked?: number | null
    status?: $Enums.PayslipStatus
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payRun: PayRunCreateNestedOneWithoutPayslipsInput
    payments?: PaymentCreateNestedManyWithoutPayslipInput
  }

  export type PayslipUncheckedCreateWithoutEmployeeInput = {
    id?: string
    payRunId: string
    gross?: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    daysWorked?: number | null
    status?: $Enums.PayslipStatus
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutPayslipInput
  }

  export type PayslipCreateOrConnectWithoutEmployeeInput = {
    where: PayslipWhereUniqueInput
    create: XOR<PayslipCreateWithoutEmployeeInput, PayslipUncheckedCreateWithoutEmployeeInput>
  }

  export type PayslipCreateManyEmployeeInputEnvelope = {
    data: PayslipCreateManyEmployeeInput | PayslipCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutEmployeeInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    mode: $Enums.PaymentMode
    note?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    payslip: PayslipCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutEmployeeInput = {
    id?: string
    payslipId: string
    amount: Decimal | DecimalJsLike | number | string
    mode: $Enums.PaymentMode
    note?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutEmployeeInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutEmployeeInput, PaymentUncheckedCreateWithoutEmployeeInput>
  }

  export type PaymentCreateManyEmployeeInputEnvelope = {
    data: PaymentCreateManyEmployeeInput | PaymentCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type WorkScheduleCreateWithoutEmployeeInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    type: $Enums.ContractType
    hoursPerDay?: number | null
    attendances?: AttendanceCreateNestedManyWithoutWorkScheduleInput
  }

  export type WorkScheduleUncheckedCreateWithoutEmployeeInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    type: $Enums.ContractType
    hoursPerDay?: number | null
    attendances?: AttendanceUncheckedCreateNestedManyWithoutWorkScheduleInput
  }

  export type WorkScheduleCreateOrConnectWithoutEmployeeInput = {
    where: WorkScheduleWhereUniqueInput
    create: XOR<WorkScheduleCreateWithoutEmployeeInput, WorkScheduleUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkScheduleCreateManyEmployeeInputEnvelope = {
    data: WorkScheduleCreateManyEmployeeInput | WorkScheduleCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PayslipUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PayslipWhereUniqueInput
    update: XOR<PayslipUpdateWithoutEmployeeInput, PayslipUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PayslipCreateWithoutEmployeeInput, PayslipUncheckedCreateWithoutEmployeeInput>
  }

  export type PayslipUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PayslipWhereUniqueInput
    data: XOR<PayslipUpdateWithoutEmployeeInput, PayslipUncheckedUpdateWithoutEmployeeInput>
  }

  export type PayslipUpdateManyWithWhereWithoutEmployeeInput = {
    where: PayslipScalarWhereInput
    data: XOR<PayslipUpdateManyMutationInput, PayslipUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type PayslipScalarWhereInput = {
    AND?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
    OR?: PayslipScalarWhereInput[]
    NOT?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
    id?: StringFilter<"Payslip"> | string
    employeeId?: StringFilter<"Payslip"> | string
    payRunId?: StringFilter<"Payslip"> | string
    gross?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    daysWorked?: IntNullableFilter<"Payslip"> | number | null
    status?: EnumPayslipStatusFilter<"Payslip"> | $Enums.PayslipStatus
    lockedAt?: DateTimeNullableFilter<"Payslip"> | Date | string | null
    createdAt?: DateTimeFilter<"Payslip"> | Date | string
    updatedAt?: DateTimeFilter<"Payslip"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutEmployeeInput, PaymentUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PaymentCreateWithoutEmployeeInput, PaymentUncheckedCreateWithoutEmployeeInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutEmployeeInput, PaymentUncheckedUpdateWithoutEmployeeInput>
  }

  export type PaymentUpdateManyWithWhereWithoutEmployeeInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    payslipId?: StringFilter<"Payment"> | string
    employeeId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFilter<"Payment"> | $Enums.PaymentMode
    note?: StringNullableFilter<"Payment"> | string | null
    receiptUrl?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type WorkScheduleUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: WorkScheduleWhereUniqueInput
    update: XOR<WorkScheduleUpdateWithoutEmployeeInput, WorkScheduleUncheckedUpdateWithoutEmployeeInput>
    create: XOR<WorkScheduleCreateWithoutEmployeeInput, WorkScheduleUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkScheduleUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: WorkScheduleWhereUniqueInput
    data: XOR<WorkScheduleUpdateWithoutEmployeeInput, WorkScheduleUncheckedUpdateWithoutEmployeeInput>
  }

  export type WorkScheduleUpdateManyWithWhereWithoutEmployeeInput = {
    where: WorkScheduleScalarWhereInput
    data: XOR<WorkScheduleUpdateManyMutationInput, WorkScheduleUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type WorkScheduleScalarWhereInput = {
    AND?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
    OR?: WorkScheduleScalarWhereInput[]
    NOT?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
    id?: StringFilter<"WorkSchedule"> | string
    employeeId?: StringFilter<"WorkSchedule"> | string
    startDate?: DateTimeFilter<"WorkSchedule"> | Date | string
    endDate?: DateTimeFilter<"WorkSchedule"> | Date | string
    type?: EnumContractTypeFilter<"WorkSchedule"> | $Enums.ContractType
    hoursPerDay?: IntNullableFilter<"WorkSchedule"> | number | null
  }

  export type PayslipCreateWithoutPayRunInput = {
    id?: string
    gross?: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    daysWorked?: number | null
    status?: $Enums.PayslipStatus
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutPayslipsInput
    payments?: PaymentCreateNestedManyWithoutPayslipInput
  }

  export type PayslipUncheckedCreateWithoutPayRunInput = {
    id?: string
    employeeId: string
    gross?: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    daysWorked?: number | null
    status?: $Enums.PayslipStatus
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutPayslipInput
  }

  export type PayslipCreateOrConnectWithoutPayRunInput = {
    where: PayslipWhereUniqueInput
    create: XOR<PayslipCreateWithoutPayRunInput, PayslipUncheckedCreateWithoutPayRunInput>
  }

  export type PayslipCreateManyPayRunInputEnvelope = {
    data: PayslipCreateManyPayRunInput | PayslipCreateManyPayRunInput[]
    skipDuplicates?: boolean
  }

  export type PayslipUpsertWithWhereUniqueWithoutPayRunInput = {
    where: PayslipWhereUniqueInput
    update: XOR<PayslipUpdateWithoutPayRunInput, PayslipUncheckedUpdateWithoutPayRunInput>
    create: XOR<PayslipCreateWithoutPayRunInput, PayslipUncheckedCreateWithoutPayRunInput>
  }

  export type PayslipUpdateWithWhereUniqueWithoutPayRunInput = {
    where: PayslipWhereUniqueInput
    data: XOR<PayslipUpdateWithoutPayRunInput, PayslipUncheckedUpdateWithoutPayRunInput>
  }

  export type PayslipUpdateManyWithWhereWithoutPayRunInput = {
    where: PayslipScalarWhereInput
    data: XOR<PayslipUpdateManyMutationInput, PayslipUncheckedUpdateManyWithoutPayRunInput>
  }

  export type EmployeeCreateWithoutPayslipsInput = {
    id?: string
    fullName: string
    position?: string | null
    contractType: $Enums.ContractType
    salaryOrRate: Decimal | DecimalJsLike | number | string
    bankDetails?: string | null
    active?: boolean
    email?: string | null
    phone?: string | null
    hireDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutEmployeeInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutPayslipsInput = {
    id?: string
    fullName: string
    position?: string | null
    contractType: $Enums.ContractType
    salaryOrRate: Decimal | DecimalJsLike | number | string
    bankDetails?: string | null
    active?: boolean
    email?: string | null
    phone?: string | null
    hireDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutEmployeeInput
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutPayslipsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPayslipsInput, EmployeeUncheckedCreateWithoutPayslipsInput>
  }

  export type PayRunCreateWithoutPayslipsInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    type: $Enums.PayRunType
    status?: $Enums.PayRunStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
  }

  export type PayRunUncheckedCreateWithoutPayslipsInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    type: $Enums.PayRunType
    status?: $Enums.PayRunStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
  }

  export type PayRunCreateOrConnectWithoutPayslipsInput = {
    where: PayRunWhereUniqueInput
    create: XOR<PayRunCreateWithoutPayslipsInput, PayRunUncheckedCreateWithoutPayslipsInput>
  }

  export type PaymentCreateWithoutPayslipInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    mode: $Enums.PaymentMode
    note?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutPayslipInput = {
    id?: string
    employeeId: string
    amount: Decimal | DecimalJsLike | number | string
    mode: $Enums.PaymentMode
    note?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutPayslipInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPayslipInput, PaymentUncheckedCreateWithoutPayslipInput>
  }

  export type PaymentCreateManyPayslipInputEnvelope = {
    data: PaymentCreateManyPayslipInput | PaymentCreateManyPayslipInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutPayslipsInput = {
    update: XOR<EmployeeUpdateWithoutPayslipsInput, EmployeeUncheckedUpdateWithoutPayslipsInput>
    create: XOR<EmployeeCreateWithoutPayslipsInput, EmployeeUncheckedCreateWithoutPayslipsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPayslipsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPayslipsInput, EmployeeUncheckedUpdateWithoutPayslipsInput>
  }

  export type EmployeeUpdateWithoutPayslipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    salaryOrRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutEmployeeNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPayslipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    salaryOrRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutEmployeeNestedInput
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type PayRunUpsertWithoutPayslipsInput = {
    update: XOR<PayRunUpdateWithoutPayslipsInput, PayRunUncheckedUpdateWithoutPayslipsInput>
    create: XOR<PayRunCreateWithoutPayslipsInput, PayRunUncheckedCreateWithoutPayslipsInput>
    where?: PayRunWhereInput
  }

  export type PayRunUpdateToOneWithWhereWithoutPayslipsInput = {
    where?: PayRunWhereInput
    data: XOR<PayRunUpdateWithoutPayslipsInput, PayRunUncheckedUpdateWithoutPayslipsInput>
  }

  export type PayRunUpdateWithoutPayslipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPayRunTypeFieldUpdateOperationsInput | $Enums.PayRunType
    status?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type PayRunUncheckedUpdateWithoutPayslipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPayRunTypeFieldUpdateOperationsInput | $Enums.PayRunType
    status?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutPayslipInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPayslipInput, PaymentUncheckedUpdateWithoutPayslipInput>
    create: XOR<PaymentCreateWithoutPayslipInput, PaymentUncheckedCreateWithoutPayslipInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPayslipInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPayslipInput, PaymentUncheckedUpdateWithoutPayslipInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPayslipInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPayslipInput>
  }

  export type PayslipCreateWithoutPaymentsInput = {
    id?: string
    gross?: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    daysWorked?: number | null
    status?: $Enums.PayslipStatus
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutPayslipsInput
    payRun: PayRunCreateNestedOneWithoutPayslipsInput
  }

  export type PayslipUncheckedCreateWithoutPaymentsInput = {
    id?: string
    employeeId: string
    payRunId: string
    gross?: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    daysWorked?: number | null
    status?: $Enums.PayslipStatus
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayslipCreateOrConnectWithoutPaymentsInput = {
    where: PayslipWhereUniqueInput
    create: XOR<PayslipCreateWithoutPaymentsInput, PayslipUncheckedCreateWithoutPaymentsInput>
  }

  export type EmployeeCreateWithoutPaymentsInput = {
    id?: string
    fullName: string
    position?: string | null
    contractType: $Enums.ContractType
    salaryOrRate: Decimal | DecimalJsLike | number | string
    bankDetails?: string | null
    active?: boolean
    email?: string | null
    phone?: string | null
    hireDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payslips?: PayslipCreateNestedManyWithoutEmployeeInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutPaymentsInput = {
    id?: string
    fullName: string
    position?: string | null
    contractType: $Enums.ContractType
    salaryOrRate: Decimal | DecimalJsLike | number | string
    bankDetails?: string | null
    active?: boolean
    email?: string | null
    phone?: string | null
    hireDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payslips?: PayslipUncheckedCreateNestedManyWithoutEmployeeInput
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutPaymentsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPaymentsInput, EmployeeUncheckedCreateWithoutPaymentsInput>
  }

  export type PayslipUpsertWithoutPaymentsInput = {
    update: XOR<PayslipUpdateWithoutPaymentsInput, PayslipUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PayslipCreateWithoutPaymentsInput, PayslipUncheckedCreateWithoutPaymentsInput>
    where?: PayslipWhereInput
  }

  export type PayslipUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PayslipWhereInput
    data: XOR<PayslipUpdateWithoutPaymentsInput, PayslipUncheckedUpdateWithoutPaymentsInput>
  }

  export type PayslipUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    gross?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysWorked?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutPayslipsNestedInput
    payRun?: PayRunUpdateOneRequiredWithoutPayslipsNestedInput
  }

  export type PayslipUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    payRunId?: StringFieldUpdateOperationsInput | string
    gross?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysWorked?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpsertWithoutPaymentsInput = {
    update: XOR<EmployeeUpdateWithoutPaymentsInput, EmployeeUncheckedUpdateWithoutPaymentsInput>
    create: XOR<EmployeeCreateWithoutPaymentsInput, EmployeeUncheckedCreateWithoutPaymentsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPaymentsInput, EmployeeUncheckedUpdateWithoutPaymentsInput>
  }

  export type EmployeeUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    salaryOrRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslips?: PayslipUpdateManyWithoutEmployeeNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    salaryOrRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslips?: PayslipUncheckedUpdateManyWithoutEmployeeNestedInput
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutWorkSchedulesInput = {
    id?: string
    fullName: string
    position?: string | null
    contractType: $Enums.ContractType
    salaryOrRate: Decimal | DecimalJsLike | number | string
    bankDetails?: string | null
    active?: boolean
    email?: string | null
    phone?: string | null
    hireDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payslips?: PayslipCreateNestedManyWithoutEmployeeInput
    payments?: PaymentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutWorkSchedulesInput = {
    id?: string
    fullName: string
    position?: string | null
    contractType: $Enums.ContractType
    salaryOrRate: Decimal | DecimalJsLike | number | string
    bankDetails?: string | null
    active?: boolean
    email?: string | null
    phone?: string | null
    hireDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payslips?: PayslipUncheckedCreateNestedManyWithoutEmployeeInput
    payments?: PaymentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutWorkSchedulesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutWorkSchedulesInput, EmployeeUncheckedCreateWithoutWorkSchedulesInput>
  }

  export type AttendanceCreateWithoutWorkScheduleInput = {
    id?: string
    date: Date | string
    workedHours?: number | null
    validated?: boolean
  }

  export type AttendanceUncheckedCreateWithoutWorkScheduleInput = {
    id?: string
    date: Date | string
    workedHours?: number | null
    validated?: boolean
  }

  export type AttendanceCreateOrConnectWithoutWorkScheduleInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutWorkScheduleInput, AttendanceUncheckedCreateWithoutWorkScheduleInput>
  }

  export type AttendanceCreateManyWorkScheduleInputEnvelope = {
    data: AttendanceCreateManyWorkScheduleInput | AttendanceCreateManyWorkScheduleInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutWorkSchedulesInput = {
    update: XOR<EmployeeUpdateWithoutWorkSchedulesInput, EmployeeUncheckedUpdateWithoutWorkSchedulesInput>
    create: XOR<EmployeeCreateWithoutWorkSchedulesInput, EmployeeUncheckedCreateWithoutWorkSchedulesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutWorkSchedulesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutWorkSchedulesInput, EmployeeUncheckedUpdateWithoutWorkSchedulesInput>
  }

  export type EmployeeUpdateWithoutWorkSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    salaryOrRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslips?: PayslipUpdateManyWithoutEmployeeNestedInput
    payments?: PaymentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutWorkSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    contractType?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    salaryOrRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslips?: PayslipUncheckedUpdateManyWithoutEmployeeNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutWorkScheduleInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutWorkScheduleInput, AttendanceUncheckedUpdateWithoutWorkScheduleInput>
    create: XOR<AttendanceCreateWithoutWorkScheduleInput, AttendanceUncheckedCreateWithoutWorkScheduleInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutWorkScheduleInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutWorkScheduleInput, AttendanceUncheckedUpdateWithoutWorkScheduleInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutWorkScheduleInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutWorkScheduleInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    workScheduleId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    workedHours?: IntNullableFilter<"Attendance"> | number | null
    validated?: BoolFilter<"Attendance"> | boolean
  }

  export type WorkScheduleCreateWithoutAttendancesInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    type: $Enums.ContractType
    hoursPerDay?: number | null
    employee: EmployeeCreateNestedOneWithoutWorkSchedulesInput
  }

  export type WorkScheduleUncheckedCreateWithoutAttendancesInput = {
    id?: string
    employeeId: string
    startDate: Date | string
    endDate: Date | string
    type: $Enums.ContractType
    hoursPerDay?: number | null
  }

  export type WorkScheduleCreateOrConnectWithoutAttendancesInput = {
    where: WorkScheduleWhereUniqueInput
    create: XOR<WorkScheduleCreateWithoutAttendancesInput, WorkScheduleUncheckedCreateWithoutAttendancesInput>
  }

  export type WorkScheduleUpsertWithoutAttendancesInput = {
    update: XOR<WorkScheduleUpdateWithoutAttendancesInput, WorkScheduleUncheckedUpdateWithoutAttendancesInput>
    create: XOR<WorkScheduleCreateWithoutAttendancesInput, WorkScheduleUncheckedCreateWithoutAttendancesInput>
    where?: WorkScheduleWhereInput
  }

  export type WorkScheduleUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: WorkScheduleWhereInput
    data: XOR<WorkScheduleUpdateWithoutAttendancesInput, WorkScheduleUncheckedUpdateWithoutAttendancesInput>
  }

  export type WorkScheduleUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    hoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
    employee?: EmployeeUpdateOneRequiredWithoutWorkSchedulesNestedInput
  }

  export type WorkScheduleUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    hoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PayslipCreateManyEmployeeInput = {
    id?: string
    payRunId: string
    gross?: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    daysWorked?: number | null
    status?: $Enums.PayslipStatus
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyEmployeeInput = {
    id?: string
    payslipId: string
    amount: Decimal | DecimalJsLike | number | string
    mode: $Enums.PaymentMode
    note?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
  }

  export type WorkScheduleCreateManyEmployeeInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    type: $Enums.ContractType
    hoursPerDay?: number | null
  }

  export type PayslipUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    gross?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysWorked?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payRun?: PayRunUpdateOneRequiredWithoutPayslipsNestedInput
    payments?: PaymentUpdateManyWithoutPayslipNestedInput
  }

  export type PayslipUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    payRunId?: StringFieldUpdateOperationsInput | string
    gross?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysWorked?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutPayslipNestedInput
  }

  export type PayslipUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    payRunId?: StringFieldUpdateOperationsInput | string
    gross?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysWorked?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    note?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslip?: PayslipUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    payslipId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    note?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    payslipId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    note?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkScheduleUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    hoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
    attendances?: AttendanceUpdateManyWithoutWorkScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    hoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
    attendances?: AttendanceUncheckedUpdateManyWithoutWorkScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    hoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PayslipCreateManyPayRunInput = {
    id?: string
    employeeId: string
    gross?: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    daysWorked?: number | null
    status?: $Enums.PayslipStatus
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayslipUpdateWithoutPayRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    gross?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysWorked?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutPayslipsNestedInput
    payments?: PaymentUpdateManyWithoutPayslipNestedInput
  }

  export type PayslipUncheckedUpdateWithoutPayRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    gross?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysWorked?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutPayslipNestedInput
  }

  export type PayslipUncheckedUpdateManyWithoutPayRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    gross?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysWorked?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyPayslipInput = {
    id?: string
    employeeId: string
    amount: Decimal | DecimalJsLike | number | string
    mode: $Enums.PaymentMode
    note?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutPayslipInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    note?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPayslipInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    note?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutPayslipInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    note?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyWorkScheduleInput = {
    id?: string
    date: Date | string
    workedHours?: number | null
    validated?: boolean
  }

  export type AttendanceUpdateWithoutWorkScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workedHours?: NullableIntFieldUpdateOperationsInput | number | null
    validated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttendanceUncheckedUpdateWithoutWorkScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workedHours?: NullableIntFieldUpdateOperationsInput | number | null
    validated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttendanceUncheckedUpdateManyWithoutWorkScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workedHours?: NullableIntFieldUpdateOperationsInput | number | null
    validated?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}