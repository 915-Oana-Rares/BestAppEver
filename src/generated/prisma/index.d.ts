
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
 * Model Comic
 * 
 */
export type Comic = $Result.DefaultSelection<Prisma.$ComicPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model SuspiciousUser
 * 
 */
export type SuspiciousUser = $Result.DefaultSelection<Prisma.$SuspiciousUserPayload>
/**
 * Model UserOperation
 * 
 */
export type UserOperation = $Result.DefaultSelection<Prisma.$UserOperationPayload>
/**
 * Model UserComic
 * 
 */
export type UserComic = $Result.DefaultSelection<Prisma.$UserComicPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Comics
 * const comics = await prisma.comic.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Comics
   * const comics = await prisma.comic.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.comic`: Exposes CRUD operations for the **Comic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comics
    * const comics = await prisma.comic.findMany()
    * ```
    */
  get comic(): Prisma.ComicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suspiciousUser`: Exposes CRUD operations for the **SuspiciousUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuspiciousUsers
    * const suspiciousUsers = await prisma.suspiciousUser.findMany()
    * ```
    */
  get suspiciousUser(): Prisma.SuspiciousUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOperation`: Exposes CRUD operations for the **UserOperation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOperations
    * const userOperations = await prisma.userOperation.findMany()
    * ```
    */
  get userOperation(): Prisma.UserOperationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userComic`: Exposes CRUD operations for the **UserComic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserComics
    * const userComics = await prisma.userComic.findMany()
    * ```
    */
  get userComic(): Prisma.UserComicDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Comic: 'Comic',
    User: 'User',
    Admin: 'Admin',
    SuspiciousUser: 'SuspiciousUser',
    UserOperation: 'UserOperation',
    UserComic: 'UserComic'
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
      modelProps: "comic" | "user" | "admin" | "suspiciousUser" | "userOperation" | "userComic"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Comic: {
        payload: Prisma.$ComicPayload<ExtArgs>
        fields: Prisma.ComicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>
          }
          findFirst: {
            args: Prisma.ComicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>
          }
          findMany: {
            args: Prisma.ComicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>[]
          }
          create: {
            args: Prisma.ComicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>
          }
          createMany: {
            args: Prisma.ComicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>[]
          }
          delete: {
            args: Prisma.ComicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>
          }
          update: {
            args: Prisma.ComicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>
          }
          deleteMany: {
            args: Prisma.ComicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>[]
          }
          upsert: {
            args: Prisma.ComicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComicPayload>
          }
          aggregate: {
            args: Prisma.ComicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComic>
          }
          groupBy: {
            args: Prisma.ComicGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComicGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComicCountArgs<ExtArgs>
            result: $Utils.Optional<ComicCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      SuspiciousUser: {
        payload: Prisma.$SuspiciousUserPayload<ExtArgs>
        fields: Prisma.SuspiciousUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuspiciousUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuspiciousUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousUserPayload>
          }
          findFirst: {
            args: Prisma.SuspiciousUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuspiciousUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousUserPayload>
          }
          findMany: {
            args: Prisma.SuspiciousUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousUserPayload>[]
          }
          create: {
            args: Prisma.SuspiciousUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousUserPayload>
          }
          createMany: {
            args: Prisma.SuspiciousUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuspiciousUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousUserPayload>[]
          }
          delete: {
            args: Prisma.SuspiciousUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousUserPayload>
          }
          update: {
            args: Prisma.SuspiciousUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousUserPayload>
          }
          deleteMany: {
            args: Prisma.SuspiciousUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuspiciousUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuspiciousUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousUserPayload>[]
          }
          upsert: {
            args: Prisma.SuspiciousUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousUserPayload>
          }
          aggregate: {
            args: Prisma.SuspiciousUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuspiciousUser>
          }
          groupBy: {
            args: Prisma.SuspiciousUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuspiciousUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuspiciousUserCountArgs<ExtArgs>
            result: $Utils.Optional<SuspiciousUserCountAggregateOutputType> | number
          }
        }
      }
      UserOperation: {
        payload: Prisma.$UserOperationPayload<ExtArgs>
        fields: Prisma.UserOperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOperationPayload>
          }
          findFirst: {
            args: Prisma.UserOperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOperationPayload>
          }
          findMany: {
            args: Prisma.UserOperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOperationPayload>[]
          }
          create: {
            args: Prisma.UserOperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOperationPayload>
          }
          createMany: {
            args: Prisma.UserOperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserOperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOperationPayload>[]
          }
          delete: {
            args: Prisma.UserOperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOperationPayload>
          }
          update: {
            args: Prisma.UserOperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOperationPayload>
          }
          deleteMany: {
            args: Prisma.UserOperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserOperationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOperationPayload>[]
          }
          upsert: {
            args: Prisma.UserOperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOperationPayload>
          }
          aggregate: {
            args: Prisma.UserOperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOperation>
          }
          groupBy: {
            args: Prisma.UserOperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOperationCountArgs<ExtArgs>
            result: $Utils.Optional<UserOperationCountAggregateOutputType> | number
          }
        }
      }
      UserComic: {
        payload: Prisma.$UserComicPayload<ExtArgs>
        fields: Prisma.UserComicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserComicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserComicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserComicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserComicPayload>
          }
          findFirst: {
            args: Prisma.UserComicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserComicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserComicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserComicPayload>
          }
          findMany: {
            args: Prisma.UserComicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserComicPayload>[]
          }
          create: {
            args: Prisma.UserComicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserComicPayload>
          }
          createMany: {
            args: Prisma.UserComicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserComicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserComicPayload>[]
          }
          delete: {
            args: Prisma.UserComicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserComicPayload>
          }
          update: {
            args: Prisma.UserComicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserComicPayload>
          }
          deleteMany: {
            args: Prisma.UserComicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserComicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserComicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserComicPayload>[]
          }
          upsert: {
            args: Prisma.UserComicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserComicPayload>
          }
          aggregate: {
            args: Prisma.UserComicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserComic>
          }
          groupBy: {
            args: Prisma.UserComicGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserComicGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserComicCountArgs<ExtArgs>
            result: $Utils.Optional<UserComicCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    comic?: ComicOmit
    user?: UserOmit
    admin?: AdminOmit
    suspiciousUser?: SuspiciousUserOmit
    userOperation?: UserOperationOmit
    userComic?: UserComicOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ComicCountOutputType
   */

  export type ComicCountOutputType = {
    UserComic: number
    UserOperation: number
  }

  export type ComicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserComic?: boolean | ComicCountOutputTypeCountUserComicArgs
    UserOperation?: boolean | ComicCountOutputTypeCountUserOperationArgs
  }

  // Custom InputTypes
  /**
   * ComicCountOutputType without action
   */
  export type ComicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComicCountOutputType
     */
    select?: ComicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComicCountOutputType without action
   */
  export type ComicCountOutputTypeCountUserComicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserComicWhereInput
  }

  /**
   * ComicCountOutputType without action
   */
  export type ComicCountOutputTypeCountUserOperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOperationWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserComic: number
    UserOperation: number
    SuspiciousUser: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserComic?: boolean | UserCountOutputTypeCountUserComicArgs
    UserOperation?: boolean | UserCountOutputTypeCountUserOperationArgs
    SuspiciousUser?: boolean | UserCountOutputTypeCountSuspiciousUserArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserComicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserComicWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserOperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOperationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSuspiciousUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuspiciousUserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Comic
   */

  export type AggregateComic = {
    _count: ComicCountAggregateOutputType | null
    _min: ComicMinAggregateOutputType | null
    _max: ComicMaxAggregateOutputType | null
  }

  export type ComicMinAggregateOutputType = {
    name: string | null
    publisher: string | null
    writer: string | null
  }

  export type ComicMaxAggregateOutputType = {
    name: string | null
    publisher: string | null
    writer: string | null
  }

  export type ComicCountAggregateOutputType = {
    name: number
    publisher: number
    writer: number
    _all: number
  }


  export type ComicMinAggregateInputType = {
    name?: true
    publisher?: true
    writer?: true
  }

  export type ComicMaxAggregateInputType = {
    name?: true
    publisher?: true
    writer?: true
  }

  export type ComicCountAggregateInputType = {
    name?: true
    publisher?: true
    writer?: true
    _all?: true
  }

  export type ComicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comic to aggregate.
     */
    where?: ComicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comics to fetch.
     */
    orderBy?: ComicOrderByWithRelationInput | ComicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comics
    **/
    _count?: true | ComicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComicMaxAggregateInputType
  }

  export type GetComicAggregateType<T extends ComicAggregateArgs> = {
        [P in keyof T & keyof AggregateComic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComic[P]>
      : GetScalarType<T[P], AggregateComic[P]>
  }




  export type ComicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComicWhereInput
    orderBy?: ComicOrderByWithAggregationInput | ComicOrderByWithAggregationInput[]
    by: ComicScalarFieldEnum[] | ComicScalarFieldEnum
    having?: ComicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComicCountAggregateInputType | true
    _min?: ComicMinAggregateInputType
    _max?: ComicMaxAggregateInputType
  }

  export type ComicGroupByOutputType = {
    name: string
    publisher: string
    writer: string
    _count: ComicCountAggregateOutputType | null
    _min: ComicMinAggregateOutputType | null
    _max: ComicMaxAggregateOutputType | null
  }

  type GetComicGroupByPayload<T extends ComicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComicGroupByOutputType[P]>
            : GetScalarType<T[P], ComicGroupByOutputType[P]>
        }
      >
    >


  export type ComicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    publisher?: boolean
    writer?: boolean
    UserComic?: boolean | Comic$UserComicArgs<ExtArgs>
    UserOperation?: boolean | Comic$UserOperationArgs<ExtArgs>
    _count?: boolean | ComicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comic"]>

  export type ComicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    publisher?: boolean
    writer?: boolean
  }, ExtArgs["result"]["comic"]>

  export type ComicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    publisher?: boolean
    writer?: boolean
  }, ExtArgs["result"]["comic"]>

  export type ComicSelectScalar = {
    name?: boolean
    publisher?: boolean
    writer?: boolean
  }

  export type ComicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "publisher" | "writer", ExtArgs["result"]["comic"]>
  export type ComicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserComic?: boolean | Comic$UserComicArgs<ExtArgs>
    UserOperation?: boolean | Comic$UserOperationArgs<ExtArgs>
    _count?: boolean | ComicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ComicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ComicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comic"
    objects: {
      UserComic: Prisma.$UserComicPayload<ExtArgs>[]
      UserOperation: Prisma.$UserOperationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      publisher: string
      writer: string
    }, ExtArgs["result"]["comic"]>
    composites: {}
  }

  type ComicGetPayload<S extends boolean | null | undefined | ComicDefaultArgs> = $Result.GetResult<Prisma.$ComicPayload, S>

  type ComicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComicCountAggregateInputType | true
    }

  export interface ComicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comic'], meta: { name: 'Comic' } }
    /**
     * Find zero or one Comic that matches the filter.
     * @param {ComicFindUniqueArgs} args - Arguments to find a Comic
     * @example
     * // Get one Comic
     * const comic = await prisma.comic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComicFindUniqueArgs>(args: SelectSubset<T, ComicFindUniqueArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComicFindUniqueOrThrowArgs} args - Arguments to find a Comic
     * @example
     * // Get one Comic
     * const comic = await prisma.comic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComicFindUniqueOrThrowArgs>(args: SelectSubset<T, ComicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicFindFirstArgs} args - Arguments to find a Comic
     * @example
     * // Get one Comic
     * const comic = await prisma.comic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComicFindFirstArgs>(args?: SelectSubset<T, ComicFindFirstArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicFindFirstOrThrowArgs} args - Arguments to find a Comic
     * @example
     * // Get one Comic
     * const comic = await prisma.comic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComicFindFirstOrThrowArgs>(args?: SelectSubset<T, ComicFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comics
     * const comics = await prisma.comic.findMany()
     * 
     * // Get first 10 Comics
     * const comics = await prisma.comic.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const comicWithNameOnly = await prisma.comic.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends ComicFindManyArgs>(args?: SelectSubset<T, ComicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comic.
     * @param {ComicCreateArgs} args - Arguments to create a Comic.
     * @example
     * // Create one Comic
     * const Comic = await prisma.comic.create({
     *   data: {
     *     // ... data to create a Comic
     *   }
     * })
     * 
     */
    create<T extends ComicCreateArgs>(args: SelectSubset<T, ComicCreateArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comics.
     * @param {ComicCreateManyArgs} args - Arguments to create many Comics.
     * @example
     * // Create many Comics
     * const comic = await prisma.comic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComicCreateManyArgs>(args?: SelectSubset<T, ComicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comics and returns the data saved in the database.
     * @param {ComicCreateManyAndReturnArgs} args - Arguments to create many Comics.
     * @example
     * // Create many Comics
     * const comic = await prisma.comic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comics and only return the `name`
     * const comicWithNameOnly = await prisma.comic.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComicCreateManyAndReturnArgs>(args?: SelectSubset<T, ComicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comic.
     * @param {ComicDeleteArgs} args - Arguments to delete one Comic.
     * @example
     * // Delete one Comic
     * const Comic = await prisma.comic.delete({
     *   where: {
     *     // ... filter to delete one Comic
     *   }
     * })
     * 
     */
    delete<T extends ComicDeleteArgs>(args: SelectSubset<T, ComicDeleteArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comic.
     * @param {ComicUpdateArgs} args - Arguments to update one Comic.
     * @example
     * // Update one Comic
     * const comic = await prisma.comic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComicUpdateArgs>(args: SelectSubset<T, ComicUpdateArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comics.
     * @param {ComicDeleteManyArgs} args - Arguments to filter Comics to delete.
     * @example
     * // Delete a few Comics
     * const { count } = await prisma.comic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComicDeleteManyArgs>(args?: SelectSubset<T, ComicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comics
     * const comic = await prisma.comic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComicUpdateManyArgs>(args: SelectSubset<T, ComicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comics and returns the data updated in the database.
     * @param {ComicUpdateManyAndReturnArgs} args - Arguments to update many Comics.
     * @example
     * // Update many Comics
     * const comic = await prisma.comic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comics and only return the `name`
     * const comicWithNameOnly = await prisma.comic.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComicUpdateManyAndReturnArgs>(args: SelectSubset<T, ComicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comic.
     * @param {ComicUpsertArgs} args - Arguments to update or create a Comic.
     * @example
     * // Update or create a Comic
     * const comic = await prisma.comic.upsert({
     *   create: {
     *     // ... data to create a Comic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comic we want to update
     *   }
     * })
     */
    upsert<T extends ComicUpsertArgs>(args: SelectSubset<T, ComicUpsertArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicCountArgs} args - Arguments to filter Comics to count.
     * @example
     * // Count the number of Comics
     * const count = await prisma.comic.count({
     *   where: {
     *     // ... the filter for the Comics we want to count
     *   }
     * })
    **/
    count<T extends ComicCountArgs>(
      args?: Subset<T, ComicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComicAggregateArgs>(args: Subset<T, ComicAggregateArgs>): Prisma.PrismaPromise<GetComicAggregateType<T>>

    /**
     * Group by Comic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComicGroupByArgs} args - Group by arguments.
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
      T extends ComicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComicGroupByArgs['orderBy'] }
        : { orderBy?: ComicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comic model
   */
  readonly fields: ComicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserComic<T extends Comic$UserComicArgs<ExtArgs> = {}>(args?: Subset<T, Comic$UserComicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserOperation<T extends Comic$UserOperationArgs<ExtArgs> = {}>(args?: Subset<T, Comic$UserOperationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comic model
   */
  interface ComicFieldRefs {
    readonly name: FieldRef<"Comic", 'String'>
    readonly publisher: FieldRef<"Comic", 'String'>
    readonly writer: FieldRef<"Comic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comic findUnique
   */
  export type ComicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * Filter, which Comic to fetch.
     */
    where: ComicWhereUniqueInput
  }

  /**
   * Comic findUniqueOrThrow
   */
  export type ComicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * Filter, which Comic to fetch.
     */
    where: ComicWhereUniqueInput
  }

  /**
   * Comic findFirst
   */
  export type ComicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * Filter, which Comic to fetch.
     */
    where?: ComicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comics to fetch.
     */
    orderBy?: ComicOrderByWithRelationInput | ComicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comics.
     */
    cursor?: ComicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comics.
     */
    distinct?: ComicScalarFieldEnum | ComicScalarFieldEnum[]
  }

  /**
   * Comic findFirstOrThrow
   */
  export type ComicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * Filter, which Comic to fetch.
     */
    where?: ComicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comics to fetch.
     */
    orderBy?: ComicOrderByWithRelationInput | ComicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comics.
     */
    cursor?: ComicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comics.
     */
    distinct?: ComicScalarFieldEnum | ComicScalarFieldEnum[]
  }

  /**
   * Comic findMany
   */
  export type ComicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * Filter, which Comics to fetch.
     */
    where?: ComicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comics to fetch.
     */
    orderBy?: ComicOrderByWithRelationInput | ComicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comics.
     */
    cursor?: ComicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comics.
     */
    skip?: number
    distinct?: ComicScalarFieldEnum | ComicScalarFieldEnum[]
  }

  /**
   * Comic create
   */
  export type ComicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * The data needed to create a Comic.
     */
    data: XOR<ComicCreateInput, ComicUncheckedCreateInput>
  }

  /**
   * Comic createMany
   */
  export type ComicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comics.
     */
    data: ComicCreateManyInput | ComicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comic createManyAndReturn
   */
  export type ComicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * The data used to create many Comics.
     */
    data: ComicCreateManyInput | ComicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comic update
   */
  export type ComicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * The data needed to update a Comic.
     */
    data: XOR<ComicUpdateInput, ComicUncheckedUpdateInput>
    /**
     * Choose, which Comic to update.
     */
    where: ComicWhereUniqueInput
  }

  /**
   * Comic updateMany
   */
  export type ComicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comics.
     */
    data: XOR<ComicUpdateManyMutationInput, ComicUncheckedUpdateManyInput>
    /**
     * Filter which Comics to update
     */
    where?: ComicWhereInput
    /**
     * Limit how many Comics to update.
     */
    limit?: number
  }

  /**
   * Comic updateManyAndReturn
   */
  export type ComicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * The data used to update Comics.
     */
    data: XOR<ComicUpdateManyMutationInput, ComicUncheckedUpdateManyInput>
    /**
     * Filter which Comics to update
     */
    where?: ComicWhereInput
    /**
     * Limit how many Comics to update.
     */
    limit?: number
  }

  /**
   * Comic upsert
   */
  export type ComicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * The filter to search for the Comic to update in case it exists.
     */
    where: ComicWhereUniqueInput
    /**
     * In case the Comic found by the `where` argument doesn't exist, create a new Comic with this data.
     */
    create: XOR<ComicCreateInput, ComicUncheckedCreateInput>
    /**
     * In case the Comic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComicUpdateInput, ComicUncheckedUpdateInput>
  }

  /**
   * Comic delete
   */
  export type ComicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
    /**
     * Filter which Comic to delete.
     */
    where: ComicWhereUniqueInput
  }

  /**
   * Comic deleteMany
   */
  export type ComicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comics to delete
     */
    where?: ComicWhereInput
    /**
     * Limit how many Comics to delete.
     */
    limit?: number
  }

  /**
   * Comic.UserComic
   */
  export type Comic$UserComicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicInclude<ExtArgs> | null
    where?: UserComicWhereInput
    orderBy?: UserComicOrderByWithRelationInput | UserComicOrderByWithRelationInput[]
    cursor?: UserComicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserComicScalarFieldEnum | UserComicScalarFieldEnum[]
  }

  /**
   * Comic.UserOperation
   */
  export type Comic$UserOperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationInclude<ExtArgs> | null
    where?: UserOperationWhereInput
    orderBy?: UserOperationOrderByWithRelationInput | UserOperationOrderByWithRelationInput[]
    cursor?: UserOperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOperationScalarFieldEnum | UserOperationScalarFieldEnum[]
  }

  /**
   * Comic without action
   */
  export type ComicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comic
     */
    select?: ComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comic
     */
    omit?: ComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComicInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    UserComic?: boolean | User$UserComicArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
    UserOperation?: boolean | User$UserOperationArgs<ExtArgs>
    SuspiciousUser?: boolean | User$SuspiciousUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserComic?: boolean | User$UserComicArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
    UserOperation?: boolean | User$UserOperationArgs<ExtArgs>
    SuspiciousUser?: boolean | User$SuspiciousUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserComic: Prisma.$UserComicPayload<ExtArgs>[]
      Admin: Prisma.$AdminPayload<ExtArgs> | null
      UserOperation: Prisma.$UserOperationPayload<ExtArgs>[]
      SuspiciousUser: Prisma.$SuspiciousUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserComic<T extends User$UserComicArgs<ExtArgs> = {}>(args?: Subset<T, User$UserComicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Admin<T extends User$AdminArgs<ExtArgs> = {}>(args?: Subset<T, User$AdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    UserOperation<T extends User$UserOperationArgs<ExtArgs> = {}>(args?: Subset<T, User$UserOperationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SuspiciousUser<T extends User$SuspiciousUserArgs<ExtArgs> = {}>(args?: Subset<T, User$SuspiciousUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuspiciousUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.UserComic
   */
  export type User$UserComicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicInclude<ExtArgs> | null
    where?: UserComicWhereInput
    orderBy?: UserComicOrderByWithRelationInput | UserComicOrderByWithRelationInput[]
    cursor?: UserComicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserComicScalarFieldEnum | UserComicScalarFieldEnum[]
  }

  /**
   * User.Admin
   */
  export type User$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.UserOperation
   */
  export type User$UserOperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationInclude<ExtArgs> | null
    where?: UserOperationWhereInput
    orderBy?: UserOperationOrderByWithRelationInput | UserOperationOrderByWithRelationInput[]
    cursor?: UserOperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOperationScalarFieldEnum | UserOperationScalarFieldEnum[]
  }

  /**
   * User.SuspiciousUser
   */
  export type User$SuspiciousUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserInclude<ExtArgs> | null
    where?: SuspiciousUserWhereInput
    orderBy?: SuspiciousUserOrderByWithRelationInput | SuspiciousUserOrderByWithRelationInput[]
    cursor?: SuspiciousUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuspiciousUserScalarFieldEnum | SuspiciousUserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    userId: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly userId: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model SuspiciousUser
   */

  export type AggregateSuspiciousUser = {
    _count: SuspiciousUserCountAggregateOutputType | null
    _min: SuspiciousUserMinAggregateOutputType | null
    _max: SuspiciousUserMaxAggregateOutputType | null
  }

  export type SuspiciousUserMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type SuspiciousUserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type SuspiciousUserCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type SuspiciousUserMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SuspiciousUserMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SuspiciousUserCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type SuspiciousUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuspiciousUser to aggregate.
     */
    where?: SuspiciousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuspiciousUsers to fetch.
     */
    orderBy?: SuspiciousUserOrderByWithRelationInput | SuspiciousUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuspiciousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuspiciousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuspiciousUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuspiciousUsers
    **/
    _count?: true | SuspiciousUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuspiciousUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuspiciousUserMaxAggregateInputType
  }

  export type GetSuspiciousUserAggregateType<T extends SuspiciousUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSuspiciousUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuspiciousUser[P]>
      : GetScalarType<T[P], AggregateSuspiciousUser[P]>
  }




  export type SuspiciousUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuspiciousUserWhereInput
    orderBy?: SuspiciousUserOrderByWithAggregationInput | SuspiciousUserOrderByWithAggregationInput[]
    by: SuspiciousUserScalarFieldEnum[] | SuspiciousUserScalarFieldEnum
    having?: SuspiciousUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuspiciousUserCountAggregateInputType | true
    _min?: SuspiciousUserMinAggregateInputType
    _max?: SuspiciousUserMaxAggregateInputType
  }

  export type SuspiciousUserGroupByOutputType = {
    id: string
    userId: string
    _count: SuspiciousUserCountAggregateOutputType | null
    _min: SuspiciousUserMinAggregateOutputType | null
    _max: SuspiciousUserMaxAggregateOutputType | null
  }

  type GetSuspiciousUserGroupByPayload<T extends SuspiciousUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuspiciousUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuspiciousUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuspiciousUserGroupByOutputType[P]>
            : GetScalarType<T[P], SuspiciousUserGroupByOutputType[P]>
        }
      >
    >


  export type SuspiciousUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suspiciousUser"]>

  export type SuspiciousUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suspiciousUser"]>

  export type SuspiciousUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suspiciousUser"]>

  export type SuspiciousUserSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type SuspiciousUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["suspiciousUser"]>
  export type SuspiciousUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SuspiciousUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SuspiciousUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SuspiciousUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuspiciousUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["suspiciousUser"]>
    composites: {}
  }

  type SuspiciousUserGetPayload<S extends boolean | null | undefined | SuspiciousUserDefaultArgs> = $Result.GetResult<Prisma.$SuspiciousUserPayload, S>

  type SuspiciousUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuspiciousUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuspiciousUserCountAggregateInputType | true
    }

  export interface SuspiciousUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuspiciousUser'], meta: { name: 'SuspiciousUser' } }
    /**
     * Find zero or one SuspiciousUser that matches the filter.
     * @param {SuspiciousUserFindUniqueArgs} args - Arguments to find a SuspiciousUser
     * @example
     * // Get one SuspiciousUser
     * const suspiciousUser = await prisma.suspiciousUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuspiciousUserFindUniqueArgs>(args: SelectSubset<T, SuspiciousUserFindUniqueArgs<ExtArgs>>): Prisma__SuspiciousUserClient<$Result.GetResult<Prisma.$SuspiciousUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuspiciousUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuspiciousUserFindUniqueOrThrowArgs} args - Arguments to find a SuspiciousUser
     * @example
     * // Get one SuspiciousUser
     * const suspiciousUser = await prisma.suspiciousUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuspiciousUserFindUniqueOrThrowArgs>(args: SelectSubset<T, SuspiciousUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuspiciousUserClient<$Result.GetResult<Prisma.$SuspiciousUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuspiciousUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousUserFindFirstArgs} args - Arguments to find a SuspiciousUser
     * @example
     * // Get one SuspiciousUser
     * const suspiciousUser = await prisma.suspiciousUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuspiciousUserFindFirstArgs>(args?: SelectSubset<T, SuspiciousUserFindFirstArgs<ExtArgs>>): Prisma__SuspiciousUserClient<$Result.GetResult<Prisma.$SuspiciousUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuspiciousUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousUserFindFirstOrThrowArgs} args - Arguments to find a SuspiciousUser
     * @example
     * // Get one SuspiciousUser
     * const suspiciousUser = await prisma.suspiciousUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuspiciousUserFindFirstOrThrowArgs>(args?: SelectSubset<T, SuspiciousUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuspiciousUserClient<$Result.GetResult<Prisma.$SuspiciousUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuspiciousUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuspiciousUsers
     * const suspiciousUsers = await prisma.suspiciousUser.findMany()
     * 
     * // Get first 10 SuspiciousUsers
     * const suspiciousUsers = await prisma.suspiciousUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suspiciousUserWithIdOnly = await prisma.suspiciousUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuspiciousUserFindManyArgs>(args?: SelectSubset<T, SuspiciousUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuspiciousUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuspiciousUser.
     * @param {SuspiciousUserCreateArgs} args - Arguments to create a SuspiciousUser.
     * @example
     * // Create one SuspiciousUser
     * const SuspiciousUser = await prisma.suspiciousUser.create({
     *   data: {
     *     // ... data to create a SuspiciousUser
     *   }
     * })
     * 
     */
    create<T extends SuspiciousUserCreateArgs>(args: SelectSubset<T, SuspiciousUserCreateArgs<ExtArgs>>): Prisma__SuspiciousUserClient<$Result.GetResult<Prisma.$SuspiciousUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuspiciousUsers.
     * @param {SuspiciousUserCreateManyArgs} args - Arguments to create many SuspiciousUsers.
     * @example
     * // Create many SuspiciousUsers
     * const suspiciousUser = await prisma.suspiciousUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuspiciousUserCreateManyArgs>(args?: SelectSubset<T, SuspiciousUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuspiciousUsers and returns the data saved in the database.
     * @param {SuspiciousUserCreateManyAndReturnArgs} args - Arguments to create many SuspiciousUsers.
     * @example
     * // Create many SuspiciousUsers
     * const suspiciousUser = await prisma.suspiciousUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuspiciousUsers and only return the `id`
     * const suspiciousUserWithIdOnly = await prisma.suspiciousUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuspiciousUserCreateManyAndReturnArgs>(args?: SelectSubset<T, SuspiciousUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuspiciousUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuspiciousUser.
     * @param {SuspiciousUserDeleteArgs} args - Arguments to delete one SuspiciousUser.
     * @example
     * // Delete one SuspiciousUser
     * const SuspiciousUser = await prisma.suspiciousUser.delete({
     *   where: {
     *     // ... filter to delete one SuspiciousUser
     *   }
     * })
     * 
     */
    delete<T extends SuspiciousUserDeleteArgs>(args: SelectSubset<T, SuspiciousUserDeleteArgs<ExtArgs>>): Prisma__SuspiciousUserClient<$Result.GetResult<Prisma.$SuspiciousUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuspiciousUser.
     * @param {SuspiciousUserUpdateArgs} args - Arguments to update one SuspiciousUser.
     * @example
     * // Update one SuspiciousUser
     * const suspiciousUser = await prisma.suspiciousUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuspiciousUserUpdateArgs>(args: SelectSubset<T, SuspiciousUserUpdateArgs<ExtArgs>>): Prisma__SuspiciousUserClient<$Result.GetResult<Prisma.$SuspiciousUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuspiciousUsers.
     * @param {SuspiciousUserDeleteManyArgs} args - Arguments to filter SuspiciousUsers to delete.
     * @example
     * // Delete a few SuspiciousUsers
     * const { count } = await prisma.suspiciousUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuspiciousUserDeleteManyArgs>(args?: SelectSubset<T, SuspiciousUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuspiciousUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuspiciousUsers
     * const suspiciousUser = await prisma.suspiciousUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuspiciousUserUpdateManyArgs>(args: SelectSubset<T, SuspiciousUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuspiciousUsers and returns the data updated in the database.
     * @param {SuspiciousUserUpdateManyAndReturnArgs} args - Arguments to update many SuspiciousUsers.
     * @example
     * // Update many SuspiciousUsers
     * const suspiciousUser = await prisma.suspiciousUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuspiciousUsers and only return the `id`
     * const suspiciousUserWithIdOnly = await prisma.suspiciousUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuspiciousUserUpdateManyAndReturnArgs>(args: SelectSubset<T, SuspiciousUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuspiciousUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuspiciousUser.
     * @param {SuspiciousUserUpsertArgs} args - Arguments to update or create a SuspiciousUser.
     * @example
     * // Update or create a SuspiciousUser
     * const suspiciousUser = await prisma.suspiciousUser.upsert({
     *   create: {
     *     // ... data to create a SuspiciousUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuspiciousUser we want to update
     *   }
     * })
     */
    upsert<T extends SuspiciousUserUpsertArgs>(args: SelectSubset<T, SuspiciousUserUpsertArgs<ExtArgs>>): Prisma__SuspiciousUserClient<$Result.GetResult<Prisma.$SuspiciousUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuspiciousUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousUserCountArgs} args - Arguments to filter SuspiciousUsers to count.
     * @example
     * // Count the number of SuspiciousUsers
     * const count = await prisma.suspiciousUser.count({
     *   where: {
     *     // ... the filter for the SuspiciousUsers we want to count
     *   }
     * })
    **/
    count<T extends SuspiciousUserCountArgs>(
      args?: Subset<T, SuspiciousUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuspiciousUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuspiciousUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuspiciousUserAggregateArgs>(args: Subset<T, SuspiciousUserAggregateArgs>): Prisma.PrismaPromise<GetSuspiciousUserAggregateType<T>>

    /**
     * Group by SuspiciousUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousUserGroupByArgs} args - Group by arguments.
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
      T extends SuspiciousUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuspiciousUserGroupByArgs['orderBy'] }
        : { orderBy?: SuspiciousUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuspiciousUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuspiciousUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuspiciousUser model
   */
  readonly fields: SuspiciousUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuspiciousUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuspiciousUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SuspiciousUser model
   */
  interface SuspiciousUserFieldRefs {
    readonly id: FieldRef<"SuspiciousUser", 'String'>
    readonly userId: FieldRef<"SuspiciousUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SuspiciousUser findUnique
   */
  export type SuspiciousUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserInclude<ExtArgs> | null
    /**
     * Filter, which SuspiciousUser to fetch.
     */
    where: SuspiciousUserWhereUniqueInput
  }

  /**
   * SuspiciousUser findUniqueOrThrow
   */
  export type SuspiciousUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserInclude<ExtArgs> | null
    /**
     * Filter, which SuspiciousUser to fetch.
     */
    where: SuspiciousUserWhereUniqueInput
  }

  /**
   * SuspiciousUser findFirst
   */
  export type SuspiciousUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserInclude<ExtArgs> | null
    /**
     * Filter, which SuspiciousUser to fetch.
     */
    where?: SuspiciousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuspiciousUsers to fetch.
     */
    orderBy?: SuspiciousUserOrderByWithRelationInput | SuspiciousUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuspiciousUsers.
     */
    cursor?: SuspiciousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuspiciousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuspiciousUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuspiciousUsers.
     */
    distinct?: SuspiciousUserScalarFieldEnum | SuspiciousUserScalarFieldEnum[]
  }

  /**
   * SuspiciousUser findFirstOrThrow
   */
  export type SuspiciousUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserInclude<ExtArgs> | null
    /**
     * Filter, which SuspiciousUser to fetch.
     */
    where?: SuspiciousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuspiciousUsers to fetch.
     */
    orderBy?: SuspiciousUserOrderByWithRelationInput | SuspiciousUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuspiciousUsers.
     */
    cursor?: SuspiciousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuspiciousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuspiciousUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuspiciousUsers.
     */
    distinct?: SuspiciousUserScalarFieldEnum | SuspiciousUserScalarFieldEnum[]
  }

  /**
   * SuspiciousUser findMany
   */
  export type SuspiciousUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserInclude<ExtArgs> | null
    /**
     * Filter, which SuspiciousUsers to fetch.
     */
    where?: SuspiciousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuspiciousUsers to fetch.
     */
    orderBy?: SuspiciousUserOrderByWithRelationInput | SuspiciousUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuspiciousUsers.
     */
    cursor?: SuspiciousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuspiciousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuspiciousUsers.
     */
    skip?: number
    distinct?: SuspiciousUserScalarFieldEnum | SuspiciousUserScalarFieldEnum[]
  }

  /**
   * SuspiciousUser create
   */
  export type SuspiciousUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserInclude<ExtArgs> | null
    /**
     * The data needed to create a SuspiciousUser.
     */
    data: XOR<SuspiciousUserCreateInput, SuspiciousUserUncheckedCreateInput>
  }

  /**
   * SuspiciousUser createMany
   */
  export type SuspiciousUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuspiciousUsers.
     */
    data: SuspiciousUserCreateManyInput | SuspiciousUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuspiciousUser createManyAndReturn
   */
  export type SuspiciousUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * The data used to create many SuspiciousUsers.
     */
    data: SuspiciousUserCreateManyInput | SuspiciousUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SuspiciousUser update
   */
  export type SuspiciousUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserInclude<ExtArgs> | null
    /**
     * The data needed to update a SuspiciousUser.
     */
    data: XOR<SuspiciousUserUpdateInput, SuspiciousUserUncheckedUpdateInput>
    /**
     * Choose, which SuspiciousUser to update.
     */
    where: SuspiciousUserWhereUniqueInput
  }

  /**
   * SuspiciousUser updateMany
   */
  export type SuspiciousUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuspiciousUsers.
     */
    data: XOR<SuspiciousUserUpdateManyMutationInput, SuspiciousUserUncheckedUpdateManyInput>
    /**
     * Filter which SuspiciousUsers to update
     */
    where?: SuspiciousUserWhereInput
    /**
     * Limit how many SuspiciousUsers to update.
     */
    limit?: number
  }

  /**
   * SuspiciousUser updateManyAndReturn
   */
  export type SuspiciousUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * The data used to update SuspiciousUsers.
     */
    data: XOR<SuspiciousUserUpdateManyMutationInput, SuspiciousUserUncheckedUpdateManyInput>
    /**
     * Filter which SuspiciousUsers to update
     */
    where?: SuspiciousUserWhereInput
    /**
     * Limit how many SuspiciousUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SuspiciousUser upsert
   */
  export type SuspiciousUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserInclude<ExtArgs> | null
    /**
     * The filter to search for the SuspiciousUser to update in case it exists.
     */
    where: SuspiciousUserWhereUniqueInput
    /**
     * In case the SuspiciousUser found by the `where` argument doesn't exist, create a new SuspiciousUser with this data.
     */
    create: XOR<SuspiciousUserCreateInput, SuspiciousUserUncheckedCreateInput>
    /**
     * In case the SuspiciousUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuspiciousUserUpdateInput, SuspiciousUserUncheckedUpdateInput>
  }

  /**
   * SuspiciousUser delete
   */
  export type SuspiciousUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserInclude<ExtArgs> | null
    /**
     * Filter which SuspiciousUser to delete.
     */
    where: SuspiciousUserWhereUniqueInput
  }

  /**
   * SuspiciousUser deleteMany
   */
  export type SuspiciousUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuspiciousUsers to delete
     */
    where?: SuspiciousUserWhereInput
    /**
     * Limit how many SuspiciousUsers to delete.
     */
    limit?: number
  }

  /**
   * SuspiciousUser without action
   */
  export type SuspiciousUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousUser
     */
    select?: SuspiciousUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuspiciousUser
     */
    omit?: SuspiciousUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspiciousUserInclude<ExtArgs> | null
  }


  /**
   * Model UserOperation
   */

  export type AggregateUserOperation = {
    _count: UserOperationCountAggregateOutputType | null
    _min: UserOperationMinAggregateOutputType | null
    _max: UserOperationMaxAggregateOutputType | null
  }

  export type UserOperationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    comicName: string | null
    operation: string | null
    date: Date | null
  }

  export type UserOperationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    comicName: string | null
    operation: string | null
    date: Date | null
  }

  export type UserOperationCountAggregateOutputType = {
    id: number
    userId: number
    comicName: number
    operation: number
    date: number
    _all: number
  }


  export type UserOperationMinAggregateInputType = {
    id?: true
    userId?: true
    comicName?: true
    operation?: true
    date?: true
  }

  export type UserOperationMaxAggregateInputType = {
    id?: true
    userId?: true
    comicName?: true
    operation?: true
    date?: true
  }

  export type UserOperationCountAggregateInputType = {
    id?: true
    userId?: true
    comicName?: true
    operation?: true
    date?: true
    _all?: true
  }

  export type UserOperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOperation to aggregate.
     */
    where?: UserOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOperations to fetch.
     */
    orderBy?: UserOperationOrderByWithRelationInput | UserOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOperations
    **/
    _count?: true | UserOperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOperationMaxAggregateInputType
  }

  export type GetUserOperationAggregateType<T extends UserOperationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOperation[P]>
      : GetScalarType<T[P], AggregateUserOperation[P]>
  }




  export type UserOperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOperationWhereInput
    orderBy?: UserOperationOrderByWithAggregationInput | UserOperationOrderByWithAggregationInput[]
    by: UserOperationScalarFieldEnum[] | UserOperationScalarFieldEnum
    having?: UserOperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOperationCountAggregateInputType | true
    _min?: UserOperationMinAggregateInputType
    _max?: UserOperationMaxAggregateInputType
  }

  export type UserOperationGroupByOutputType = {
    id: string
    userId: string
    comicName: string
    operation: string
    date: Date
    _count: UserOperationCountAggregateOutputType | null
    _min: UserOperationMinAggregateOutputType | null
    _max: UserOperationMaxAggregateOutputType | null
  }

  type GetUserOperationGroupByPayload<T extends UserOperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOperationGroupByOutputType[P]>
            : GetScalarType<T[P], UserOperationGroupByOutputType[P]>
        }
      >
    >


  export type UserOperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    comicName?: boolean
    operation?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comic?: boolean | ComicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOperation"]>

  export type UserOperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    comicName?: boolean
    operation?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comic?: boolean | ComicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOperation"]>

  export type UserOperationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    comicName?: boolean
    operation?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comic?: boolean | ComicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOperation"]>

  export type UserOperationSelectScalar = {
    id?: boolean
    userId?: boolean
    comicName?: boolean
    operation?: boolean
    date?: boolean
  }

  export type UserOperationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "comicName" | "operation" | "date", ExtArgs["result"]["userOperation"]>
  export type UserOperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comic?: boolean | ComicDefaultArgs<ExtArgs>
  }
  export type UserOperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comic?: boolean | ComicDefaultArgs<ExtArgs>
  }
  export type UserOperationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comic?: boolean | ComicDefaultArgs<ExtArgs>
  }

  export type $UserOperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOperation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comic: Prisma.$ComicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      comicName: string
      operation: string
      date: Date
    }, ExtArgs["result"]["userOperation"]>
    composites: {}
  }

  type UserOperationGetPayload<S extends boolean | null | undefined | UserOperationDefaultArgs> = $Result.GetResult<Prisma.$UserOperationPayload, S>

  type UserOperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOperationCountAggregateInputType | true
    }

  export interface UserOperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOperation'], meta: { name: 'UserOperation' } }
    /**
     * Find zero or one UserOperation that matches the filter.
     * @param {UserOperationFindUniqueArgs} args - Arguments to find a UserOperation
     * @example
     * // Get one UserOperation
     * const userOperation = await prisma.userOperation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOperationFindUniqueArgs>(args: SelectSubset<T, UserOperationFindUniqueArgs<ExtArgs>>): Prisma__UserOperationClient<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOperation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOperationFindUniqueOrThrowArgs} args - Arguments to find a UserOperation
     * @example
     * // Get one UserOperation
     * const userOperation = await prisma.userOperation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOperationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOperationClient<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOperation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOperationFindFirstArgs} args - Arguments to find a UserOperation
     * @example
     * // Get one UserOperation
     * const userOperation = await prisma.userOperation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOperationFindFirstArgs>(args?: SelectSubset<T, UserOperationFindFirstArgs<ExtArgs>>): Prisma__UserOperationClient<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOperation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOperationFindFirstOrThrowArgs} args - Arguments to find a UserOperation
     * @example
     * // Get one UserOperation
     * const userOperation = await prisma.userOperation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOperationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOperationClient<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOperations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOperations
     * const userOperations = await prisma.userOperation.findMany()
     * 
     * // Get first 10 UserOperations
     * const userOperations = await prisma.userOperation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userOperationWithIdOnly = await prisma.userOperation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserOperationFindManyArgs>(args?: SelectSubset<T, UserOperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOperation.
     * @param {UserOperationCreateArgs} args - Arguments to create a UserOperation.
     * @example
     * // Create one UserOperation
     * const UserOperation = await prisma.userOperation.create({
     *   data: {
     *     // ... data to create a UserOperation
     *   }
     * })
     * 
     */
    create<T extends UserOperationCreateArgs>(args: SelectSubset<T, UserOperationCreateArgs<ExtArgs>>): Prisma__UserOperationClient<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOperations.
     * @param {UserOperationCreateManyArgs} args - Arguments to create many UserOperations.
     * @example
     * // Create many UserOperations
     * const userOperation = await prisma.userOperation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOperationCreateManyArgs>(args?: SelectSubset<T, UserOperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserOperations and returns the data saved in the database.
     * @param {UserOperationCreateManyAndReturnArgs} args - Arguments to create many UserOperations.
     * @example
     * // Create many UserOperations
     * const userOperation = await prisma.userOperation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserOperations and only return the `id`
     * const userOperationWithIdOnly = await prisma.userOperation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserOperationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserOperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserOperation.
     * @param {UserOperationDeleteArgs} args - Arguments to delete one UserOperation.
     * @example
     * // Delete one UserOperation
     * const UserOperation = await prisma.userOperation.delete({
     *   where: {
     *     // ... filter to delete one UserOperation
     *   }
     * })
     * 
     */
    delete<T extends UserOperationDeleteArgs>(args: SelectSubset<T, UserOperationDeleteArgs<ExtArgs>>): Prisma__UserOperationClient<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOperation.
     * @param {UserOperationUpdateArgs} args - Arguments to update one UserOperation.
     * @example
     * // Update one UserOperation
     * const userOperation = await prisma.userOperation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOperationUpdateArgs>(args: SelectSubset<T, UserOperationUpdateArgs<ExtArgs>>): Prisma__UserOperationClient<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOperations.
     * @param {UserOperationDeleteManyArgs} args - Arguments to filter UserOperations to delete.
     * @example
     * // Delete a few UserOperations
     * const { count } = await prisma.userOperation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOperationDeleteManyArgs>(args?: SelectSubset<T, UserOperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOperations
     * const userOperation = await prisma.userOperation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOperationUpdateManyArgs>(args: SelectSubset<T, UserOperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOperations and returns the data updated in the database.
     * @param {UserOperationUpdateManyAndReturnArgs} args - Arguments to update many UserOperations.
     * @example
     * // Update many UserOperations
     * const userOperation = await prisma.userOperation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserOperations and only return the `id`
     * const userOperationWithIdOnly = await prisma.userOperation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserOperationUpdateManyAndReturnArgs>(args: SelectSubset<T, UserOperationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserOperation.
     * @param {UserOperationUpsertArgs} args - Arguments to update or create a UserOperation.
     * @example
     * // Update or create a UserOperation
     * const userOperation = await prisma.userOperation.upsert({
     *   create: {
     *     // ... data to create a UserOperation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOperation we want to update
     *   }
     * })
     */
    upsert<T extends UserOperationUpsertArgs>(args: SelectSubset<T, UserOperationUpsertArgs<ExtArgs>>): Prisma__UserOperationClient<$Result.GetResult<Prisma.$UserOperationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOperationCountArgs} args - Arguments to filter UserOperations to count.
     * @example
     * // Count the number of UserOperations
     * const count = await prisma.userOperation.count({
     *   where: {
     *     // ... the filter for the UserOperations we want to count
     *   }
     * })
    **/
    count<T extends UserOperationCountArgs>(
      args?: Subset<T, UserOperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserOperationAggregateArgs>(args: Subset<T, UserOperationAggregateArgs>): Prisma.PrismaPromise<GetUserOperationAggregateType<T>>

    /**
     * Group by UserOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOperationGroupByArgs} args - Group by arguments.
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
      T extends UserOperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOperationGroupByArgs['orderBy'] }
        : { orderBy?: UserOperationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserOperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOperation model
   */
  readonly fields: UserOperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOperation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comic<T extends ComicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComicDefaultArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserOperation model
   */
  interface UserOperationFieldRefs {
    readonly id: FieldRef<"UserOperation", 'String'>
    readonly userId: FieldRef<"UserOperation", 'String'>
    readonly comicName: FieldRef<"UserOperation", 'String'>
    readonly operation: FieldRef<"UserOperation", 'String'>
    readonly date: FieldRef<"UserOperation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserOperation findUnique
   */
  export type UserOperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationInclude<ExtArgs> | null
    /**
     * Filter, which UserOperation to fetch.
     */
    where: UserOperationWhereUniqueInput
  }

  /**
   * UserOperation findUniqueOrThrow
   */
  export type UserOperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationInclude<ExtArgs> | null
    /**
     * Filter, which UserOperation to fetch.
     */
    where: UserOperationWhereUniqueInput
  }

  /**
   * UserOperation findFirst
   */
  export type UserOperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationInclude<ExtArgs> | null
    /**
     * Filter, which UserOperation to fetch.
     */
    where?: UserOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOperations to fetch.
     */
    orderBy?: UserOperationOrderByWithRelationInput | UserOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOperations.
     */
    cursor?: UserOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOperations.
     */
    distinct?: UserOperationScalarFieldEnum | UserOperationScalarFieldEnum[]
  }

  /**
   * UserOperation findFirstOrThrow
   */
  export type UserOperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationInclude<ExtArgs> | null
    /**
     * Filter, which UserOperation to fetch.
     */
    where?: UserOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOperations to fetch.
     */
    orderBy?: UserOperationOrderByWithRelationInput | UserOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOperations.
     */
    cursor?: UserOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOperations.
     */
    distinct?: UserOperationScalarFieldEnum | UserOperationScalarFieldEnum[]
  }

  /**
   * UserOperation findMany
   */
  export type UserOperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationInclude<ExtArgs> | null
    /**
     * Filter, which UserOperations to fetch.
     */
    where?: UserOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOperations to fetch.
     */
    orderBy?: UserOperationOrderByWithRelationInput | UserOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOperations.
     */
    cursor?: UserOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOperations.
     */
    skip?: number
    distinct?: UserOperationScalarFieldEnum | UserOperationScalarFieldEnum[]
  }

  /**
   * UserOperation create
   */
  export type UserOperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOperation.
     */
    data: XOR<UserOperationCreateInput, UserOperationUncheckedCreateInput>
  }

  /**
   * UserOperation createMany
   */
  export type UserOperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOperations.
     */
    data: UserOperationCreateManyInput | UserOperationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOperation createManyAndReturn
   */
  export type UserOperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * The data used to create many UserOperations.
     */
    data: UserOperationCreateManyInput | UserOperationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOperation update
   */
  export type UserOperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOperation.
     */
    data: XOR<UserOperationUpdateInput, UserOperationUncheckedUpdateInput>
    /**
     * Choose, which UserOperation to update.
     */
    where: UserOperationWhereUniqueInput
  }

  /**
   * UserOperation updateMany
   */
  export type UserOperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOperations.
     */
    data: XOR<UserOperationUpdateManyMutationInput, UserOperationUncheckedUpdateManyInput>
    /**
     * Filter which UserOperations to update
     */
    where?: UserOperationWhereInput
    /**
     * Limit how many UserOperations to update.
     */
    limit?: number
  }

  /**
   * UserOperation updateManyAndReturn
   */
  export type UserOperationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * The data used to update UserOperations.
     */
    data: XOR<UserOperationUpdateManyMutationInput, UserOperationUncheckedUpdateManyInput>
    /**
     * Filter which UserOperations to update
     */
    where?: UserOperationWhereInput
    /**
     * Limit how many UserOperations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOperation upsert
   */
  export type UserOperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOperation to update in case it exists.
     */
    where: UserOperationWhereUniqueInput
    /**
     * In case the UserOperation found by the `where` argument doesn't exist, create a new UserOperation with this data.
     */
    create: XOR<UserOperationCreateInput, UserOperationUncheckedCreateInput>
    /**
     * In case the UserOperation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOperationUpdateInput, UserOperationUncheckedUpdateInput>
  }

  /**
   * UserOperation delete
   */
  export type UserOperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationInclude<ExtArgs> | null
    /**
     * Filter which UserOperation to delete.
     */
    where: UserOperationWhereUniqueInput
  }

  /**
   * UserOperation deleteMany
   */
  export type UserOperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOperations to delete
     */
    where?: UserOperationWhereInput
    /**
     * Limit how many UserOperations to delete.
     */
    limit?: number
  }

  /**
   * UserOperation without action
   */
  export type UserOperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOperation
     */
    select?: UserOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOperation
     */
    omit?: UserOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOperationInclude<ExtArgs> | null
  }


  /**
   * Model UserComic
   */

  export type AggregateUserComic = {
    _count: UserComicCountAggregateOutputType | null
    _min: UserComicMinAggregateOutputType | null
    _max: UserComicMaxAggregateOutputType | null
  }

  export type UserComicMinAggregateOutputType = {
    id: string | null
    userId: string | null
    comicName: string | null
  }

  export type UserComicMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    comicName: string | null
  }

  export type UserComicCountAggregateOutputType = {
    id: number
    userId: number
    comicName: number
    _all: number
  }


  export type UserComicMinAggregateInputType = {
    id?: true
    userId?: true
    comicName?: true
  }

  export type UserComicMaxAggregateInputType = {
    id?: true
    userId?: true
    comicName?: true
  }

  export type UserComicCountAggregateInputType = {
    id?: true
    userId?: true
    comicName?: true
    _all?: true
  }

  export type UserComicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserComic to aggregate.
     */
    where?: UserComicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserComics to fetch.
     */
    orderBy?: UserComicOrderByWithRelationInput | UserComicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserComicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserComics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserComics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserComics
    **/
    _count?: true | UserComicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserComicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserComicMaxAggregateInputType
  }

  export type GetUserComicAggregateType<T extends UserComicAggregateArgs> = {
        [P in keyof T & keyof AggregateUserComic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserComic[P]>
      : GetScalarType<T[P], AggregateUserComic[P]>
  }




  export type UserComicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserComicWhereInput
    orderBy?: UserComicOrderByWithAggregationInput | UserComicOrderByWithAggregationInput[]
    by: UserComicScalarFieldEnum[] | UserComicScalarFieldEnum
    having?: UserComicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserComicCountAggregateInputType | true
    _min?: UserComicMinAggregateInputType
    _max?: UserComicMaxAggregateInputType
  }

  export type UserComicGroupByOutputType = {
    id: string
    userId: string
    comicName: string
    _count: UserComicCountAggregateOutputType | null
    _min: UserComicMinAggregateOutputType | null
    _max: UserComicMaxAggregateOutputType | null
  }

  type GetUserComicGroupByPayload<T extends UserComicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserComicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserComicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserComicGroupByOutputType[P]>
            : GetScalarType<T[P], UserComicGroupByOutputType[P]>
        }
      >
    >


  export type UserComicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    comicName?: boolean
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userComic"]>

  export type UserComicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    comicName?: boolean
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userComic"]>

  export type UserComicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    comicName?: boolean
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userComic"]>

  export type UserComicSelectScalar = {
    id?: boolean
    userId?: boolean
    comicName?: boolean
  }

  export type UserComicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "comicName", ExtArgs["result"]["userComic"]>
  export type UserComicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserComicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserComicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comic?: boolean | ComicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserComicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserComic"
    objects: {
      comic: Prisma.$ComicPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      comicName: string
    }, ExtArgs["result"]["userComic"]>
    composites: {}
  }

  type UserComicGetPayload<S extends boolean | null | undefined | UserComicDefaultArgs> = $Result.GetResult<Prisma.$UserComicPayload, S>

  type UserComicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserComicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserComicCountAggregateInputType | true
    }

  export interface UserComicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserComic'], meta: { name: 'UserComic' } }
    /**
     * Find zero or one UserComic that matches the filter.
     * @param {UserComicFindUniqueArgs} args - Arguments to find a UserComic
     * @example
     * // Get one UserComic
     * const userComic = await prisma.userComic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserComicFindUniqueArgs>(args: SelectSubset<T, UserComicFindUniqueArgs<ExtArgs>>): Prisma__UserComicClient<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserComic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserComicFindUniqueOrThrowArgs} args - Arguments to find a UserComic
     * @example
     * // Get one UserComic
     * const userComic = await prisma.userComic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserComicFindUniqueOrThrowArgs>(args: SelectSubset<T, UserComicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserComicClient<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserComic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserComicFindFirstArgs} args - Arguments to find a UserComic
     * @example
     * // Get one UserComic
     * const userComic = await prisma.userComic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserComicFindFirstArgs>(args?: SelectSubset<T, UserComicFindFirstArgs<ExtArgs>>): Prisma__UserComicClient<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserComic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserComicFindFirstOrThrowArgs} args - Arguments to find a UserComic
     * @example
     * // Get one UserComic
     * const userComic = await prisma.userComic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserComicFindFirstOrThrowArgs>(args?: SelectSubset<T, UserComicFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserComicClient<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserComics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserComicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserComics
     * const userComics = await prisma.userComic.findMany()
     * 
     * // Get first 10 UserComics
     * const userComics = await prisma.userComic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userComicWithIdOnly = await prisma.userComic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserComicFindManyArgs>(args?: SelectSubset<T, UserComicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserComic.
     * @param {UserComicCreateArgs} args - Arguments to create a UserComic.
     * @example
     * // Create one UserComic
     * const UserComic = await prisma.userComic.create({
     *   data: {
     *     // ... data to create a UserComic
     *   }
     * })
     * 
     */
    create<T extends UserComicCreateArgs>(args: SelectSubset<T, UserComicCreateArgs<ExtArgs>>): Prisma__UserComicClient<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserComics.
     * @param {UserComicCreateManyArgs} args - Arguments to create many UserComics.
     * @example
     * // Create many UserComics
     * const userComic = await prisma.userComic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserComicCreateManyArgs>(args?: SelectSubset<T, UserComicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserComics and returns the data saved in the database.
     * @param {UserComicCreateManyAndReturnArgs} args - Arguments to create many UserComics.
     * @example
     * // Create many UserComics
     * const userComic = await prisma.userComic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserComics and only return the `id`
     * const userComicWithIdOnly = await prisma.userComic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserComicCreateManyAndReturnArgs>(args?: SelectSubset<T, UserComicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserComic.
     * @param {UserComicDeleteArgs} args - Arguments to delete one UserComic.
     * @example
     * // Delete one UserComic
     * const UserComic = await prisma.userComic.delete({
     *   where: {
     *     // ... filter to delete one UserComic
     *   }
     * })
     * 
     */
    delete<T extends UserComicDeleteArgs>(args: SelectSubset<T, UserComicDeleteArgs<ExtArgs>>): Prisma__UserComicClient<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserComic.
     * @param {UserComicUpdateArgs} args - Arguments to update one UserComic.
     * @example
     * // Update one UserComic
     * const userComic = await prisma.userComic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserComicUpdateArgs>(args: SelectSubset<T, UserComicUpdateArgs<ExtArgs>>): Prisma__UserComicClient<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserComics.
     * @param {UserComicDeleteManyArgs} args - Arguments to filter UserComics to delete.
     * @example
     * // Delete a few UserComics
     * const { count } = await prisma.userComic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserComicDeleteManyArgs>(args?: SelectSubset<T, UserComicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserComics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserComicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserComics
     * const userComic = await prisma.userComic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserComicUpdateManyArgs>(args: SelectSubset<T, UserComicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserComics and returns the data updated in the database.
     * @param {UserComicUpdateManyAndReturnArgs} args - Arguments to update many UserComics.
     * @example
     * // Update many UserComics
     * const userComic = await prisma.userComic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserComics and only return the `id`
     * const userComicWithIdOnly = await prisma.userComic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserComicUpdateManyAndReturnArgs>(args: SelectSubset<T, UserComicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserComic.
     * @param {UserComicUpsertArgs} args - Arguments to update or create a UserComic.
     * @example
     * // Update or create a UserComic
     * const userComic = await prisma.userComic.upsert({
     *   create: {
     *     // ... data to create a UserComic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserComic we want to update
     *   }
     * })
     */
    upsert<T extends UserComicUpsertArgs>(args: SelectSubset<T, UserComicUpsertArgs<ExtArgs>>): Prisma__UserComicClient<$Result.GetResult<Prisma.$UserComicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserComics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserComicCountArgs} args - Arguments to filter UserComics to count.
     * @example
     * // Count the number of UserComics
     * const count = await prisma.userComic.count({
     *   where: {
     *     // ... the filter for the UserComics we want to count
     *   }
     * })
    **/
    count<T extends UserComicCountArgs>(
      args?: Subset<T, UserComicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserComicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserComic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserComicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserComicAggregateArgs>(args: Subset<T, UserComicAggregateArgs>): Prisma.PrismaPromise<GetUserComicAggregateType<T>>

    /**
     * Group by UserComic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserComicGroupByArgs} args - Group by arguments.
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
      T extends UserComicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserComicGroupByArgs['orderBy'] }
        : { orderBy?: UserComicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserComicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserComicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserComic model
   */
  readonly fields: UserComicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserComic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserComicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comic<T extends ComicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComicDefaultArgs<ExtArgs>>): Prisma__ComicClient<$Result.GetResult<Prisma.$ComicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserComic model
   */
  interface UserComicFieldRefs {
    readonly id: FieldRef<"UserComic", 'String'>
    readonly userId: FieldRef<"UserComic", 'String'>
    readonly comicName: FieldRef<"UserComic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserComic findUnique
   */
  export type UserComicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicInclude<ExtArgs> | null
    /**
     * Filter, which UserComic to fetch.
     */
    where: UserComicWhereUniqueInput
  }

  /**
   * UserComic findUniqueOrThrow
   */
  export type UserComicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicInclude<ExtArgs> | null
    /**
     * Filter, which UserComic to fetch.
     */
    where: UserComicWhereUniqueInput
  }

  /**
   * UserComic findFirst
   */
  export type UserComicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicInclude<ExtArgs> | null
    /**
     * Filter, which UserComic to fetch.
     */
    where?: UserComicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserComics to fetch.
     */
    orderBy?: UserComicOrderByWithRelationInput | UserComicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserComics.
     */
    cursor?: UserComicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserComics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserComics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserComics.
     */
    distinct?: UserComicScalarFieldEnum | UserComicScalarFieldEnum[]
  }

  /**
   * UserComic findFirstOrThrow
   */
  export type UserComicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicInclude<ExtArgs> | null
    /**
     * Filter, which UserComic to fetch.
     */
    where?: UserComicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserComics to fetch.
     */
    orderBy?: UserComicOrderByWithRelationInput | UserComicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserComics.
     */
    cursor?: UserComicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserComics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserComics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserComics.
     */
    distinct?: UserComicScalarFieldEnum | UserComicScalarFieldEnum[]
  }

  /**
   * UserComic findMany
   */
  export type UserComicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicInclude<ExtArgs> | null
    /**
     * Filter, which UserComics to fetch.
     */
    where?: UserComicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserComics to fetch.
     */
    orderBy?: UserComicOrderByWithRelationInput | UserComicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserComics.
     */
    cursor?: UserComicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserComics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserComics.
     */
    skip?: number
    distinct?: UserComicScalarFieldEnum | UserComicScalarFieldEnum[]
  }

  /**
   * UserComic create
   */
  export type UserComicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicInclude<ExtArgs> | null
    /**
     * The data needed to create a UserComic.
     */
    data: XOR<UserComicCreateInput, UserComicUncheckedCreateInput>
  }

  /**
   * UserComic createMany
   */
  export type UserComicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserComics.
     */
    data: UserComicCreateManyInput | UserComicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserComic createManyAndReturn
   */
  export type UserComicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * The data used to create many UserComics.
     */
    data: UserComicCreateManyInput | UserComicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserComic update
   */
  export type UserComicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicInclude<ExtArgs> | null
    /**
     * The data needed to update a UserComic.
     */
    data: XOR<UserComicUpdateInput, UserComicUncheckedUpdateInput>
    /**
     * Choose, which UserComic to update.
     */
    where: UserComicWhereUniqueInput
  }

  /**
   * UserComic updateMany
   */
  export type UserComicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserComics.
     */
    data: XOR<UserComicUpdateManyMutationInput, UserComicUncheckedUpdateManyInput>
    /**
     * Filter which UserComics to update
     */
    where?: UserComicWhereInput
    /**
     * Limit how many UserComics to update.
     */
    limit?: number
  }

  /**
   * UserComic updateManyAndReturn
   */
  export type UserComicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * The data used to update UserComics.
     */
    data: XOR<UserComicUpdateManyMutationInput, UserComicUncheckedUpdateManyInput>
    /**
     * Filter which UserComics to update
     */
    where?: UserComicWhereInput
    /**
     * Limit how many UserComics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserComic upsert
   */
  export type UserComicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicInclude<ExtArgs> | null
    /**
     * The filter to search for the UserComic to update in case it exists.
     */
    where: UserComicWhereUniqueInput
    /**
     * In case the UserComic found by the `where` argument doesn't exist, create a new UserComic with this data.
     */
    create: XOR<UserComicCreateInput, UserComicUncheckedCreateInput>
    /**
     * In case the UserComic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserComicUpdateInput, UserComicUncheckedUpdateInput>
  }

  /**
   * UserComic delete
   */
  export type UserComicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicInclude<ExtArgs> | null
    /**
     * Filter which UserComic to delete.
     */
    where: UserComicWhereUniqueInput
  }

  /**
   * UserComic deleteMany
   */
  export type UserComicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserComics to delete
     */
    where?: UserComicWhereInput
    /**
     * Limit how many UserComics to delete.
     */
    limit?: number
  }

  /**
   * UserComic without action
   */
  export type UserComicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserComic
     */
    select?: UserComicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserComic
     */
    omit?: UserComicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserComicInclude<ExtArgs> | null
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


  export const ComicScalarFieldEnum: {
    name: 'name',
    publisher: 'publisher',
    writer: 'writer'
  };

  export type ComicScalarFieldEnum = (typeof ComicScalarFieldEnum)[keyof typeof ComicScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SuspiciousUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type SuspiciousUserScalarFieldEnum = (typeof SuspiciousUserScalarFieldEnum)[keyof typeof SuspiciousUserScalarFieldEnum]


  export const UserOperationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    comicName: 'comicName',
    operation: 'operation',
    date: 'date'
  };

  export type UserOperationScalarFieldEnum = (typeof UserOperationScalarFieldEnum)[keyof typeof UserOperationScalarFieldEnum]


  export const UserComicScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    comicName: 'comicName'
  };

  export type UserComicScalarFieldEnum = (typeof UserComicScalarFieldEnum)[keyof typeof UserComicScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ComicWhereInput = {
    AND?: ComicWhereInput | ComicWhereInput[]
    OR?: ComicWhereInput[]
    NOT?: ComicWhereInput | ComicWhereInput[]
    name?: StringFilter<"Comic"> | string
    publisher?: StringFilter<"Comic"> | string
    writer?: StringFilter<"Comic"> | string
    UserComic?: UserComicListRelationFilter
    UserOperation?: UserOperationListRelationFilter
  }

  export type ComicOrderByWithRelationInput = {
    name?: SortOrder
    publisher?: SortOrder
    writer?: SortOrder
    UserComic?: UserComicOrderByRelationAggregateInput
    UserOperation?: UserOperationOrderByRelationAggregateInput
  }

  export type ComicWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: ComicWhereInput | ComicWhereInput[]
    OR?: ComicWhereInput[]
    NOT?: ComicWhereInput | ComicWhereInput[]
    publisher?: StringFilter<"Comic"> | string
    writer?: StringFilter<"Comic"> | string
    UserComic?: UserComicListRelationFilter
    UserOperation?: UserOperationListRelationFilter
  }, "name">

  export type ComicOrderByWithAggregationInput = {
    name?: SortOrder
    publisher?: SortOrder
    writer?: SortOrder
    _count?: ComicCountOrderByAggregateInput
    _max?: ComicMaxOrderByAggregateInput
    _min?: ComicMinOrderByAggregateInput
  }

  export type ComicScalarWhereWithAggregatesInput = {
    AND?: ComicScalarWhereWithAggregatesInput | ComicScalarWhereWithAggregatesInput[]
    OR?: ComicScalarWhereWithAggregatesInput[]
    NOT?: ComicScalarWhereWithAggregatesInput | ComicScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Comic"> | string
    publisher?: StringWithAggregatesFilter<"Comic"> | string
    writer?: StringWithAggregatesFilter<"Comic"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    UserComic?: UserComicListRelationFilter
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    UserOperation?: UserOperationListRelationFilter
    SuspiciousUser?: SuspiciousUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    UserComic?: UserComicOrderByRelationAggregateInput
    Admin?: AdminOrderByWithRelationInput
    UserOperation?: UserOperationOrderByRelationAggregateInput
    SuspiciousUser?: SuspiciousUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    UserComic?: UserComicListRelationFilter
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    UserOperation?: UserOperationListRelationFilter
    SuspiciousUser?: SuspiciousUserListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    userId?: StringFilter<"Admin"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    userId?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type SuspiciousUserWhereInput = {
    AND?: SuspiciousUserWhereInput | SuspiciousUserWhereInput[]
    OR?: SuspiciousUserWhereInput[]
    NOT?: SuspiciousUserWhereInput | SuspiciousUserWhereInput[]
    id?: StringFilter<"SuspiciousUser"> | string
    userId?: StringFilter<"SuspiciousUser"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SuspiciousUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SuspiciousUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SuspiciousUserWhereInput | SuspiciousUserWhereInput[]
    OR?: SuspiciousUserWhereInput[]
    NOT?: SuspiciousUserWhereInput | SuspiciousUserWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SuspiciousUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: SuspiciousUserCountOrderByAggregateInput
    _max?: SuspiciousUserMaxOrderByAggregateInput
    _min?: SuspiciousUserMinOrderByAggregateInput
  }

  export type SuspiciousUserScalarWhereWithAggregatesInput = {
    AND?: SuspiciousUserScalarWhereWithAggregatesInput | SuspiciousUserScalarWhereWithAggregatesInput[]
    OR?: SuspiciousUserScalarWhereWithAggregatesInput[]
    NOT?: SuspiciousUserScalarWhereWithAggregatesInput | SuspiciousUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuspiciousUser"> | string
    userId?: StringWithAggregatesFilter<"SuspiciousUser"> | string
  }

  export type UserOperationWhereInput = {
    AND?: UserOperationWhereInput | UserOperationWhereInput[]
    OR?: UserOperationWhereInput[]
    NOT?: UserOperationWhereInput | UserOperationWhereInput[]
    id?: StringFilter<"UserOperation"> | string
    userId?: StringFilter<"UserOperation"> | string
    comicName?: StringFilter<"UserOperation"> | string
    operation?: StringFilter<"UserOperation"> | string
    date?: DateTimeFilter<"UserOperation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comic?: XOR<ComicScalarRelationFilter, ComicWhereInput>
  }

  export type UserOperationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    comicName?: SortOrder
    operation?: SortOrder
    date?: SortOrder
    user?: UserOrderByWithRelationInput
    comic?: ComicOrderByWithRelationInput
  }

  export type UserOperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserOperationWhereInput | UserOperationWhereInput[]
    OR?: UserOperationWhereInput[]
    NOT?: UserOperationWhereInput | UserOperationWhereInput[]
    userId?: StringFilter<"UserOperation"> | string
    comicName?: StringFilter<"UserOperation"> | string
    operation?: StringFilter<"UserOperation"> | string
    date?: DateTimeFilter<"UserOperation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comic?: XOR<ComicScalarRelationFilter, ComicWhereInput>
  }, "id">

  export type UserOperationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    comicName?: SortOrder
    operation?: SortOrder
    date?: SortOrder
    _count?: UserOperationCountOrderByAggregateInput
    _max?: UserOperationMaxOrderByAggregateInput
    _min?: UserOperationMinOrderByAggregateInput
  }

  export type UserOperationScalarWhereWithAggregatesInput = {
    AND?: UserOperationScalarWhereWithAggregatesInput | UserOperationScalarWhereWithAggregatesInput[]
    OR?: UserOperationScalarWhereWithAggregatesInput[]
    NOT?: UserOperationScalarWhereWithAggregatesInput | UserOperationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserOperation"> | string
    userId?: StringWithAggregatesFilter<"UserOperation"> | string
    comicName?: StringWithAggregatesFilter<"UserOperation"> | string
    operation?: StringWithAggregatesFilter<"UserOperation"> | string
    date?: DateTimeWithAggregatesFilter<"UserOperation"> | Date | string
  }

  export type UserComicWhereInput = {
    AND?: UserComicWhereInput | UserComicWhereInput[]
    OR?: UserComicWhereInput[]
    NOT?: UserComicWhereInput | UserComicWhereInput[]
    id?: StringFilter<"UserComic"> | string
    userId?: StringFilter<"UserComic"> | string
    comicName?: StringFilter<"UserComic"> | string
    comic?: XOR<ComicScalarRelationFilter, ComicWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserComicOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    comicName?: SortOrder
    comic?: ComicOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserComicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserComicWhereInput | UserComicWhereInput[]
    OR?: UserComicWhereInput[]
    NOT?: UserComicWhereInput | UserComicWhereInput[]
    userId?: StringFilter<"UserComic"> | string
    comicName?: StringFilter<"UserComic"> | string
    comic?: XOR<ComicScalarRelationFilter, ComicWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserComicOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    comicName?: SortOrder
    _count?: UserComicCountOrderByAggregateInput
    _max?: UserComicMaxOrderByAggregateInput
    _min?: UserComicMinOrderByAggregateInput
  }

  export type UserComicScalarWhereWithAggregatesInput = {
    AND?: UserComicScalarWhereWithAggregatesInput | UserComicScalarWhereWithAggregatesInput[]
    OR?: UserComicScalarWhereWithAggregatesInput[]
    NOT?: UserComicScalarWhereWithAggregatesInput | UserComicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserComic"> | string
    userId?: StringWithAggregatesFilter<"UserComic"> | string
    comicName?: StringWithAggregatesFilter<"UserComic"> | string
  }

  export type ComicCreateInput = {
    name: string
    publisher: string
    writer: string
    UserComic?: UserComicCreateNestedManyWithoutComicInput
    UserOperation?: UserOperationCreateNestedManyWithoutComicInput
  }

  export type ComicUncheckedCreateInput = {
    name: string
    publisher: string
    writer: string
    UserComic?: UserComicUncheckedCreateNestedManyWithoutComicInput
    UserOperation?: UserOperationUncheckedCreateNestedManyWithoutComicInput
  }

  export type ComicUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    UserComic?: UserComicUpdateManyWithoutComicNestedInput
    UserOperation?: UserOperationUpdateManyWithoutComicNestedInput
  }

  export type ComicUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    UserComic?: UserComicUncheckedUpdateManyWithoutComicNestedInput
    UserOperation?: UserOperationUncheckedUpdateManyWithoutComicNestedInput
  }

  export type ComicCreateManyInput = {
    name: string
    publisher: string
    writer: string
  }

  export type ComicUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
  }

  export type ComicUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    password: string
    UserComic?: UserComicCreateNestedManyWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
    UserOperation?: UserOperationCreateNestedManyWithoutUserInput
    SuspiciousUser?: SuspiciousUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    password: string
    UserComic?: UserComicUncheckedCreateNestedManyWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    UserOperation?: UserOperationUncheckedCreateNestedManyWithoutUserInput
    SuspiciousUser?: SuspiciousUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    UserComic?: UserComicUpdateManyWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
    UserOperation?: UserOperationUpdateManyWithoutUserNestedInput
    SuspiciousUser?: SuspiciousUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    UserComic?: UserComicUncheckedUpdateManyWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    UserOperation?: UserOperationUncheckedUpdateManyWithoutUserNestedInput
    SuspiciousUser?: SuspiciousUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    userId: string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    userId: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SuspiciousUserCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutSuspiciousUserInput
  }

  export type SuspiciousUserUncheckedCreateInput = {
    id?: string
    userId: string
  }

  export type SuspiciousUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSuspiciousUserNestedInput
  }

  export type SuspiciousUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SuspiciousUserCreateManyInput = {
    id?: string
    userId: string
  }

  export type SuspiciousUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SuspiciousUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserOperationCreateInput = {
    id?: string
    operation: string
    date?: Date | string
    user: UserCreateNestedOneWithoutUserOperationInput
    comic: ComicCreateNestedOneWithoutUserOperationInput
  }

  export type UserOperationUncheckedCreateInput = {
    id?: string
    userId: string
    comicName: string
    operation: string
    date?: Date | string
  }

  export type UserOperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserOperationNestedInput
    comic?: ComicUpdateOneRequiredWithoutUserOperationNestedInput
  }

  export type UserOperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comicName?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOperationCreateManyInput = {
    id?: string
    userId: string
    comicName: string
    operation: string
    date?: Date | string
  }

  export type UserOperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comicName?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserComicCreateInput = {
    id?: string
    comic: ComicCreateNestedOneWithoutUserComicInput
    user: UserCreateNestedOneWithoutUserComicInput
  }

  export type UserComicUncheckedCreateInput = {
    id?: string
    userId: string
    comicName: string
  }

  export type UserComicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comic?: ComicUpdateOneRequiredWithoutUserComicNestedInput
    user?: UserUpdateOneRequiredWithoutUserComicNestedInput
  }

  export type UserComicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comicName?: StringFieldUpdateOperationsInput | string
  }

  export type UserComicCreateManyInput = {
    id?: string
    userId: string
    comicName: string
  }

  export type UserComicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserComicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comicName?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserComicListRelationFilter = {
    every?: UserComicWhereInput
    some?: UserComicWhereInput
    none?: UserComicWhereInput
  }

  export type UserOperationListRelationFilter = {
    every?: UserOperationWhereInput
    some?: UserOperationWhereInput
    none?: UserOperationWhereInput
  }

  export type UserComicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOperationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComicCountOrderByAggregateInput = {
    name?: SortOrder
    publisher?: SortOrder
    writer?: SortOrder
  }

  export type ComicMaxOrderByAggregateInput = {
    name?: SortOrder
    publisher?: SortOrder
    writer?: SortOrder
  }

  export type ComicMinOrderByAggregateInput = {
    name?: SortOrder
    publisher?: SortOrder
    writer?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type SuspiciousUserListRelationFilter = {
    every?: SuspiciousUserWhereInput
    some?: SuspiciousUserWhereInput
    none?: SuspiciousUserWhereInput
  }

  export type SuspiciousUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SuspiciousUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SuspiciousUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SuspiciousUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ComicScalarRelationFilter = {
    is?: ComicWhereInput
    isNot?: ComicWhereInput
  }

  export type UserOperationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    comicName?: SortOrder
    operation?: SortOrder
    date?: SortOrder
  }

  export type UserOperationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    comicName?: SortOrder
    operation?: SortOrder
    date?: SortOrder
  }

  export type UserOperationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    comicName?: SortOrder
    operation?: SortOrder
    date?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserComicCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    comicName?: SortOrder
  }

  export type UserComicMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    comicName?: SortOrder
  }

  export type UserComicMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    comicName?: SortOrder
  }

  export type UserComicCreateNestedManyWithoutComicInput = {
    create?: XOR<UserComicCreateWithoutComicInput, UserComicUncheckedCreateWithoutComicInput> | UserComicCreateWithoutComicInput[] | UserComicUncheckedCreateWithoutComicInput[]
    connectOrCreate?: UserComicCreateOrConnectWithoutComicInput | UserComicCreateOrConnectWithoutComicInput[]
    createMany?: UserComicCreateManyComicInputEnvelope
    connect?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
  }

  export type UserOperationCreateNestedManyWithoutComicInput = {
    create?: XOR<UserOperationCreateWithoutComicInput, UserOperationUncheckedCreateWithoutComicInput> | UserOperationCreateWithoutComicInput[] | UserOperationUncheckedCreateWithoutComicInput[]
    connectOrCreate?: UserOperationCreateOrConnectWithoutComicInput | UserOperationCreateOrConnectWithoutComicInput[]
    createMany?: UserOperationCreateManyComicInputEnvelope
    connect?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
  }

  export type UserComicUncheckedCreateNestedManyWithoutComicInput = {
    create?: XOR<UserComicCreateWithoutComicInput, UserComicUncheckedCreateWithoutComicInput> | UserComicCreateWithoutComicInput[] | UserComicUncheckedCreateWithoutComicInput[]
    connectOrCreate?: UserComicCreateOrConnectWithoutComicInput | UserComicCreateOrConnectWithoutComicInput[]
    createMany?: UserComicCreateManyComicInputEnvelope
    connect?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
  }

  export type UserOperationUncheckedCreateNestedManyWithoutComicInput = {
    create?: XOR<UserOperationCreateWithoutComicInput, UserOperationUncheckedCreateWithoutComicInput> | UserOperationCreateWithoutComicInput[] | UserOperationUncheckedCreateWithoutComicInput[]
    connectOrCreate?: UserOperationCreateOrConnectWithoutComicInput | UserOperationCreateOrConnectWithoutComicInput[]
    createMany?: UserOperationCreateManyComicInputEnvelope
    connect?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserComicUpdateManyWithoutComicNestedInput = {
    create?: XOR<UserComicCreateWithoutComicInput, UserComicUncheckedCreateWithoutComicInput> | UserComicCreateWithoutComicInput[] | UserComicUncheckedCreateWithoutComicInput[]
    connectOrCreate?: UserComicCreateOrConnectWithoutComicInput | UserComicCreateOrConnectWithoutComicInput[]
    upsert?: UserComicUpsertWithWhereUniqueWithoutComicInput | UserComicUpsertWithWhereUniqueWithoutComicInput[]
    createMany?: UserComicCreateManyComicInputEnvelope
    set?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    disconnect?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    delete?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    connect?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    update?: UserComicUpdateWithWhereUniqueWithoutComicInput | UserComicUpdateWithWhereUniqueWithoutComicInput[]
    updateMany?: UserComicUpdateManyWithWhereWithoutComicInput | UserComicUpdateManyWithWhereWithoutComicInput[]
    deleteMany?: UserComicScalarWhereInput | UserComicScalarWhereInput[]
  }

  export type UserOperationUpdateManyWithoutComicNestedInput = {
    create?: XOR<UserOperationCreateWithoutComicInput, UserOperationUncheckedCreateWithoutComicInput> | UserOperationCreateWithoutComicInput[] | UserOperationUncheckedCreateWithoutComicInput[]
    connectOrCreate?: UserOperationCreateOrConnectWithoutComicInput | UserOperationCreateOrConnectWithoutComicInput[]
    upsert?: UserOperationUpsertWithWhereUniqueWithoutComicInput | UserOperationUpsertWithWhereUniqueWithoutComicInput[]
    createMany?: UserOperationCreateManyComicInputEnvelope
    set?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    disconnect?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    delete?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    connect?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    update?: UserOperationUpdateWithWhereUniqueWithoutComicInput | UserOperationUpdateWithWhereUniqueWithoutComicInput[]
    updateMany?: UserOperationUpdateManyWithWhereWithoutComicInput | UserOperationUpdateManyWithWhereWithoutComicInput[]
    deleteMany?: UserOperationScalarWhereInput | UserOperationScalarWhereInput[]
  }

  export type UserComicUncheckedUpdateManyWithoutComicNestedInput = {
    create?: XOR<UserComicCreateWithoutComicInput, UserComicUncheckedCreateWithoutComicInput> | UserComicCreateWithoutComicInput[] | UserComicUncheckedCreateWithoutComicInput[]
    connectOrCreate?: UserComicCreateOrConnectWithoutComicInput | UserComicCreateOrConnectWithoutComicInput[]
    upsert?: UserComicUpsertWithWhereUniqueWithoutComicInput | UserComicUpsertWithWhereUniqueWithoutComicInput[]
    createMany?: UserComicCreateManyComicInputEnvelope
    set?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    disconnect?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    delete?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    connect?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    update?: UserComicUpdateWithWhereUniqueWithoutComicInput | UserComicUpdateWithWhereUniqueWithoutComicInput[]
    updateMany?: UserComicUpdateManyWithWhereWithoutComicInput | UserComicUpdateManyWithWhereWithoutComicInput[]
    deleteMany?: UserComicScalarWhereInput | UserComicScalarWhereInput[]
  }

  export type UserOperationUncheckedUpdateManyWithoutComicNestedInput = {
    create?: XOR<UserOperationCreateWithoutComicInput, UserOperationUncheckedCreateWithoutComicInput> | UserOperationCreateWithoutComicInput[] | UserOperationUncheckedCreateWithoutComicInput[]
    connectOrCreate?: UserOperationCreateOrConnectWithoutComicInput | UserOperationCreateOrConnectWithoutComicInput[]
    upsert?: UserOperationUpsertWithWhereUniqueWithoutComicInput | UserOperationUpsertWithWhereUniqueWithoutComicInput[]
    createMany?: UserOperationCreateManyComicInputEnvelope
    set?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    disconnect?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    delete?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    connect?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    update?: UserOperationUpdateWithWhereUniqueWithoutComicInput | UserOperationUpdateWithWhereUniqueWithoutComicInput[]
    updateMany?: UserOperationUpdateManyWithWhereWithoutComicInput | UserOperationUpdateManyWithWhereWithoutComicInput[]
    deleteMany?: UserOperationScalarWhereInput | UserOperationScalarWhereInput[]
  }

  export type UserComicCreateNestedManyWithoutUserInput = {
    create?: XOR<UserComicCreateWithoutUserInput, UserComicUncheckedCreateWithoutUserInput> | UserComicCreateWithoutUserInput[] | UserComicUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserComicCreateOrConnectWithoutUserInput | UserComicCreateOrConnectWithoutUserInput[]
    createMany?: UserComicCreateManyUserInputEnvelope
    connect?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type UserOperationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOperationCreateWithoutUserInput, UserOperationUncheckedCreateWithoutUserInput> | UserOperationCreateWithoutUserInput[] | UserOperationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOperationCreateOrConnectWithoutUserInput | UserOperationCreateOrConnectWithoutUserInput[]
    createMany?: UserOperationCreateManyUserInputEnvelope
    connect?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
  }

  export type SuspiciousUserCreateNestedManyWithoutUserInput = {
    create?: XOR<SuspiciousUserCreateWithoutUserInput, SuspiciousUserUncheckedCreateWithoutUserInput> | SuspiciousUserCreateWithoutUserInput[] | SuspiciousUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuspiciousUserCreateOrConnectWithoutUserInput | SuspiciousUserCreateOrConnectWithoutUserInput[]
    createMany?: SuspiciousUserCreateManyUserInputEnvelope
    connect?: SuspiciousUserWhereUniqueInput | SuspiciousUserWhereUniqueInput[]
  }

  export type UserComicUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserComicCreateWithoutUserInput, UserComicUncheckedCreateWithoutUserInput> | UserComicCreateWithoutUserInput[] | UserComicUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserComicCreateOrConnectWithoutUserInput | UserComicCreateOrConnectWithoutUserInput[]
    createMany?: UserComicCreateManyUserInputEnvelope
    connect?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type UserOperationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOperationCreateWithoutUserInput, UserOperationUncheckedCreateWithoutUserInput> | UserOperationCreateWithoutUserInput[] | UserOperationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOperationCreateOrConnectWithoutUserInput | UserOperationCreateOrConnectWithoutUserInput[]
    createMany?: UserOperationCreateManyUserInputEnvelope
    connect?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
  }

  export type SuspiciousUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SuspiciousUserCreateWithoutUserInput, SuspiciousUserUncheckedCreateWithoutUserInput> | SuspiciousUserCreateWithoutUserInput[] | SuspiciousUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuspiciousUserCreateOrConnectWithoutUserInput | SuspiciousUserCreateOrConnectWithoutUserInput[]
    createMany?: SuspiciousUserCreateManyUserInputEnvelope
    connect?: SuspiciousUserWhereUniqueInput | SuspiciousUserWhereUniqueInput[]
  }

  export type UserComicUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserComicCreateWithoutUserInput, UserComicUncheckedCreateWithoutUserInput> | UserComicCreateWithoutUserInput[] | UserComicUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserComicCreateOrConnectWithoutUserInput | UserComicCreateOrConnectWithoutUserInput[]
    upsert?: UserComicUpsertWithWhereUniqueWithoutUserInput | UserComicUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserComicCreateManyUserInputEnvelope
    set?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    disconnect?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    delete?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    connect?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    update?: UserComicUpdateWithWhereUniqueWithoutUserInput | UserComicUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserComicUpdateManyWithWhereWithoutUserInput | UserComicUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserComicScalarWhereInput | UserComicScalarWhereInput[]
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type UserOperationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOperationCreateWithoutUserInput, UserOperationUncheckedCreateWithoutUserInput> | UserOperationCreateWithoutUserInput[] | UserOperationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOperationCreateOrConnectWithoutUserInput | UserOperationCreateOrConnectWithoutUserInput[]
    upsert?: UserOperationUpsertWithWhereUniqueWithoutUserInput | UserOperationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOperationCreateManyUserInputEnvelope
    set?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    disconnect?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    delete?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    connect?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    update?: UserOperationUpdateWithWhereUniqueWithoutUserInput | UserOperationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOperationUpdateManyWithWhereWithoutUserInput | UserOperationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOperationScalarWhereInput | UserOperationScalarWhereInput[]
  }

  export type SuspiciousUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<SuspiciousUserCreateWithoutUserInput, SuspiciousUserUncheckedCreateWithoutUserInput> | SuspiciousUserCreateWithoutUserInput[] | SuspiciousUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuspiciousUserCreateOrConnectWithoutUserInput | SuspiciousUserCreateOrConnectWithoutUserInput[]
    upsert?: SuspiciousUserUpsertWithWhereUniqueWithoutUserInput | SuspiciousUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SuspiciousUserCreateManyUserInputEnvelope
    set?: SuspiciousUserWhereUniqueInput | SuspiciousUserWhereUniqueInput[]
    disconnect?: SuspiciousUserWhereUniqueInput | SuspiciousUserWhereUniqueInput[]
    delete?: SuspiciousUserWhereUniqueInput | SuspiciousUserWhereUniqueInput[]
    connect?: SuspiciousUserWhereUniqueInput | SuspiciousUserWhereUniqueInput[]
    update?: SuspiciousUserUpdateWithWhereUniqueWithoutUserInput | SuspiciousUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SuspiciousUserUpdateManyWithWhereWithoutUserInput | SuspiciousUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SuspiciousUserScalarWhereInput | SuspiciousUserScalarWhereInput[]
  }

  export type UserComicUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserComicCreateWithoutUserInput, UserComicUncheckedCreateWithoutUserInput> | UserComicCreateWithoutUserInput[] | UserComicUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserComicCreateOrConnectWithoutUserInput | UserComicCreateOrConnectWithoutUserInput[]
    upsert?: UserComicUpsertWithWhereUniqueWithoutUserInput | UserComicUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserComicCreateManyUserInputEnvelope
    set?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    disconnect?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    delete?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    connect?: UserComicWhereUniqueInput | UserComicWhereUniqueInput[]
    update?: UserComicUpdateWithWhereUniqueWithoutUserInput | UserComicUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserComicUpdateManyWithWhereWithoutUserInput | UserComicUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserComicScalarWhereInput | UserComicScalarWhereInput[]
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type UserOperationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOperationCreateWithoutUserInput, UserOperationUncheckedCreateWithoutUserInput> | UserOperationCreateWithoutUserInput[] | UserOperationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOperationCreateOrConnectWithoutUserInput | UserOperationCreateOrConnectWithoutUserInput[]
    upsert?: UserOperationUpsertWithWhereUniqueWithoutUserInput | UserOperationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOperationCreateManyUserInputEnvelope
    set?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    disconnect?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    delete?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    connect?: UserOperationWhereUniqueInput | UserOperationWhereUniqueInput[]
    update?: UserOperationUpdateWithWhereUniqueWithoutUserInput | UserOperationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOperationUpdateManyWithWhereWithoutUserInput | UserOperationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOperationScalarWhereInput | UserOperationScalarWhereInput[]
  }

  export type SuspiciousUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SuspiciousUserCreateWithoutUserInput, SuspiciousUserUncheckedCreateWithoutUserInput> | SuspiciousUserCreateWithoutUserInput[] | SuspiciousUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuspiciousUserCreateOrConnectWithoutUserInput | SuspiciousUserCreateOrConnectWithoutUserInput[]
    upsert?: SuspiciousUserUpsertWithWhereUniqueWithoutUserInput | SuspiciousUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SuspiciousUserCreateManyUserInputEnvelope
    set?: SuspiciousUserWhereUniqueInput | SuspiciousUserWhereUniqueInput[]
    disconnect?: SuspiciousUserWhereUniqueInput | SuspiciousUserWhereUniqueInput[]
    delete?: SuspiciousUserWhereUniqueInput | SuspiciousUserWhereUniqueInput[]
    connect?: SuspiciousUserWhereUniqueInput | SuspiciousUserWhereUniqueInput[]
    update?: SuspiciousUserUpdateWithWhereUniqueWithoutUserInput | SuspiciousUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SuspiciousUserUpdateManyWithWhereWithoutUserInput | SuspiciousUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SuspiciousUserScalarWhereInput | SuspiciousUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserCreateNestedOneWithoutSuspiciousUserInput = {
    create?: XOR<UserCreateWithoutSuspiciousUserInput, UserUncheckedCreateWithoutSuspiciousUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuspiciousUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSuspiciousUserNestedInput = {
    create?: XOR<UserCreateWithoutSuspiciousUserInput, UserUncheckedCreateWithoutSuspiciousUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuspiciousUserInput
    upsert?: UserUpsertWithoutSuspiciousUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSuspiciousUserInput, UserUpdateWithoutSuspiciousUserInput>, UserUncheckedUpdateWithoutSuspiciousUserInput>
  }

  export type UserCreateNestedOneWithoutUserOperationInput = {
    create?: XOR<UserCreateWithoutUserOperationInput, UserUncheckedCreateWithoutUserOperationInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserOperationInput
    connect?: UserWhereUniqueInput
  }

  export type ComicCreateNestedOneWithoutUserOperationInput = {
    create?: XOR<ComicCreateWithoutUserOperationInput, ComicUncheckedCreateWithoutUserOperationInput>
    connectOrCreate?: ComicCreateOrConnectWithoutUserOperationInput
    connect?: ComicWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutUserOperationNestedInput = {
    create?: XOR<UserCreateWithoutUserOperationInput, UserUncheckedCreateWithoutUserOperationInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserOperationInput
    upsert?: UserUpsertWithoutUserOperationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserOperationInput, UserUpdateWithoutUserOperationInput>, UserUncheckedUpdateWithoutUserOperationInput>
  }

  export type ComicUpdateOneRequiredWithoutUserOperationNestedInput = {
    create?: XOR<ComicCreateWithoutUserOperationInput, ComicUncheckedCreateWithoutUserOperationInput>
    connectOrCreate?: ComicCreateOrConnectWithoutUserOperationInput
    upsert?: ComicUpsertWithoutUserOperationInput
    connect?: ComicWhereUniqueInput
    update?: XOR<XOR<ComicUpdateToOneWithWhereWithoutUserOperationInput, ComicUpdateWithoutUserOperationInput>, ComicUncheckedUpdateWithoutUserOperationInput>
  }

  export type ComicCreateNestedOneWithoutUserComicInput = {
    create?: XOR<ComicCreateWithoutUserComicInput, ComicUncheckedCreateWithoutUserComicInput>
    connectOrCreate?: ComicCreateOrConnectWithoutUserComicInput
    connect?: ComicWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserComicInput = {
    create?: XOR<UserCreateWithoutUserComicInput, UserUncheckedCreateWithoutUserComicInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserComicInput
    connect?: UserWhereUniqueInput
  }

  export type ComicUpdateOneRequiredWithoutUserComicNestedInput = {
    create?: XOR<ComicCreateWithoutUserComicInput, ComicUncheckedCreateWithoutUserComicInput>
    connectOrCreate?: ComicCreateOrConnectWithoutUserComicInput
    upsert?: ComicUpsertWithoutUserComicInput
    connect?: ComicWhereUniqueInput
    update?: XOR<XOR<ComicUpdateToOneWithWhereWithoutUserComicInput, ComicUpdateWithoutUserComicInput>, ComicUncheckedUpdateWithoutUserComicInput>
  }

  export type UserUpdateOneRequiredWithoutUserComicNestedInput = {
    create?: XOR<UserCreateWithoutUserComicInput, UserUncheckedCreateWithoutUserComicInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserComicInput
    upsert?: UserUpsertWithoutUserComicInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserComicInput, UserUpdateWithoutUserComicInput>, UserUncheckedUpdateWithoutUserComicInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserComicCreateWithoutComicInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserComicInput
  }

  export type UserComicUncheckedCreateWithoutComicInput = {
    id?: string
    userId: string
  }

  export type UserComicCreateOrConnectWithoutComicInput = {
    where: UserComicWhereUniqueInput
    create: XOR<UserComicCreateWithoutComicInput, UserComicUncheckedCreateWithoutComicInput>
  }

  export type UserComicCreateManyComicInputEnvelope = {
    data: UserComicCreateManyComicInput | UserComicCreateManyComicInput[]
    skipDuplicates?: boolean
  }

  export type UserOperationCreateWithoutComicInput = {
    id?: string
    operation: string
    date?: Date | string
    user: UserCreateNestedOneWithoutUserOperationInput
  }

  export type UserOperationUncheckedCreateWithoutComicInput = {
    id?: string
    userId: string
    operation: string
    date?: Date | string
  }

  export type UserOperationCreateOrConnectWithoutComicInput = {
    where: UserOperationWhereUniqueInput
    create: XOR<UserOperationCreateWithoutComicInput, UserOperationUncheckedCreateWithoutComicInput>
  }

  export type UserOperationCreateManyComicInputEnvelope = {
    data: UserOperationCreateManyComicInput | UserOperationCreateManyComicInput[]
    skipDuplicates?: boolean
  }

  export type UserComicUpsertWithWhereUniqueWithoutComicInput = {
    where: UserComicWhereUniqueInput
    update: XOR<UserComicUpdateWithoutComicInput, UserComicUncheckedUpdateWithoutComicInput>
    create: XOR<UserComicCreateWithoutComicInput, UserComicUncheckedCreateWithoutComicInput>
  }

  export type UserComicUpdateWithWhereUniqueWithoutComicInput = {
    where: UserComicWhereUniqueInput
    data: XOR<UserComicUpdateWithoutComicInput, UserComicUncheckedUpdateWithoutComicInput>
  }

  export type UserComicUpdateManyWithWhereWithoutComicInput = {
    where: UserComicScalarWhereInput
    data: XOR<UserComicUpdateManyMutationInput, UserComicUncheckedUpdateManyWithoutComicInput>
  }

  export type UserComicScalarWhereInput = {
    AND?: UserComicScalarWhereInput | UserComicScalarWhereInput[]
    OR?: UserComicScalarWhereInput[]
    NOT?: UserComicScalarWhereInput | UserComicScalarWhereInput[]
    id?: StringFilter<"UserComic"> | string
    userId?: StringFilter<"UserComic"> | string
    comicName?: StringFilter<"UserComic"> | string
  }

  export type UserOperationUpsertWithWhereUniqueWithoutComicInput = {
    where: UserOperationWhereUniqueInput
    update: XOR<UserOperationUpdateWithoutComicInput, UserOperationUncheckedUpdateWithoutComicInput>
    create: XOR<UserOperationCreateWithoutComicInput, UserOperationUncheckedCreateWithoutComicInput>
  }

  export type UserOperationUpdateWithWhereUniqueWithoutComicInput = {
    where: UserOperationWhereUniqueInput
    data: XOR<UserOperationUpdateWithoutComicInput, UserOperationUncheckedUpdateWithoutComicInput>
  }

  export type UserOperationUpdateManyWithWhereWithoutComicInput = {
    where: UserOperationScalarWhereInput
    data: XOR<UserOperationUpdateManyMutationInput, UserOperationUncheckedUpdateManyWithoutComicInput>
  }

  export type UserOperationScalarWhereInput = {
    AND?: UserOperationScalarWhereInput | UserOperationScalarWhereInput[]
    OR?: UserOperationScalarWhereInput[]
    NOT?: UserOperationScalarWhereInput | UserOperationScalarWhereInput[]
    id?: StringFilter<"UserOperation"> | string
    userId?: StringFilter<"UserOperation"> | string
    comicName?: StringFilter<"UserOperation"> | string
    operation?: StringFilter<"UserOperation"> | string
    date?: DateTimeFilter<"UserOperation"> | Date | string
  }

  export type UserComicCreateWithoutUserInput = {
    id?: string
    comic: ComicCreateNestedOneWithoutUserComicInput
  }

  export type UserComicUncheckedCreateWithoutUserInput = {
    id?: string
    comicName: string
  }

  export type UserComicCreateOrConnectWithoutUserInput = {
    where: UserComicWhereUniqueInput
    create: XOR<UserComicCreateWithoutUserInput, UserComicUncheckedCreateWithoutUserInput>
  }

  export type UserComicCreateManyUserInputEnvelope = {
    data: UserComicCreateManyUserInput | UserComicCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type UserOperationCreateWithoutUserInput = {
    id?: string
    operation: string
    date?: Date | string
    comic: ComicCreateNestedOneWithoutUserOperationInput
  }

  export type UserOperationUncheckedCreateWithoutUserInput = {
    id?: string
    comicName: string
    operation: string
    date?: Date | string
  }

  export type UserOperationCreateOrConnectWithoutUserInput = {
    where: UserOperationWhereUniqueInput
    create: XOR<UserOperationCreateWithoutUserInput, UserOperationUncheckedCreateWithoutUserInput>
  }

  export type UserOperationCreateManyUserInputEnvelope = {
    data: UserOperationCreateManyUserInput | UserOperationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SuspiciousUserCreateWithoutUserInput = {
    id?: string
  }

  export type SuspiciousUserUncheckedCreateWithoutUserInput = {
    id?: string
  }

  export type SuspiciousUserCreateOrConnectWithoutUserInput = {
    where: SuspiciousUserWhereUniqueInput
    create: XOR<SuspiciousUserCreateWithoutUserInput, SuspiciousUserUncheckedCreateWithoutUserInput>
  }

  export type SuspiciousUserCreateManyUserInputEnvelope = {
    data: SuspiciousUserCreateManyUserInput | SuspiciousUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserComicUpsertWithWhereUniqueWithoutUserInput = {
    where: UserComicWhereUniqueInput
    update: XOR<UserComicUpdateWithoutUserInput, UserComicUncheckedUpdateWithoutUserInput>
    create: XOR<UserComicCreateWithoutUserInput, UserComicUncheckedCreateWithoutUserInput>
  }

  export type UserComicUpdateWithWhereUniqueWithoutUserInput = {
    where: UserComicWhereUniqueInput
    data: XOR<UserComicUpdateWithoutUserInput, UserComicUncheckedUpdateWithoutUserInput>
  }

  export type UserComicUpdateManyWithWhereWithoutUserInput = {
    where: UserComicScalarWhereInput
    data: XOR<UserComicUpdateManyMutationInput, UserComicUncheckedUpdateManyWithoutUserInput>
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserOperationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOperationWhereUniqueInput
    update: XOR<UserOperationUpdateWithoutUserInput, UserOperationUncheckedUpdateWithoutUserInput>
    create: XOR<UserOperationCreateWithoutUserInput, UserOperationUncheckedCreateWithoutUserInput>
  }

  export type UserOperationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOperationWhereUniqueInput
    data: XOR<UserOperationUpdateWithoutUserInput, UserOperationUncheckedUpdateWithoutUserInput>
  }

  export type UserOperationUpdateManyWithWhereWithoutUserInput = {
    where: UserOperationScalarWhereInput
    data: XOR<UserOperationUpdateManyMutationInput, UserOperationUncheckedUpdateManyWithoutUserInput>
  }

  export type SuspiciousUserUpsertWithWhereUniqueWithoutUserInput = {
    where: SuspiciousUserWhereUniqueInput
    update: XOR<SuspiciousUserUpdateWithoutUserInput, SuspiciousUserUncheckedUpdateWithoutUserInput>
    create: XOR<SuspiciousUserCreateWithoutUserInput, SuspiciousUserUncheckedCreateWithoutUserInput>
  }

  export type SuspiciousUserUpdateWithWhereUniqueWithoutUserInput = {
    where: SuspiciousUserWhereUniqueInput
    data: XOR<SuspiciousUserUpdateWithoutUserInput, SuspiciousUserUncheckedUpdateWithoutUserInput>
  }

  export type SuspiciousUserUpdateManyWithWhereWithoutUserInput = {
    where: SuspiciousUserScalarWhereInput
    data: XOR<SuspiciousUserUpdateManyMutationInput, SuspiciousUserUncheckedUpdateManyWithoutUserInput>
  }

  export type SuspiciousUserScalarWhereInput = {
    AND?: SuspiciousUserScalarWhereInput | SuspiciousUserScalarWhereInput[]
    OR?: SuspiciousUserScalarWhereInput[]
    NOT?: SuspiciousUserScalarWhereInput | SuspiciousUserScalarWhereInput[]
    id?: StringFilter<"SuspiciousUser"> | string
    userId?: StringFilter<"SuspiciousUser"> | string
  }

  export type UserCreateWithoutAdminInput = {
    id: string
    name: string
    email: string
    password: string
    UserComic?: UserComicCreateNestedManyWithoutUserInput
    UserOperation?: UserOperationCreateNestedManyWithoutUserInput
    SuspiciousUser?: SuspiciousUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id: string
    name: string
    email: string
    password: string
    UserComic?: UserComicUncheckedCreateNestedManyWithoutUserInput
    UserOperation?: UserOperationUncheckedCreateNestedManyWithoutUserInput
    SuspiciousUser?: SuspiciousUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    UserComic?: UserComicUpdateManyWithoutUserNestedInput
    UserOperation?: UserOperationUpdateManyWithoutUserNestedInput
    SuspiciousUser?: SuspiciousUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    UserComic?: UserComicUncheckedUpdateManyWithoutUserNestedInput
    UserOperation?: UserOperationUncheckedUpdateManyWithoutUserNestedInput
    SuspiciousUser?: SuspiciousUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSuspiciousUserInput = {
    id: string
    name: string
    email: string
    password: string
    UserComic?: UserComicCreateNestedManyWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
    UserOperation?: UserOperationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSuspiciousUserInput = {
    id: string
    name: string
    email: string
    password: string
    UserComic?: UserComicUncheckedCreateNestedManyWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    UserOperation?: UserOperationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSuspiciousUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSuspiciousUserInput, UserUncheckedCreateWithoutSuspiciousUserInput>
  }

  export type UserUpsertWithoutSuspiciousUserInput = {
    update: XOR<UserUpdateWithoutSuspiciousUserInput, UserUncheckedUpdateWithoutSuspiciousUserInput>
    create: XOR<UserCreateWithoutSuspiciousUserInput, UserUncheckedCreateWithoutSuspiciousUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSuspiciousUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSuspiciousUserInput, UserUncheckedUpdateWithoutSuspiciousUserInput>
  }

  export type UserUpdateWithoutSuspiciousUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    UserComic?: UserComicUpdateManyWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
    UserOperation?: UserOperationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSuspiciousUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    UserComic?: UserComicUncheckedUpdateManyWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    UserOperation?: UserOperationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserOperationInput = {
    id: string
    name: string
    email: string
    password: string
    UserComic?: UserComicCreateNestedManyWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
    SuspiciousUser?: SuspiciousUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserOperationInput = {
    id: string
    name: string
    email: string
    password: string
    UserComic?: UserComicUncheckedCreateNestedManyWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    SuspiciousUser?: SuspiciousUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserOperationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserOperationInput, UserUncheckedCreateWithoutUserOperationInput>
  }

  export type ComicCreateWithoutUserOperationInput = {
    name: string
    publisher: string
    writer: string
    UserComic?: UserComicCreateNestedManyWithoutComicInput
  }

  export type ComicUncheckedCreateWithoutUserOperationInput = {
    name: string
    publisher: string
    writer: string
    UserComic?: UserComicUncheckedCreateNestedManyWithoutComicInput
  }

  export type ComicCreateOrConnectWithoutUserOperationInput = {
    where: ComicWhereUniqueInput
    create: XOR<ComicCreateWithoutUserOperationInput, ComicUncheckedCreateWithoutUserOperationInput>
  }

  export type UserUpsertWithoutUserOperationInput = {
    update: XOR<UserUpdateWithoutUserOperationInput, UserUncheckedUpdateWithoutUserOperationInput>
    create: XOR<UserCreateWithoutUserOperationInput, UserUncheckedCreateWithoutUserOperationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserOperationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserOperationInput, UserUncheckedUpdateWithoutUserOperationInput>
  }

  export type UserUpdateWithoutUserOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    UserComic?: UserComicUpdateManyWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
    SuspiciousUser?: SuspiciousUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    UserComic?: UserComicUncheckedUpdateManyWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    SuspiciousUser?: SuspiciousUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ComicUpsertWithoutUserOperationInput = {
    update: XOR<ComicUpdateWithoutUserOperationInput, ComicUncheckedUpdateWithoutUserOperationInput>
    create: XOR<ComicCreateWithoutUserOperationInput, ComicUncheckedCreateWithoutUserOperationInput>
    where?: ComicWhereInput
  }

  export type ComicUpdateToOneWithWhereWithoutUserOperationInput = {
    where?: ComicWhereInput
    data: XOR<ComicUpdateWithoutUserOperationInput, ComicUncheckedUpdateWithoutUserOperationInput>
  }

  export type ComicUpdateWithoutUserOperationInput = {
    name?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    UserComic?: UserComicUpdateManyWithoutComicNestedInput
  }

  export type ComicUncheckedUpdateWithoutUserOperationInput = {
    name?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    UserComic?: UserComicUncheckedUpdateManyWithoutComicNestedInput
  }

  export type ComicCreateWithoutUserComicInput = {
    name: string
    publisher: string
    writer: string
    UserOperation?: UserOperationCreateNestedManyWithoutComicInput
  }

  export type ComicUncheckedCreateWithoutUserComicInput = {
    name: string
    publisher: string
    writer: string
    UserOperation?: UserOperationUncheckedCreateNestedManyWithoutComicInput
  }

  export type ComicCreateOrConnectWithoutUserComicInput = {
    where: ComicWhereUniqueInput
    create: XOR<ComicCreateWithoutUserComicInput, ComicUncheckedCreateWithoutUserComicInput>
  }

  export type UserCreateWithoutUserComicInput = {
    id: string
    name: string
    email: string
    password: string
    Admin?: AdminCreateNestedOneWithoutUserInput
    UserOperation?: UserOperationCreateNestedManyWithoutUserInput
    SuspiciousUser?: SuspiciousUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserComicInput = {
    id: string
    name: string
    email: string
    password: string
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    UserOperation?: UserOperationUncheckedCreateNestedManyWithoutUserInput
    SuspiciousUser?: SuspiciousUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserComicInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserComicInput, UserUncheckedCreateWithoutUserComicInput>
  }

  export type ComicUpsertWithoutUserComicInput = {
    update: XOR<ComicUpdateWithoutUserComicInput, ComicUncheckedUpdateWithoutUserComicInput>
    create: XOR<ComicCreateWithoutUserComicInput, ComicUncheckedCreateWithoutUserComicInput>
    where?: ComicWhereInput
  }

  export type ComicUpdateToOneWithWhereWithoutUserComicInput = {
    where?: ComicWhereInput
    data: XOR<ComicUpdateWithoutUserComicInput, ComicUncheckedUpdateWithoutUserComicInput>
  }

  export type ComicUpdateWithoutUserComicInput = {
    name?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    UserOperation?: UserOperationUpdateManyWithoutComicNestedInput
  }

  export type ComicUncheckedUpdateWithoutUserComicInput = {
    name?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    UserOperation?: UserOperationUncheckedUpdateManyWithoutComicNestedInput
  }

  export type UserUpsertWithoutUserComicInput = {
    update: XOR<UserUpdateWithoutUserComicInput, UserUncheckedUpdateWithoutUserComicInput>
    create: XOR<UserCreateWithoutUserComicInput, UserUncheckedCreateWithoutUserComicInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserComicInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserComicInput, UserUncheckedUpdateWithoutUserComicInput>
  }

  export type UserUpdateWithoutUserComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Admin?: AdminUpdateOneWithoutUserNestedInput
    UserOperation?: UserOperationUpdateManyWithoutUserNestedInput
    SuspiciousUser?: SuspiciousUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    UserOperation?: UserOperationUncheckedUpdateManyWithoutUserNestedInput
    SuspiciousUser?: SuspiciousUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserComicCreateManyComicInput = {
    id?: string
    userId: string
  }

  export type UserOperationCreateManyComicInput = {
    id?: string
    userId: string
    operation: string
    date?: Date | string
  }

  export type UserComicUpdateWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserComicNestedInput
  }

  export type UserComicUncheckedUpdateWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserComicUncheckedUpdateManyWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserOperationUpdateWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserOperationNestedInput
  }

  export type UserOperationUncheckedUpdateWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOperationUncheckedUpdateManyWithoutComicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserComicCreateManyUserInput = {
    id?: string
    comicName: string
  }

  export type UserOperationCreateManyUserInput = {
    id?: string
    comicName: string
    operation: string
    date?: Date | string
  }

  export type SuspiciousUserCreateManyUserInput = {
    id?: string
  }

  export type UserComicUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comic?: ComicUpdateOneRequiredWithoutUserComicNestedInput
  }

  export type UserComicUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicName?: StringFieldUpdateOperationsInput | string
  }

  export type UserComicUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicName?: StringFieldUpdateOperationsInput | string
  }

  export type UserOperationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comic?: ComicUpdateOneRequiredWithoutUserOperationNestedInput
  }

  export type UserOperationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicName?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOperationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comicName?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuspiciousUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SuspiciousUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SuspiciousUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
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