
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model seller
 * 
 */
export type seller = $Result.DefaultSelection<Prisma.$sellerPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model store
 * 
 */
export type store = $Result.DefaultSelection<Prisma.$storePayload>
/**
 * Model cart
 * 
 */
export type cart = $Result.DefaultSelection<Prisma.$cartPayload>
/**
 * Model favorite
 * 
 */
export type favorite = $Result.DefaultSelection<Prisma.$favoritePayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>
/**
 * Model follow
 * 
 */
export type follow = $Result.DefaultSelection<Prisma.$followPayload>
/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model order_item
 * 
 */
export type order_item = $Result.DefaultSelection<Prisma.$order_itemPayload>
/**
 * Model Advertisement
 * 
 */
export type Advertisement = $Result.DefaultSelection<Prisma.$AdvertisementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seller`: Exposes CRUD operations for the **seller** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sellers
    * const sellers = await prisma.seller.findMany()
    * ```
    */
  get seller(): Prisma.sellerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.storeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.cartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.favoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.followDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_item`: Exposes CRUD operations for the **order_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_item.findMany()
    * ```
    */
  get order_item(): Prisma.order_itemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.advertisement`: Exposes CRUD operations for the **Advertisement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Advertisements
    * const advertisements = await prisma.advertisement.findMany()
    * ```
    */
  get advertisement(): Prisma.AdvertisementDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    user: 'user',
    seller: 'seller',
    product: 'product',
    store: 'store',
    cart: 'cart',
    favorite: 'favorite',
    review: 'review',
    follow: 'follow',
    order: 'order',
    order_item: 'order_item',
    Advertisement: 'Advertisement'
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
      modelProps: "user" | "seller" | "product" | "store" | "cart" | "favorite" | "review" | "follow" | "order" | "order_item" | "advertisement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      seller: {
        payload: Prisma.$sellerPayload<ExtArgs>
        fields: Prisma.sellerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sellerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sellerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellerPayload>
          }
          findFirst: {
            args: Prisma.sellerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sellerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellerPayload>
          }
          findMany: {
            args: Prisma.sellerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellerPayload>[]
          }
          create: {
            args: Prisma.sellerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellerPayload>
          }
          createMany: {
            args: Prisma.sellerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sellerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellerPayload>[]
          }
          delete: {
            args: Prisma.sellerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellerPayload>
          }
          update: {
            args: Prisma.sellerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellerPayload>
          }
          deleteMany: {
            args: Prisma.sellerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sellerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sellerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellerPayload>[]
          }
          upsert: {
            args: Prisma.sellerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellerPayload>
          }
          aggregate: {
            args: Prisma.SellerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeller>
          }
          groupBy: {
            args: Prisma.sellerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellerGroupByOutputType>[]
          }
          count: {
            args: Prisma.sellerCountArgs<ExtArgs>
            result: $Utils.Optional<SellerCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      store: {
        payload: Prisma.$storePayload<ExtArgs>
        fields: Prisma.storeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          findFirst: {
            args: Prisma.storeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          findMany: {
            args: Prisma.storeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>[]
          }
          create: {
            args: Prisma.storeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          createMany: {
            args: Prisma.storeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.storeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>[]
          }
          delete: {
            args: Prisma.storeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          update: {
            args: Prisma.storeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          deleteMany: {
            args: Prisma.storeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.storeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>[]
          }
          upsert: {
            args: Prisma.storeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.storeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.storeCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      cart: {
        payload: Prisma.$cartPayload<ExtArgs>
        fields: Prisma.cartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findFirst: {
            args: Prisma.cartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findMany: {
            args: Prisma.cartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          create: {
            args: Prisma.cartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          createMany: {
            args: Prisma.cartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          delete: {
            args: Prisma.cartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          update: {
            args: Prisma.cartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          deleteMany: {
            args: Prisma.cartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          upsert: {
            args: Prisma.cartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.cartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      favorite: {
        payload: Prisma.$favoritePayload<ExtArgs>
        fields: Prisma.favoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.favoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.favoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          findFirst: {
            args: Prisma.favoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.favoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          findMany: {
            args: Prisma.favoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>[]
          }
          create: {
            args: Prisma.favoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          createMany: {
            args: Prisma.favoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.favoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>[]
          }
          delete: {
            args: Prisma.favoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          update: {
            args: Prisma.favoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          deleteMany: {
            args: Prisma.favoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.favoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.favoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>[]
          }
          upsert: {
            args: Prisma.favoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.favoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.favoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      follow: {
        payload: Prisma.$followPayload<ExtArgs>
        fields: Prisma.followFieldRefs
        operations: {
          findUnique: {
            args: Prisma.followFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.followFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>
          }
          findFirst: {
            args: Prisma.followFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.followFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>
          }
          findMany: {
            args: Prisma.followFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>[]
          }
          create: {
            args: Prisma.followCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>
          }
          createMany: {
            args: Prisma.followCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.followCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>[]
          }
          delete: {
            args: Prisma.followDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>
          }
          update: {
            args: Prisma.followUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>
          }
          deleteMany: {
            args: Prisma.followDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.followUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.followUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>[]
          }
          upsert: {
            args: Prisma.followUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.followGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.followCountArgs<ExtArgs>
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
          }
        }
      }
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      order_item: {
        payload: Prisma.$order_itemPayload<ExtArgs>
        fields: Prisma.order_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          findFirst: {
            args: Prisma.order_itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          findMany: {
            args: Prisma.order_itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          create: {
            args: Prisma.order_itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          createMany: {
            args: Prisma.order_itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_itemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          delete: {
            args: Prisma.order_itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          update: {
            args: Prisma.order_itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          deleteMany: {
            args: Prisma.order_itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_itemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          upsert: {
            args: Prisma.order_itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          aggregate: {
            args: Prisma.Order_itemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_item>
          }
          groupBy: {
            args: Prisma.order_itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemCountAggregateOutputType> | number
          }
        }
      }
      Advertisement: {
        payload: Prisma.$AdvertisementPayload<ExtArgs>
        fields: Prisma.AdvertisementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvertisementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvertisementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          findFirst: {
            args: Prisma.AdvertisementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvertisementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          findMany: {
            args: Prisma.AdvertisementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>[]
          }
          create: {
            args: Prisma.AdvertisementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          createMany: {
            args: Prisma.AdvertisementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvertisementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>[]
          }
          delete: {
            args: Prisma.AdvertisementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          update: {
            args: Prisma.AdvertisementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          deleteMany: {
            args: Prisma.AdvertisementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvertisementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvertisementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>[]
          }
          upsert: {
            args: Prisma.AdvertisementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          aggregate: {
            args: Prisma.AdvertisementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdvertisement>
          }
          groupBy: {
            args: Prisma.AdvertisementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvertisementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvertisementCountArgs<ExtArgs>
            result: $Utils.Optional<AdvertisementCountAggregateOutputType> | number
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
    user?: userOmit
    seller?: sellerOmit
    product?: productOmit
    store?: storeOmit
    cart?: cartOmit
    favorite?: favoriteOmit
    review?: reviewOmit
    follow?: followOmit
    order?: orderOmit
    order_item?: order_itemOmit
    advertisement?: AdvertisementOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    follows: number
    carts: number
    favorites: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follows?: boolean | UserCountOutputTypeCountFollowsArgs
    carts?: boolean | UserCountOutputTypeCountCartsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
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
  export type UserCountOutputTypeCountFollowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    carts: number
    favorites: number
    reviews: number
    order_items: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | ProductCountOutputTypeCountCartsArgs
    favorites?: boolean | ProductCountOutputTypeCountFavoritesArgs
    reviews?: boolean | ProductCountOutputTypeCountReviewsArgs
    order_items?: boolean | ProductCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoriteWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    products: number
    follows: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | StoreCountOutputTypeCountProductsArgs
    follows?: boolean | StoreCountOutputTypeCountFollowsArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountFollowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    order_items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrderCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    reg_id: number | null
  }

  export type UserSumAggregateOutputType = {
    reg_id: number | null
  }

  export type UserMinAggregateOutputType = {
    reg_id: number | null
    fullName: string | null
    username: string | null
    email: string | null
    password: string | null
    mobileNo: string | null
    gender: string | null
    address: string | null
    role: string | null
    isSeller: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    reg_id: number | null
    fullName: string | null
    username: string | null
    email: string | null
    password: string | null
    mobileNo: string | null
    gender: string | null
    address: string | null
    role: string | null
    isSeller: boolean | null
  }

  export type UserCountAggregateOutputType = {
    reg_id: number
    fullName: number
    username: number
    email: number
    password: number
    mobileNo: number
    gender: number
    address: number
    role: number
    isSeller: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    reg_id?: true
  }

  export type UserSumAggregateInputType = {
    reg_id?: true
  }

  export type UserMinAggregateInputType = {
    reg_id?: true
    fullName?: true
    username?: true
    email?: true
    password?: true
    mobileNo?: true
    gender?: true
    address?: true
    role?: true
    isSeller?: true
  }

  export type UserMaxAggregateInputType = {
    reg_id?: true
    fullName?: true
    username?: true
    email?: true
    password?: true
    mobileNo?: true
    gender?: true
    address?: true
    role?: true
    isSeller?: true
  }

  export type UserCountAggregateInputType = {
    reg_id?: true
    fullName?: true
    username?: true
    email?: true
    password?: true
    mobileNo?: true
    gender?: true
    address?: true
    role?: true
    isSeller?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    reg_id: number
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role: string
    isSeller: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reg_id?: boolean
    fullName?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    mobileNo?: boolean
    gender?: boolean
    address?: boolean
    role?: boolean
    isSeller?: boolean
    follows?: boolean | user$followsArgs<ExtArgs>
    carts?: boolean | user$cartsArgs<ExtArgs>
    favorites?: boolean | user$favoritesArgs<ExtArgs>
    seller?: boolean | user$sellerArgs<ExtArgs>
    orders?: boolean | user$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reg_id?: boolean
    fullName?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    mobileNo?: boolean
    gender?: boolean
    address?: boolean
    role?: boolean
    isSeller?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reg_id?: boolean
    fullName?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    mobileNo?: boolean
    gender?: boolean
    address?: boolean
    role?: boolean
    isSeller?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    reg_id?: boolean
    fullName?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    mobileNo?: boolean
    gender?: boolean
    address?: boolean
    role?: boolean
    isSeller?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reg_id" | "fullName" | "username" | "email" | "password" | "mobileNo" | "gender" | "address" | "role" | "isSeller", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follows?: boolean | user$followsArgs<ExtArgs>
    carts?: boolean | user$cartsArgs<ExtArgs>
    favorites?: boolean | user$favoritesArgs<ExtArgs>
    seller?: boolean | user$sellerArgs<ExtArgs>
    orders?: boolean | user$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      follows: Prisma.$followPayload<ExtArgs>[]
      carts: Prisma.$cartPayload<ExtArgs>[]
      favorites: Prisma.$favoritePayload<ExtArgs>[]
      seller: Prisma.$sellerPayload<ExtArgs> | null
      orders: Prisma.$orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      reg_id: number
      fullName: string
      username: string
      email: string
      password: string
      mobileNo: string
      gender: string
      address: string
      role: string
      isSeller: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `reg_id`
     * const userWithReg_idOnly = await prisma.user.findMany({ select: { reg_id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `reg_id`
     * const userWithReg_idOnly = await prisma.user.createManyAndReturn({
     *   select: { reg_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
     * // Update zero or more Users and only return the `reg_id`
     * const userWithReg_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { reg_id: true },
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    follows<T extends user$followsArgs<ExtArgs> = {}>(args?: Subset<T, user$followsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carts<T extends user$cartsArgs<ExtArgs> = {}>(args?: Subset<T, user$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends user$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, user$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seller<T extends user$sellerArgs<ExtArgs> = {}>(args?: Subset<T, user$sellerArgs<ExtArgs>>): Prisma__sellerClient<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends user$ordersArgs<ExtArgs> = {}>(args?: Subset<T, user$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly reg_id: FieldRef<"user", 'Int'>
    readonly fullName: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly mobileNo: FieldRef<"user", 'String'>
    readonly gender: FieldRef<"user", 'String'>
    readonly address: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'String'>
    readonly isSeller: FieldRef<"user", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.follows
   */
  export type user$followsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    where?: followWhereInput
    orderBy?: followOrderByWithRelationInput | followOrderByWithRelationInput[]
    cursor?: followWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * user.carts
   */
  export type user$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    cursor?: cartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * user.favorites
   */
  export type user$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    where?: favoriteWhereInput
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    cursor?: favoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * user.seller
   */
  export type user$sellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerInclude<ExtArgs> | null
    where?: sellerWhereInput
  }

  /**
   * user.orders
   */
  export type user$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model seller
   */

  export type AggregateSeller = {
    _count: SellerCountAggregateOutputType | null
    _avg: SellerAvgAggregateOutputType | null
    _sum: SellerSumAggregateOutputType | null
    _min: SellerMinAggregateOutputType | null
    _max: SellerMaxAggregateOutputType | null
  }

  export type SellerAvgAggregateOutputType = {
    seller_id: number | null
    reg_id: number | null
    store_id: number | null
  }

  export type SellerSumAggregateOutputType = {
    seller_id: number | null
    reg_id: number | null
    store_id: number | null
  }

  export type SellerMinAggregateOutputType = {
    seller_id: number | null
    mobile_no1: string | null
    mobile_no2: string | null
    reg_id: number | null
    store_id: number | null
    isBlocked: boolean | null
    warning1: string | null
    warning2: string | null
    warning3: string | null
  }

  export type SellerMaxAggregateOutputType = {
    seller_id: number | null
    mobile_no1: string | null
    mobile_no2: string | null
    reg_id: number | null
    store_id: number | null
    isBlocked: boolean | null
    warning1: string | null
    warning2: string | null
    warning3: string | null
  }

  export type SellerCountAggregateOutputType = {
    seller_id: number
    mobile_no1: number
    mobile_no2: number
    reg_id: number
    store_id: number
    isBlocked: number
    warning1: number
    warning2: number
    warning3: number
    _all: number
  }


  export type SellerAvgAggregateInputType = {
    seller_id?: true
    reg_id?: true
    store_id?: true
  }

  export type SellerSumAggregateInputType = {
    seller_id?: true
    reg_id?: true
    store_id?: true
  }

  export type SellerMinAggregateInputType = {
    seller_id?: true
    mobile_no1?: true
    mobile_no2?: true
    reg_id?: true
    store_id?: true
    isBlocked?: true
    warning1?: true
    warning2?: true
    warning3?: true
  }

  export type SellerMaxAggregateInputType = {
    seller_id?: true
    mobile_no1?: true
    mobile_no2?: true
    reg_id?: true
    store_id?: true
    isBlocked?: true
    warning1?: true
    warning2?: true
    warning3?: true
  }

  export type SellerCountAggregateInputType = {
    seller_id?: true
    mobile_no1?: true
    mobile_no2?: true
    reg_id?: true
    store_id?: true
    isBlocked?: true
    warning1?: true
    warning2?: true
    warning3?: true
    _all?: true
  }

  export type SellerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seller to aggregate.
     */
    where?: sellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellerOrderByWithRelationInput | sellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sellers
    **/
    _count?: true | SellerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SellerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SellerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerMaxAggregateInputType
  }

  export type GetSellerAggregateType<T extends SellerAggregateArgs> = {
        [P in keyof T & keyof AggregateSeller]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeller[P]>
      : GetScalarType<T[P], AggregateSeller[P]>
  }




  export type sellerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sellerWhereInput
    orderBy?: sellerOrderByWithAggregationInput | sellerOrderByWithAggregationInput[]
    by: SellerScalarFieldEnum[] | SellerScalarFieldEnum
    having?: sellerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerCountAggregateInputType | true
    _avg?: SellerAvgAggregateInputType
    _sum?: SellerSumAggregateInputType
    _min?: SellerMinAggregateInputType
    _max?: SellerMaxAggregateInputType
  }

  export type SellerGroupByOutputType = {
    seller_id: number
    mobile_no1: string
    mobile_no2: string
    reg_id: number
    store_id: number
    isBlocked: boolean
    warning1: string | null
    warning2: string | null
    warning3: string | null
    _count: SellerCountAggregateOutputType | null
    _avg: SellerAvgAggregateOutputType | null
    _sum: SellerSumAggregateOutputType | null
    _min: SellerMinAggregateOutputType | null
    _max: SellerMaxAggregateOutputType | null
  }

  type GetSellerGroupByPayload<T extends sellerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerGroupByOutputType[P]>
            : GetScalarType<T[P], SellerGroupByOutputType[P]>
        }
      >
    >


  export type sellerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seller_id?: boolean
    mobile_no1?: boolean
    mobile_no2?: boolean
    reg_id?: boolean
    store_id?: boolean
    isBlocked?: boolean
    warning1?: boolean
    warning2?: boolean
    warning3?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seller"]>

  export type sellerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seller_id?: boolean
    mobile_no1?: boolean
    mobile_no2?: boolean
    reg_id?: boolean
    store_id?: boolean
    isBlocked?: boolean
    warning1?: boolean
    warning2?: boolean
    warning3?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seller"]>

  export type sellerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seller_id?: boolean
    mobile_no1?: boolean
    mobile_no2?: boolean
    reg_id?: boolean
    store_id?: boolean
    isBlocked?: boolean
    warning1?: boolean
    warning2?: boolean
    warning3?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seller"]>

  export type sellerSelectScalar = {
    seller_id?: boolean
    mobile_no1?: boolean
    mobile_no2?: boolean
    reg_id?: boolean
    store_id?: boolean
    isBlocked?: boolean
    warning1?: boolean
    warning2?: boolean
    warning3?: boolean
  }

  export type sellerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"seller_id" | "mobile_no1" | "mobile_no2" | "reg_id" | "store_id" | "isBlocked" | "warning1" | "warning2" | "warning3", ExtArgs["result"]["seller"]>
  export type sellerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
  }
  export type sellerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
  }
  export type sellerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
  }

  export type $sellerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "seller"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      store: Prisma.$storePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      seller_id: number
      mobile_no1: string
      mobile_no2: string
      reg_id: number
      store_id: number
      isBlocked: boolean
      warning1: string | null
      warning2: string | null
      warning3: string | null
    }, ExtArgs["result"]["seller"]>
    composites: {}
  }

  type sellerGetPayload<S extends boolean | null | undefined | sellerDefaultArgs> = $Result.GetResult<Prisma.$sellerPayload, S>

  type sellerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sellerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellerCountAggregateInputType | true
    }

  export interface sellerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['seller'], meta: { name: 'seller' } }
    /**
     * Find zero or one Seller that matches the filter.
     * @param {sellerFindUniqueArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sellerFindUniqueArgs>(args: SelectSubset<T, sellerFindUniqueArgs<ExtArgs>>): Prisma__sellerClient<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seller that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sellerFindUniqueOrThrowArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sellerFindUniqueOrThrowArgs>(args: SelectSubset<T, sellerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sellerClient<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seller that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellerFindFirstArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sellerFindFirstArgs>(args?: SelectSubset<T, sellerFindFirstArgs<ExtArgs>>): Prisma__sellerClient<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seller that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellerFindFirstOrThrowArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sellerFindFirstOrThrowArgs>(args?: SelectSubset<T, sellerFindFirstOrThrowArgs<ExtArgs>>): Prisma__sellerClient<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sellers
     * const sellers = await prisma.seller.findMany()
     * 
     * // Get first 10 Sellers
     * const sellers = await prisma.seller.findMany({ take: 10 })
     * 
     * // Only select the `seller_id`
     * const sellerWithSeller_idOnly = await prisma.seller.findMany({ select: { seller_id: true } })
     * 
     */
    findMany<T extends sellerFindManyArgs>(args?: SelectSubset<T, sellerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seller.
     * @param {sellerCreateArgs} args - Arguments to create a Seller.
     * @example
     * // Create one Seller
     * const Seller = await prisma.seller.create({
     *   data: {
     *     // ... data to create a Seller
     *   }
     * })
     * 
     */
    create<T extends sellerCreateArgs>(args: SelectSubset<T, sellerCreateArgs<ExtArgs>>): Prisma__sellerClient<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sellers.
     * @param {sellerCreateManyArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const seller = await prisma.seller.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sellerCreateManyArgs>(args?: SelectSubset<T, sellerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sellers and returns the data saved in the database.
     * @param {sellerCreateManyAndReturnArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const seller = await prisma.seller.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sellers and only return the `seller_id`
     * const sellerWithSeller_idOnly = await prisma.seller.createManyAndReturn({
     *   select: { seller_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sellerCreateManyAndReturnArgs>(args?: SelectSubset<T, sellerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seller.
     * @param {sellerDeleteArgs} args - Arguments to delete one Seller.
     * @example
     * // Delete one Seller
     * const Seller = await prisma.seller.delete({
     *   where: {
     *     // ... filter to delete one Seller
     *   }
     * })
     * 
     */
    delete<T extends sellerDeleteArgs>(args: SelectSubset<T, sellerDeleteArgs<ExtArgs>>): Prisma__sellerClient<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seller.
     * @param {sellerUpdateArgs} args - Arguments to update one Seller.
     * @example
     * // Update one Seller
     * const seller = await prisma.seller.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sellerUpdateArgs>(args: SelectSubset<T, sellerUpdateArgs<ExtArgs>>): Prisma__sellerClient<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sellers.
     * @param {sellerDeleteManyArgs} args - Arguments to filter Sellers to delete.
     * @example
     * // Delete a few Sellers
     * const { count } = await prisma.seller.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sellerDeleteManyArgs>(args?: SelectSubset<T, sellerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sellers
     * const seller = await prisma.seller.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sellerUpdateManyArgs>(args: SelectSubset<T, sellerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers and returns the data updated in the database.
     * @param {sellerUpdateManyAndReturnArgs} args - Arguments to update many Sellers.
     * @example
     * // Update many Sellers
     * const seller = await prisma.seller.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sellers and only return the `seller_id`
     * const sellerWithSeller_idOnly = await prisma.seller.updateManyAndReturn({
     *   select: { seller_id: true },
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
    updateManyAndReturn<T extends sellerUpdateManyAndReturnArgs>(args: SelectSubset<T, sellerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seller.
     * @param {sellerUpsertArgs} args - Arguments to update or create a Seller.
     * @example
     * // Update or create a Seller
     * const seller = await prisma.seller.upsert({
     *   create: {
     *     // ... data to create a Seller
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seller we want to update
     *   }
     * })
     */
    upsert<T extends sellerUpsertArgs>(args: SelectSubset<T, sellerUpsertArgs<ExtArgs>>): Prisma__sellerClient<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellerCountArgs} args - Arguments to filter Sellers to count.
     * @example
     * // Count the number of Sellers
     * const count = await prisma.seller.count({
     *   where: {
     *     // ... the filter for the Sellers we want to count
     *   }
     * })
    **/
    count<T extends sellerCountArgs>(
      args?: Subset<T, sellerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellerAggregateArgs>(args: Subset<T, SellerAggregateArgs>): Prisma.PrismaPromise<GetSellerAggregateType<T>>

    /**
     * Group by Seller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellerGroupByArgs} args - Group by arguments.
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
      T extends sellerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sellerGroupByArgs['orderBy'] }
        : { orderBy?: sellerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sellerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the seller model
   */
  readonly fields: sellerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for seller.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sellerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    store<T extends storeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, storeDefaultArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the seller model
   */
  interface sellerFieldRefs {
    readonly seller_id: FieldRef<"seller", 'Int'>
    readonly mobile_no1: FieldRef<"seller", 'String'>
    readonly mobile_no2: FieldRef<"seller", 'String'>
    readonly reg_id: FieldRef<"seller", 'Int'>
    readonly store_id: FieldRef<"seller", 'Int'>
    readonly isBlocked: FieldRef<"seller", 'Boolean'>
    readonly warning1: FieldRef<"seller", 'String'>
    readonly warning2: FieldRef<"seller", 'String'>
    readonly warning3: FieldRef<"seller", 'String'>
  }
    

  // Custom InputTypes
  /**
   * seller findUnique
   */
  export type sellerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerInclude<ExtArgs> | null
    /**
     * Filter, which seller to fetch.
     */
    where: sellerWhereUniqueInput
  }

  /**
   * seller findUniqueOrThrow
   */
  export type sellerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerInclude<ExtArgs> | null
    /**
     * Filter, which seller to fetch.
     */
    where: sellerWhereUniqueInput
  }

  /**
   * seller findFirst
   */
  export type sellerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerInclude<ExtArgs> | null
    /**
     * Filter, which seller to fetch.
     */
    where?: sellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellerOrderByWithRelationInput | sellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sellers.
     */
    cursor?: sellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellers.
     */
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * seller findFirstOrThrow
   */
  export type sellerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerInclude<ExtArgs> | null
    /**
     * Filter, which seller to fetch.
     */
    where?: sellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellerOrderByWithRelationInput | sellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sellers.
     */
    cursor?: sellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellers.
     */
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * seller findMany
   */
  export type sellerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellerOrderByWithRelationInput | sellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sellers.
     */
    cursor?: sellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * seller create
   */
  export type sellerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerInclude<ExtArgs> | null
    /**
     * The data needed to create a seller.
     */
    data: XOR<sellerCreateInput, sellerUncheckedCreateInput>
  }

  /**
   * seller createMany
   */
  export type sellerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sellers.
     */
    data: sellerCreateManyInput | sellerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * seller createManyAndReturn
   */
  export type sellerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * The data used to create many sellers.
     */
    data: sellerCreateManyInput | sellerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * seller update
   */
  export type sellerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerInclude<ExtArgs> | null
    /**
     * The data needed to update a seller.
     */
    data: XOR<sellerUpdateInput, sellerUncheckedUpdateInput>
    /**
     * Choose, which seller to update.
     */
    where: sellerWhereUniqueInput
  }

  /**
   * seller updateMany
   */
  export type sellerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sellers.
     */
    data: XOR<sellerUpdateManyMutationInput, sellerUncheckedUpdateManyInput>
    /**
     * Filter which sellers to update
     */
    where?: sellerWhereInput
    /**
     * Limit how many sellers to update.
     */
    limit?: number
  }

  /**
   * seller updateManyAndReturn
   */
  export type sellerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * The data used to update sellers.
     */
    data: XOR<sellerUpdateManyMutationInput, sellerUncheckedUpdateManyInput>
    /**
     * Filter which sellers to update
     */
    where?: sellerWhereInput
    /**
     * Limit how many sellers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * seller upsert
   */
  export type sellerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerInclude<ExtArgs> | null
    /**
     * The filter to search for the seller to update in case it exists.
     */
    where: sellerWhereUniqueInput
    /**
     * In case the seller found by the `where` argument doesn't exist, create a new seller with this data.
     */
    create: XOR<sellerCreateInput, sellerUncheckedCreateInput>
    /**
     * In case the seller was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sellerUpdateInput, sellerUncheckedUpdateInput>
  }

  /**
   * seller delete
   */
  export type sellerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerInclude<ExtArgs> | null
    /**
     * Filter which seller to delete.
     */
    where: sellerWhereUniqueInput
  }

  /**
   * seller deleteMany
   */
  export type sellerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sellers to delete
     */
    where?: sellerWhereInput
    /**
     * Limit how many sellers to delete.
     */
    limit?: number
  }

  /**
   * seller without action
   */
  export type sellerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    product_id: number | null
    price: number | null
    stock: number | null
    store_id: number | null
  }

  export type ProductSumAggregateOutputType = {
    product_id: number | null
    price: number | null
    stock: number | null
    store_id: number | null
  }

  export type ProductMinAggregateOutputType = {
    product_id: number | null
    name: string | null
    description: string | null
    price: number | null
    stock: number | null
    store_id: number | null
    category: string | null
    isPremium: boolean | null
    product_image: string | null
    store_name: string | null
    store_image: string | null
  }

  export type ProductMaxAggregateOutputType = {
    product_id: number | null
    name: string | null
    description: string | null
    price: number | null
    stock: number | null
    store_id: number | null
    category: string | null
    isPremium: boolean | null
    product_image: string | null
    store_name: string | null
    store_image: string | null
  }

  export type ProductCountAggregateOutputType = {
    product_id: number
    name: number
    description: number
    price: number
    stock: number
    store_id: number
    category: number
    isPremium: number
    product_image: number
    store_name: number
    store_image: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    product_id?: true
    price?: true
    stock?: true
    store_id?: true
  }

  export type ProductSumAggregateInputType = {
    product_id?: true
    price?: true
    stock?: true
    store_id?: true
  }

  export type ProductMinAggregateInputType = {
    product_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    store_id?: true
    category?: true
    isPremium?: true
    product_image?: true
    store_name?: true
    store_image?: true
  }

  export type ProductMaxAggregateInputType = {
    product_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    store_id?: true
    category?: true
    isPremium?: true
    product_image?: true
    store_name?: true
    store_image?: true
  }

  export type ProductCountAggregateInputType = {
    product_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    store_id?: true
    category?: true
    isPremium?: true
    product_image?: true
    store_name?: true
    store_image?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    product_id: number
    name: string
    description: string
    price: number
    stock: number
    store_id: number
    category: string
    isPremium: boolean
    product_image: string | null
    store_name: string
    store_image: string | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    store_id?: boolean
    category?: boolean
    isPremium?: boolean
    product_image?: boolean
    store_name?: boolean
    store_image?: boolean
    store?: boolean | storeDefaultArgs<ExtArgs>
    carts?: boolean | product$cartsArgs<ExtArgs>
    favorites?: boolean | product$favoritesArgs<ExtArgs>
    reviews?: boolean | product$reviewsArgs<ExtArgs>
    order_items?: boolean | product$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    store_id?: boolean
    category?: boolean
    isPremium?: boolean
    product_image?: boolean
    store_name?: boolean
    store_image?: boolean
    store?: boolean | storeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    store_id?: boolean
    category?: boolean
    isPremium?: boolean
    product_image?: boolean
    store_name?: boolean
    store_image?: boolean
    store?: boolean | storeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    product_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    store_id?: boolean
    category?: boolean
    isPremium?: boolean
    product_image?: boolean
    store_name?: boolean
    store_image?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "name" | "description" | "price" | "stock" | "store_id" | "category" | "isPremium" | "product_image" | "store_name" | "store_image", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | storeDefaultArgs<ExtArgs>
    carts?: boolean | product$cartsArgs<ExtArgs>
    favorites?: boolean | product$favoritesArgs<ExtArgs>
    reviews?: boolean | product$reviewsArgs<ExtArgs>
    order_items?: boolean | product$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | storeDefaultArgs<ExtArgs>
  }
  export type productIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | storeDefaultArgs<ExtArgs>
  }

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      store: Prisma.$storePayload<ExtArgs>
      carts: Prisma.$cartPayload<ExtArgs>[]
      favorites: Prisma.$favoritePayload<ExtArgs>[]
      reviews: Prisma.$reviewPayload<ExtArgs>[]
      order_items: Prisma.$order_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      name: string
      description: string
      price: number
      stock: number
      store_id: number
      category: string
      isPremium: boolean
      product_image: string | null
      store_name: string
      store_image: string | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productWithProduct_idOnly = await prisma.product.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `product_id`
     * const productWithProduct_idOnly = await prisma.product.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productCreateManyAndReturnArgs>(args?: SelectSubset<T, productCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `product_id`
     * const productWithProduct_idOnly = await prisma.product.updateManyAndReturn({
     *   select: { product_id: true },
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
    updateManyAndReturn<T extends productUpdateManyAndReturnArgs>(args: SelectSubset<T, productUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
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
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends storeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, storeDefaultArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carts<T extends product$cartsArgs<ExtArgs> = {}>(args?: Subset<T, product$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends product$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, product$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends product$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, product$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends product$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, product$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly product_id: FieldRef<"product", 'Int'>
    readonly name: FieldRef<"product", 'String'>
    readonly description: FieldRef<"product", 'String'>
    readonly price: FieldRef<"product", 'Float'>
    readonly stock: FieldRef<"product", 'Int'>
    readonly store_id: FieldRef<"product", 'Int'>
    readonly category: FieldRef<"product", 'String'>
    readonly isPremium: FieldRef<"product", 'Boolean'>
    readonly product_image: FieldRef<"product", 'String'>
    readonly store_name: FieldRef<"product", 'String'>
    readonly store_image: FieldRef<"product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product createManyAndReturn
   */
  export type productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product updateManyAndReturn
   */
  export type productUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.carts
   */
  export type product$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    cursor?: cartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * product.favorites
   */
  export type product$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    where?: favoriteWhereInput
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    cursor?: favoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * product.reviews
   */
  export type product$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * product.order_items
   */
  export type product$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    cursor?: order_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    store_id: number | null
  }

  export type StoreSumAggregateOutputType = {
    store_id: number | null
  }

  export type StoreMinAggregateOutputType = {
    store_id: number | null
    store_name: string | null
    business_email: string | null
    business_regNo: string | null
    business_address: string | null
    store_image: string | null
  }

  export type StoreMaxAggregateOutputType = {
    store_id: number | null
    store_name: string | null
    business_email: string | null
    business_regNo: string | null
    business_address: string | null
    store_image: string | null
  }

  export type StoreCountAggregateOutputType = {
    store_id: number
    store_name: number
    business_email: number
    business_regNo: number
    business_address: number
    store_image: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    store_id?: true
  }

  export type StoreSumAggregateInputType = {
    store_id?: true
  }

  export type StoreMinAggregateInputType = {
    store_id?: true
    store_name?: true
    business_email?: true
    business_regNo?: true
    business_address?: true
    store_image?: true
  }

  export type StoreMaxAggregateInputType = {
    store_id?: true
    store_name?: true
    business_email?: true
    business_regNo?: true
    business_address?: true
    store_image?: true
  }

  export type StoreCountAggregateInputType = {
    store_id?: true
    store_name?: true
    business_email?: true
    business_regNo?: true
    business_address?: true
    store_image?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which store to aggregate.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type storeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storeWhereInput
    orderBy?: storeOrderByWithAggregationInput | storeOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: storeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    store_id: number
    store_name: string
    business_email: string
    business_regNo: string
    business_address: string | null
    store_image: string | null
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends storeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type storeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    store_name?: boolean
    business_email?: boolean
    business_regNo?: boolean
    business_address?: boolean
    store_image?: boolean
    seller?: boolean | store$sellerArgs<ExtArgs>
    products?: boolean | store$productsArgs<ExtArgs>
    follows?: boolean | store$followsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type storeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    store_name?: boolean
    business_email?: boolean
    business_regNo?: boolean
    business_address?: boolean
    store_image?: boolean
  }, ExtArgs["result"]["store"]>

  export type storeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    store_name?: boolean
    business_email?: boolean
    business_regNo?: boolean
    business_address?: boolean
    store_image?: boolean
  }, ExtArgs["result"]["store"]>

  export type storeSelectScalar = {
    store_id?: boolean
    store_name?: boolean
    business_email?: boolean
    business_regNo?: boolean
    business_address?: boolean
    store_image?: boolean
  }

  export type storeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"store_id" | "store_name" | "business_email" | "business_regNo" | "business_address" | "store_image", ExtArgs["result"]["store"]>
  export type storeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | store$sellerArgs<ExtArgs>
    products?: boolean | store$productsArgs<ExtArgs>
    follows?: boolean | store$followsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type storeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type storeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $storePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "store"
    objects: {
      seller: Prisma.$sellerPayload<ExtArgs> | null
      products: Prisma.$productPayload<ExtArgs>[]
      follows: Prisma.$followPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      store_id: number
      store_name: string
      business_email: string
      business_regNo: string
      business_address: string | null
      store_image: string | null
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type storeGetPayload<S extends boolean | null | undefined | storeDefaultArgs> = $Result.GetResult<Prisma.$storePayload, S>

  type storeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface storeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['store'], meta: { name: 'store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {storeFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storeFindUniqueArgs>(args: SelectSubset<T, storeFindUniqueArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storeFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storeFindUniqueOrThrowArgs>(args: SelectSubset<T, storeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storeFindFirstArgs>(args?: SelectSubset<T, storeFindFirstArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storeFindFirstOrThrowArgs>(args?: SelectSubset<T, storeFindFirstOrThrowArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `store_id`
     * const storeWithStore_idOnly = await prisma.store.findMany({ select: { store_id: true } })
     * 
     */
    findMany<T extends storeFindManyArgs>(args?: SelectSubset<T, storeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {storeCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends storeCreateArgs>(args: SelectSubset<T, storeCreateArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {storeCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storeCreateManyArgs>(args?: SelectSubset<T, storeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {storeCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `store_id`
     * const storeWithStore_idOnly = await prisma.store.createManyAndReturn({
     *   select: { store_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends storeCreateManyAndReturnArgs>(args?: SelectSubset<T, storeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store.
     * @param {storeDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends storeDeleteArgs>(args: SelectSubset<T, storeDeleteArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {storeUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storeUpdateArgs>(args: SelectSubset<T, storeUpdateArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {storeDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storeDeleteManyArgs>(args?: SelectSubset<T, storeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storeUpdateManyArgs>(args: SelectSubset<T, storeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {storeUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `store_id`
     * const storeWithStore_idOnly = await prisma.store.updateManyAndReturn({
     *   select: { store_id: true },
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
    updateManyAndReturn<T extends storeUpdateManyAndReturnArgs>(args: SelectSubset<T, storeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store.
     * @param {storeUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends storeUpsertArgs>(args: SelectSubset<T, storeUpsertArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storeCountArgs>(
      args?: Subset<T, storeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeGroupByArgs} args - Group by arguments.
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
      T extends storeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storeGroupByArgs['orderBy'] }
        : { orderBy?: storeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, storeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the store model
   */
  readonly fields: storeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seller<T extends store$sellerArgs<ExtArgs> = {}>(args?: Subset<T, store$sellerArgs<ExtArgs>>): Prisma__sellerClient<$Result.GetResult<Prisma.$sellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends store$productsArgs<ExtArgs> = {}>(args?: Subset<T, store$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    follows<T extends store$followsArgs<ExtArgs> = {}>(args?: Subset<T, store$followsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the store model
   */
  interface storeFieldRefs {
    readonly store_id: FieldRef<"store", 'Int'>
    readonly store_name: FieldRef<"store", 'String'>
    readonly business_email: FieldRef<"store", 'String'>
    readonly business_regNo: FieldRef<"store", 'String'>
    readonly business_address: FieldRef<"store", 'String'>
    readonly store_image: FieldRef<"store", 'String'>
  }
    

  // Custom InputTypes
  /**
   * store findUnique
   */
  export type storeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store findUniqueOrThrow
   */
  export type storeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store findFirst
   */
  export type storeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * store findFirstOrThrow
   */
  export type storeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * store findMany
   */
  export type storeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * store create
   */
  export type storeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * The data needed to create a store.
     */
    data: XOR<storeCreateInput, storeUncheckedCreateInput>
  }

  /**
   * store createMany
   */
  export type storeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: storeCreateManyInput | storeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * store createManyAndReturn
   */
  export type storeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * The data used to create many stores.
     */
    data: storeCreateManyInput | storeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * store update
   */
  export type storeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * The data needed to update a store.
     */
    data: XOR<storeUpdateInput, storeUncheckedUpdateInput>
    /**
     * Choose, which store to update.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store updateMany
   */
  export type storeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storeWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * store updateManyAndReturn
   */
  export type storeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * The data used to update stores.
     */
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storeWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * store upsert
   */
  export type storeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * The filter to search for the store to update in case it exists.
     */
    where: storeWhereUniqueInput
    /**
     * In case the store found by the `where` argument doesn't exist, create a new store with this data.
     */
    create: XOR<storeCreateInput, storeUncheckedCreateInput>
    /**
     * In case the store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storeUpdateInput, storeUncheckedUpdateInput>
  }

  /**
   * store delete
   */
  export type storeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter which store to delete.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store deleteMany
   */
  export type storeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: storeWhereInput
    /**
     * Limit how many stores to delete.
     */
    limit?: number
  }

  /**
   * store.seller
   */
  export type store$sellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seller
     */
    select?: sellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seller
     */
    omit?: sellerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellerInclude<ExtArgs> | null
    where?: sellerWhereInput
  }

  /**
   * store.products
   */
  export type store$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * store.follows
   */
  export type store$followsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    where?: followWhereInput
    orderBy?: followOrderByWithRelationInput | followOrderByWithRelationInput[]
    cursor?: followWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * store without action
   */
  export type storeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
  }


  /**
   * Model cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    cart_id: number | null
    reg_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type CartSumAggregateOutputType = {
    cart_id: number | null
    reg_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type CartMinAggregateOutputType = {
    cart_id: number | null
    reg_id: number | null
    product_id: number | null
    quantity: number | null
    price: string | null
    description: string | null
    created_at: Date | null
    product_image: string | null
  }

  export type CartMaxAggregateOutputType = {
    cart_id: number | null
    reg_id: number | null
    product_id: number | null
    quantity: number | null
    price: string | null
    description: string | null
    created_at: Date | null
    product_image: string | null
  }

  export type CartCountAggregateOutputType = {
    cart_id: number
    reg_id: number
    product_id: number
    quantity: number
    price: number
    description: number
    created_at: number
    product_image: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    cart_id?: true
    reg_id?: true
    product_id?: true
    quantity?: true
  }

  export type CartSumAggregateInputType = {
    cart_id?: true
    reg_id?: true
    product_id?: true
    quantity?: true
  }

  export type CartMinAggregateInputType = {
    cart_id?: true
    reg_id?: true
    product_id?: true
    quantity?: true
    price?: true
    description?: true
    created_at?: true
    product_image?: true
  }

  export type CartMaxAggregateInputType = {
    cart_id?: true
    reg_id?: true
    product_id?: true
    quantity?: true
    price?: true
    description?: true
    created_at?: true
    product_image?: true
  }

  export type CartCountAggregateInputType = {
    cart_id?: true
    reg_id?: true
    product_id?: true
    quantity?: true
    price?: true
    description?: true
    created_at?: true
    product_image?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart to aggregate.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type cartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
    orderBy?: cartOrderByWithAggregationInput | cartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: cartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    cart_id: number
    reg_id: number
    product_id: number
    quantity: number
    price: string
    description: string
    created_at: Date
    product_image: string
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends cartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type cartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    reg_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    description?: boolean
    created_at?: boolean
    product_image?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    reg_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    description?: boolean
    created_at?: boolean
    product_image?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    reg_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    description?: boolean
    created_at?: boolean
    product_image?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectScalar = {
    cart_id?: boolean
    reg_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    description?: boolean
    created_at?: boolean
    product_image?: boolean
  }

  export type cartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cart_id" | "reg_id" | "product_id" | "quantity" | "price" | "description" | "created_at" | "product_image", ExtArgs["result"]["cart"]>
  export type cartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type cartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type cartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $cartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cart_id: number
      reg_id: number
      product_id: number
      quantity: number
      price: string
      description: string
      created_at: Date
      product_image: string
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type cartGetPayload<S extends boolean | null | undefined | cartDefaultArgs> = $Result.GetResult<Prisma.$cartPayload, S>

  type cartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface cartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart'], meta: { name: 'cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {cartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartFindUniqueArgs>(args: SelectSubset<T, cartFindUniqueArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartFindUniqueOrThrowArgs>(args: SelectSubset<T, cartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartFindFirstArgs>(args?: SelectSubset<T, cartFindFirstArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartFindFirstOrThrowArgs>(args?: SelectSubset<T, cartFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `cart_id`
     * const cartWithCart_idOnly = await prisma.cart.findMany({ select: { cart_id: true } })
     * 
     */
    findMany<T extends cartFindManyArgs>(args?: SelectSubset<T, cartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {cartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends cartCreateArgs>(args: SelectSubset<T, cartCreateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartCreateManyArgs>(args?: SelectSubset<T, cartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {cartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `cart_id`
     * const cartWithCart_idOnly = await prisma.cart.createManyAndReturn({
     *   select: { cart_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartCreateManyAndReturnArgs>(args?: SelectSubset<T, cartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {cartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends cartDeleteArgs>(args: SelectSubset<T, cartDeleteArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {cartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartUpdateArgs>(args: SelectSubset<T, cartUpdateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartDeleteManyArgs>(args?: SelectSubset<T, cartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartUpdateManyArgs>(args: SelectSubset<T, cartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {cartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `cart_id`
     * const cartWithCart_idOnly = await prisma.cart.updateManyAndReturn({
     *   select: { cart_id: true },
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
    updateManyAndReturn<T extends cartUpdateManyAndReturnArgs>(args: SelectSubset<T, cartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {cartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends cartUpsertArgs>(args: SelectSubset<T, cartUpsertArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartCountArgs>(
      args?: Subset<T, cartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartGroupByArgs} args - Group by arguments.
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
      T extends cartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartGroupByArgs['orderBy'] }
        : { orderBy?: cartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart model
   */
  readonly fields: cartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the cart model
   */
  interface cartFieldRefs {
    readonly cart_id: FieldRef<"cart", 'Int'>
    readonly reg_id: FieldRef<"cart", 'Int'>
    readonly product_id: FieldRef<"cart", 'Int'>
    readonly quantity: FieldRef<"cart", 'Int'>
    readonly price: FieldRef<"cart", 'String'>
    readonly description: FieldRef<"cart", 'String'>
    readonly created_at: FieldRef<"cart", 'DateTime'>
    readonly product_image: FieldRef<"cart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cart findUnique
   */
  export type cartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findUniqueOrThrow
   */
  export type cartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findFirst
   */
  export type cartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findFirstOrThrow
   */
  export type cartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findMany
   */
  export type cartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart create
   */
  export type cartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to create a cart.
     */
    data: XOR<cartCreateInput, cartUncheckedCreateInput>
  }

  /**
   * cart createMany
   */
  export type cartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart createManyAndReturn
   */
  export type cartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart update
   */
  export type cartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to update a cart.
     */
    data: XOR<cartUpdateInput, cartUncheckedUpdateInput>
    /**
     * Choose, which cart to update.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart updateMany
   */
  export type cartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * cart updateManyAndReturn
   */
  export type cartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart upsert
   */
  export type cartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The filter to search for the cart to update in case it exists.
     */
    where: cartWhereUniqueInput
    /**
     * In case the cart found by the `where` argument doesn't exist, create a new cart with this data.
     */
    create: XOR<cartCreateInput, cartUncheckedCreateInput>
    /**
     * In case the cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartUpdateInput, cartUncheckedUpdateInput>
  }

  /**
   * cart delete
   */
  export type cartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter which cart to delete.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart deleteMany
   */
  export type cartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * cart without action
   */
  export type cartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
  }


  /**
   * Model favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteAvgAggregateOutputType = {
    fav_id: number | null
    reg_id: number | null
    product_id: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    fav_id: number | null
    reg_id: number | null
    product_id: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    fav_id: number | null
    reg_id: number | null
    product_id: number | null
  }

  export type FavoriteMaxAggregateOutputType = {
    fav_id: number | null
    reg_id: number | null
    product_id: number | null
  }

  export type FavoriteCountAggregateOutputType = {
    fav_id: number
    reg_id: number
    product_id: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    fav_id?: true
    reg_id?: true
    product_id?: true
  }

  export type FavoriteSumAggregateInputType = {
    fav_id?: true
    reg_id?: true
    product_id?: true
  }

  export type FavoriteMinAggregateInputType = {
    fav_id?: true
    reg_id?: true
    product_id?: true
  }

  export type FavoriteMaxAggregateInputType = {
    fav_id?: true
    reg_id?: true
    product_id?: true
  }

  export type FavoriteCountAggregateInputType = {
    fav_id?: true
    reg_id?: true
    product_id?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorite to aggregate.
     */
    where?: favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type favoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoriteWhereInput
    orderBy?: favoriteOrderByWithAggregationInput | favoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: favoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _avg?: FavoriteAvgAggregateInputType
    _sum?: FavoriteSumAggregateInputType
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    fav_id: number
    reg_id: number
    product_id: number
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends favoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type favoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fav_id?: boolean
    reg_id?: boolean
    product_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type favoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fav_id?: boolean
    reg_id?: boolean
    product_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type favoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fav_id?: boolean
    reg_id?: boolean
    product_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type favoriteSelectScalar = {
    fav_id?: boolean
    reg_id?: boolean
    product_id?: boolean
  }

  export type favoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fav_id" | "reg_id" | "product_id", ExtArgs["result"]["favorite"]>
  export type favoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type favoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type favoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $favoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "favorite"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fav_id: number
      reg_id: number
      product_id: number
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type favoriteGetPayload<S extends boolean | null | undefined | favoriteDefaultArgs> = $Result.GetResult<Prisma.$favoritePayload, S>

  type favoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<favoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface favoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['favorite'], meta: { name: 'favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {favoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends favoriteFindUniqueArgs>(args: SelectSubset<T, favoriteFindUniqueArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {favoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends favoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, favoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends favoriteFindFirstArgs>(args?: SelectSubset<T, favoriteFindFirstArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends favoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, favoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `fav_id`
     * const favoriteWithFav_idOnly = await prisma.favorite.findMany({ select: { fav_id: true } })
     * 
     */
    findMany<T extends favoriteFindManyArgs>(args?: SelectSubset<T, favoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {favoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends favoriteCreateArgs>(args: SelectSubset<T, favoriteCreateArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {favoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends favoriteCreateManyArgs>(args?: SelectSubset<T, favoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {favoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `fav_id`
     * const favoriteWithFav_idOnly = await prisma.favorite.createManyAndReturn({
     *   select: { fav_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends favoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, favoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {favoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends favoriteDeleteArgs>(args: SelectSubset<T, favoriteDeleteArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {favoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends favoriteUpdateArgs>(args: SelectSubset<T, favoriteUpdateArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {favoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends favoriteDeleteManyArgs>(args?: SelectSubset<T, favoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends favoriteUpdateManyArgs>(args: SelectSubset<T, favoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {favoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `fav_id`
     * const favoriteWithFav_idOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { fav_id: true },
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
    updateManyAndReturn<T extends favoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, favoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {favoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends favoriteUpsertArgs>(args: SelectSubset<T, favoriteUpsertArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends favoriteCountArgs>(
      args?: Subset<T, favoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteGroupByArgs} args - Group by arguments.
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
      T extends favoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: favoriteGroupByArgs['orderBy'] }
        : { orderBy?: favoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, favoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the favorite model
   */
  readonly fields: favoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__favoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the favorite model
   */
  interface favoriteFieldRefs {
    readonly fav_id: FieldRef<"favorite", 'Int'>
    readonly reg_id: FieldRef<"favorite", 'Int'>
    readonly product_id: FieldRef<"favorite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * favorite findUnique
   */
  export type favoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorite to fetch.
     */
    where: favoriteWhereUniqueInput
  }

  /**
   * favorite findUniqueOrThrow
   */
  export type favoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorite to fetch.
     */
    where: favoriteWhereUniqueInput
  }

  /**
   * favorite findFirst
   */
  export type favoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorite to fetch.
     */
    where?: favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorites.
     */
    cursor?: favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * favorite findFirstOrThrow
   */
  export type favoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorite to fetch.
     */
    where?: favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorites.
     */
    cursor?: favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * favorite findMany
   */
  export type favoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing favorites.
     */
    cursor?: favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * favorite create
   */
  export type favoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a favorite.
     */
    data: XOR<favoriteCreateInput, favoriteUncheckedCreateInput>
  }

  /**
   * favorite createMany
   */
  export type favoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many favorites.
     */
    data: favoriteCreateManyInput | favoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * favorite createManyAndReturn
   */
  export type favoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * The data used to create many favorites.
     */
    data: favoriteCreateManyInput | favoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * favorite update
   */
  export type favoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a favorite.
     */
    data: XOR<favoriteUpdateInput, favoriteUncheckedUpdateInput>
    /**
     * Choose, which favorite to update.
     */
    where: favoriteWhereUniqueInput
  }

  /**
   * favorite updateMany
   */
  export type favoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update favorites.
     */
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyInput>
    /**
     * Filter which favorites to update
     */
    where?: favoriteWhereInput
    /**
     * Limit how many favorites to update.
     */
    limit?: number
  }

  /**
   * favorite updateManyAndReturn
   */
  export type favoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * The data used to update favorites.
     */
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyInput>
    /**
     * Filter which favorites to update
     */
    where?: favoriteWhereInput
    /**
     * Limit how many favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * favorite upsert
   */
  export type favoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the favorite to update in case it exists.
     */
    where: favoriteWhereUniqueInput
    /**
     * In case the favorite found by the `where` argument doesn't exist, create a new favorite with this data.
     */
    create: XOR<favoriteCreateInput, favoriteUncheckedCreateInput>
    /**
     * In case the favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favoriteUpdateInput, favoriteUncheckedUpdateInput>
  }

  /**
   * favorite delete
   */
  export type favoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter which favorite to delete.
     */
    where: favoriteWhereUniqueInput
  }

  /**
   * favorite deleteMany
   */
  export type favoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorites to delete
     */
    where?: favoriteWhereInput
    /**
     * Limit how many favorites to delete.
     */
    limit?: number
  }

  /**
   * favorite without action
   */
  export type favoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    review_id: number | null
    product_id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    review_id: number | null
    product_id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    review_id: number | null
    content: string | null
    userName: string | null
    product_id: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    review_id: number | null
    content: string | null
    userName: string | null
    product_id: number | null
  }

  export type ReviewCountAggregateOutputType = {
    review_id: number
    content: number
    userName: number
    product_id: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    review_id?: true
    product_id?: true
  }

  export type ReviewSumAggregateInputType = {
    review_id?: true
    product_id?: true
  }

  export type ReviewMinAggregateInputType = {
    review_id?: true
    content?: true
    userName?: true
    product_id?: true
  }

  export type ReviewMaxAggregateInputType = {
    review_id?: true
    content?: true
    userName?: true
    product_id?: true
  }

  export type ReviewCountAggregateInputType = {
    review_id?: true
    content?: true
    userName?: true
    product_id?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    review_id: number
    content: string
    userName: string
    product_id: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    content?: boolean
    userName?: boolean
    product_id?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    content?: boolean
    userName?: boolean
    product_id?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    content?: boolean
    userName?: boolean
    product_id?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectScalar = {
    review_id?: boolean
    content?: boolean
    userName?: boolean
    product_id?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "content" | "userName" | "product_id", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type reviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type reviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      content: string
      userName: string
      product_id: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.createManyAndReturn({
     *   select: { review_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.updateManyAndReturn({
     *   select: { review_id: true },
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
    updateManyAndReturn<T extends reviewUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
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
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly review_id: FieldRef<"review", 'Int'>
    readonly content: FieldRef<"review", 'String'>
    readonly userName: FieldRef<"review", 'String'>
    readonly product_id: FieldRef<"review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review createManyAndReturn
   */
  export type reviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review updateManyAndReturn
   */
  export type reviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Model follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _avg: FollowAvgAggregateOutputType | null
    _sum: FollowSumAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowAvgAggregateOutputType = {
    follow_id: number | null
    reg_id: number | null
    store_id: number | null
  }

  export type FollowSumAggregateOutputType = {
    follow_id: number | null
    reg_id: number | null
    store_id: number | null
  }

  export type FollowMinAggregateOutputType = {
    follow_id: number | null
    reg_id: number | null
    store_id: number | null
    is_followed: boolean | null
  }

  export type FollowMaxAggregateOutputType = {
    follow_id: number | null
    reg_id: number | null
    store_id: number | null
    is_followed: boolean | null
  }

  export type FollowCountAggregateOutputType = {
    follow_id: number
    reg_id: number
    store_id: number
    is_followed: number
    _all: number
  }


  export type FollowAvgAggregateInputType = {
    follow_id?: true
    reg_id?: true
    store_id?: true
  }

  export type FollowSumAggregateInputType = {
    follow_id?: true
    reg_id?: true
    store_id?: true
  }

  export type FollowMinAggregateInputType = {
    follow_id?: true
    reg_id?: true
    store_id?: true
    is_followed?: true
  }

  export type FollowMaxAggregateInputType = {
    follow_id?: true
    reg_id?: true
    store_id?: true
    is_followed?: true
  }

  export type FollowCountAggregateInputType = {
    follow_id?: true
    reg_id?: true
    store_id?: true
    is_followed?: true
    _all?: true
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which follow to aggregate.
     */
    where?: followWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followOrderByWithRelationInput | followOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: followWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type followGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followWhereInput
    orderBy?: followOrderByWithAggregationInput | followOrderByWithAggregationInput[]
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: followScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowCountAggregateInputType | true
    _avg?: FollowAvgAggregateInputType
    _sum?: FollowSumAggregateInputType
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    follow_id: number
    reg_id: number
    store_id: number
    is_followed: boolean
    _count: FollowCountAggregateOutputType | null
    _avg: FollowAvgAggregateOutputType | null
    _sum: FollowSumAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends followGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type followSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    follow_id?: boolean
    reg_id?: boolean
    store_id?: boolean
    is_followed?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type followSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    follow_id?: boolean
    reg_id?: boolean
    store_id?: boolean
    is_followed?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type followSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    follow_id?: boolean
    reg_id?: boolean
    store_id?: boolean
    is_followed?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type followSelectScalar = {
    follow_id?: boolean
    reg_id?: boolean
    store_id?: boolean
    is_followed?: boolean
  }

  export type followOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"follow_id" | "reg_id" | "store_id" | "is_followed", ExtArgs["result"]["follow"]>
  export type followInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
  }
  export type followIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
  }
  export type followIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
  }

  export type $followPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "follow"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      store: Prisma.$storePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      follow_id: number
      reg_id: number
      store_id: number
      is_followed: boolean
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }

  type followGetPayload<S extends boolean | null | undefined | followDefaultArgs> = $Result.GetResult<Prisma.$followPayload, S>

  type followCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<followFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowCountAggregateInputType | true
    }

  export interface followDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['follow'], meta: { name: 'follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {followFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends followFindUniqueArgs>(args: SelectSubset<T, followFindUniqueArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {followFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends followFindUniqueOrThrowArgs>(args: SelectSubset<T, followFindUniqueOrThrowArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends followFindFirstArgs>(args?: SelectSubset<T, followFindFirstArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends followFindFirstOrThrowArgs>(args?: SelectSubset<T, followFindFirstOrThrowArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `follow_id`
     * const followWithFollow_idOnly = await prisma.follow.findMany({ select: { follow_id: true } })
     * 
     */
    findMany<T extends followFindManyArgs>(args?: SelectSubset<T, followFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follow.
     * @param {followCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
     */
    create<T extends followCreateArgs>(args: SelectSubset<T, followCreateArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {followCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends followCreateManyArgs>(args?: SelectSubset<T, followCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {followCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Follows and only return the `follow_id`
     * const followWithFollow_idOnly = await prisma.follow.createManyAndReturn({
     *   select: { follow_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends followCreateManyAndReturnArgs>(args?: SelectSubset<T, followCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Follow.
     * @param {followDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
     */
    delete<T extends followDeleteArgs>(args: SelectSubset<T, followDeleteArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follow.
     * @param {followUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends followUpdateArgs>(args: SelectSubset<T, followUpdateArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {followDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends followDeleteManyArgs>(args?: SelectSubset<T, followDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends followUpdateManyArgs>(args: SelectSubset<T, followUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows and returns the data updated in the database.
     * @param {followUpdateManyAndReturnArgs} args - Arguments to update many Follows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Follows and only return the `follow_id`
     * const followWithFollow_idOnly = await prisma.follow.updateManyAndReturn({
     *   select: { follow_id: true },
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
    updateManyAndReturn<T extends followUpdateManyAndReturnArgs>(args: SelectSubset<T, followUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Follow.
     * @param {followUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends followUpsertArgs>(args: SelectSubset<T, followUpsertArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends followCountArgs>(
      args?: Subset<T, followCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followGroupByArgs} args - Group by arguments.
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
      T extends followGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: followGroupByArgs['orderBy'] }
        : { orderBy?: followGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, followGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the follow model
   */
  readonly fields: followFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__followClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    store<T extends storeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, storeDefaultArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the follow model
   */
  interface followFieldRefs {
    readonly follow_id: FieldRef<"follow", 'Int'>
    readonly reg_id: FieldRef<"follow", 'Int'>
    readonly store_id: FieldRef<"follow", 'Int'>
    readonly is_followed: FieldRef<"follow", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * follow findUnique
   */
  export type followFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * Filter, which follow to fetch.
     */
    where: followWhereUniqueInput
  }

  /**
   * follow findUniqueOrThrow
   */
  export type followFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * Filter, which follow to fetch.
     */
    where: followWhereUniqueInput
  }

  /**
   * follow findFirst
   */
  export type followFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * Filter, which follow to fetch.
     */
    where?: followWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followOrderByWithRelationInput | followOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for follows.
     */
    cursor?: followWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * follow findFirstOrThrow
   */
  export type followFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * Filter, which follow to fetch.
     */
    where?: followWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followOrderByWithRelationInput | followOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for follows.
     */
    cursor?: followWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * follow findMany
   */
  export type followFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * Filter, which follows to fetch.
     */
    where?: followWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followOrderByWithRelationInput | followOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing follows.
     */
    cursor?: followWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * follow create
   */
  export type followCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * The data needed to create a follow.
     */
    data: XOR<followCreateInput, followUncheckedCreateInput>
  }

  /**
   * follow createMany
   */
  export type followCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many follows.
     */
    data: followCreateManyInput | followCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * follow createManyAndReturn
   */
  export type followCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * The data used to create many follows.
     */
    data: followCreateManyInput | followCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * follow update
   */
  export type followUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * The data needed to update a follow.
     */
    data: XOR<followUpdateInput, followUncheckedUpdateInput>
    /**
     * Choose, which follow to update.
     */
    where: followWhereUniqueInput
  }

  /**
   * follow updateMany
   */
  export type followUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update follows.
     */
    data: XOR<followUpdateManyMutationInput, followUncheckedUpdateManyInput>
    /**
     * Filter which follows to update
     */
    where?: followWhereInput
    /**
     * Limit how many follows to update.
     */
    limit?: number
  }

  /**
   * follow updateManyAndReturn
   */
  export type followUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * The data used to update follows.
     */
    data: XOR<followUpdateManyMutationInput, followUncheckedUpdateManyInput>
    /**
     * Filter which follows to update
     */
    where?: followWhereInput
    /**
     * Limit how many follows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * follow upsert
   */
  export type followUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * The filter to search for the follow to update in case it exists.
     */
    where: followWhereUniqueInput
    /**
     * In case the follow found by the `where` argument doesn't exist, create a new follow with this data.
     */
    create: XOR<followCreateInput, followUncheckedCreateInput>
    /**
     * In case the follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<followUpdateInput, followUncheckedUpdateInput>
  }

  /**
   * follow delete
   */
  export type followDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * Filter which follow to delete.
     */
    where: followWhereUniqueInput
  }

  /**
   * follow deleteMany
   */
  export type followDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which follows to delete
     */
    where?: followWhereInput
    /**
     * Limit how many follows to delete.
     */
    limit?: number
  }

  /**
   * follow without action
   */
  export type followDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
  }


  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    order_id: number | null
    reg_id: number | null
    total_price: number | null
  }

  export type OrderSumAggregateOutputType = {
    order_id: number | null
    reg_id: number | null
    total_price: number | null
  }

  export type OrderMinAggregateOutputType = {
    order_id: number | null
    reg_id: number | null
    guest_name: string | null
    guest_mobile: string | null
    guest_address: string | null
    total_price: number | null
    courier_service: string | null
    status: string | null
    order_date: Date | null
    deliver_date: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    order_id: number | null
    reg_id: number | null
    guest_name: string | null
    guest_mobile: string | null
    guest_address: string | null
    total_price: number | null
    courier_service: string | null
    status: string | null
    order_date: Date | null
    deliver_date: Date | null
  }

  export type OrderCountAggregateOutputType = {
    order_id: number
    reg_id: number
    guest_name: number
    guest_mobile: number
    guest_address: number
    total_price: number
    courier_service: number
    status: number
    order_date: number
    deliver_date: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    order_id?: true
    reg_id?: true
    total_price?: true
  }

  export type OrderSumAggregateInputType = {
    order_id?: true
    reg_id?: true
    total_price?: true
  }

  export type OrderMinAggregateInputType = {
    order_id?: true
    reg_id?: true
    guest_name?: true
    guest_mobile?: true
    guest_address?: true
    total_price?: true
    courier_service?: true
    status?: true
    order_date?: true
    deliver_date?: true
  }

  export type OrderMaxAggregateInputType = {
    order_id?: true
    reg_id?: true
    guest_name?: true
    guest_mobile?: true
    guest_address?: true
    total_price?: true
    courier_service?: true
    status?: true
    order_date?: true
    deliver_date?: true
  }

  export type OrderCountAggregateInputType = {
    order_id?: true
    reg_id?: true
    guest_name?: true
    guest_mobile?: true
    guest_address?: true
    total_price?: true
    courier_service?: true
    status?: true
    order_date?: true
    deliver_date?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    order_id: number
    reg_id: number | null
    guest_name: string | null
    guest_mobile: string | null
    guest_address: string | null
    total_price: number
    courier_service: string
    status: string
    order_date: Date
    deliver_date: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    reg_id?: boolean
    guest_name?: boolean
    guest_mobile?: boolean
    guest_address?: boolean
    total_price?: boolean
    courier_service?: boolean
    status?: boolean
    order_date?: boolean
    deliver_date?: boolean
    user?: boolean | order$userArgs<ExtArgs>
    order_items?: boolean | order$order_itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    reg_id?: boolean
    guest_name?: boolean
    guest_mobile?: boolean
    guest_address?: boolean
    total_price?: boolean
    courier_service?: boolean
    status?: boolean
    order_date?: boolean
    deliver_date?: boolean
    user?: boolean | order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    reg_id?: boolean
    guest_name?: boolean
    guest_mobile?: boolean
    guest_address?: boolean
    total_price?: boolean
    courier_service?: boolean
    status?: boolean
    order_date?: boolean
    deliver_date?: boolean
    user?: boolean | order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectScalar = {
    order_id?: boolean
    reg_id?: boolean
    guest_name?: boolean
    guest_mobile?: boolean
    guest_address?: boolean
    total_price?: boolean
    courier_service?: boolean
    status?: boolean
    order_date?: boolean
    deliver_date?: boolean
  }

  export type orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "reg_id" | "guest_name" | "guest_mobile" | "guest_address" | "total_price" | "courier_service" | "status" | "order_date" | "deliver_date", ExtArgs["result"]["order"]>
  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | order$userArgs<ExtArgs>
    order_items?: boolean | order$order_itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type orderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | order$userArgs<ExtArgs>
  }
  export type orderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | order$userArgs<ExtArgs>
  }

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      order_items: Prisma.$order_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      reg_id: number | null
      guest_name: string | null
      guest_mobile: string | null
      guest_address: string | null
      total_price: number
      courier_service: string
      status: string
      order_date: Date
      deliver_date: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const orderWithOrder_idOnly = await prisma.order.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {orderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `order_id`
     * const orderWithOrder_idOnly = await prisma.order.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderCreateManyAndReturnArgs>(args?: SelectSubset<T, orderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {orderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `order_id`
     * const orderWithOrder_idOnly = await prisma.order.updateManyAndReturn({
     *   select: { order_id: true },
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
    updateManyAndReturn<T extends orderUpdateManyAndReturnArgs>(args: SelectSubset<T, orderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
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
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends order$userArgs<ExtArgs> = {}>(args?: Subset<T, order$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order_items<T extends order$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, order$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly order_id: FieldRef<"order", 'Int'>
    readonly reg_id: FieldRef<"order", 'Int'>
    readonly guest_name: FieldRef<"order", 'String'>
    readonly guest_mobile: FieldRef<"order", 'String'>
    readonly guest_address: FieldRef<"order", 'String'>
    readonly total_price: FieldRef<"order", 'Float'>
    readonly courier_service: FieldRef<"order", 'String'>
    readonly status: FieldRef<"order", 'String'>
    readonly order_date: FieldRef<"order", 'DateTime'>
    readonly deliver_date: FieldRef<"order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order createManyAndReturn
   */
  export type orderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order updateManyAndReturn
   */
  export type orderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * order.user
   */
  export type order$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * order.order_items
   */
  export type order$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    cursor?: order_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
  }


  /**
   * Model order_item
   */

  export type AggregateOrder_item = {
    _count: Order_itemCountAggregateOutputType | null
    _avg: Order_itemAvgAggregateOutputType | null
    _sum: Order_itemSumAggregateOutputType | null
    _min: Order_itemMinAggregateOutputType | null
    _max: Order_itemMaxAggregateOutputType | null
  }

  export type Order_itemAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_itemSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_itemMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_itemMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_itemCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    price: number
    _all: number
  }


  export type Order_itemAvgAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemSumAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type Order_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_item to aggregate.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemMaxAggregateInputType
  }

  export type GetOrder_itemAggregateType<T extends Order_itemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_item[P]>
      : GetScalarType<T[P], AggregateOrder_item[P]>
  }




  export type order_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithAggregationInput | order_itemOrderByWithAggregationInput[]
    by: Order_itemScalarFieldEnum[] | Order_itemScalarFieldEnum
    having?: order_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemCountAggregateInputType | true
    _avg?: Order_itemAvgAggregateInputType
    _sum?: Order_itemSumAggregateInputType
    _min?: Order_itemMinAggregateInputType
    _max?: Order_itemMaxAggregateInputType
  }

  export type Order_itemGroupByOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    price: number
    _count: Order_itemCountAggregateOutputType | null
    _avg: Order_itemAvgAggregateOutputType | null
    _sum: Order_itemSumAggregateOutputType | null
    _min: Order_itemMinAggregateOutputType | null
    _max: Order_itemMaxAggregateOutputType | null
  }

  type GetOrder_itemGroupByPayload<T extends order_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
        }
      >
    >


  export type order_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>

  export type order_itemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>

  export type order_itemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>

  export type order_itemSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type order_itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "quantity" | "price", ExtArgs["result"]["order_item"]>
  export type order_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type order_itemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type order_itemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $order_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_item"
    objects: {
      order: Prisma.$orderPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      product_id: number
      quantity: number
      price: number
    }, ExtArgs["result"]["order_item"]>
    composites: {}
  }

  type order_itemGetPayload<S extends boolean | null | undefined | order_itemDefaultArgs> = $Result.GetResult<Prisma.$order_itemPayload, S>

  type order_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemCountAggregateInputType | true
    }

  export interface order_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_item'], meta: { name: 'order_item' } }
    /**
     * Find zero or one Order_item that matches the filter.
     * @param {order_itemFindUniqueArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemFindUniqueArgs>(args: SelectSubset<T, order_itemFindUniqueArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemFindUniqueOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemFindFirstArgs>(args?: SelectSubset<T, order_itemFindFirstArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_item.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemWithIdOnly = await prisma.order_item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_itemFindManyArgs>(args?: SelectSubset<T, order_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_item.
     * @param {order_itemCreateArgs} args - Arguments to create a Order_item.
     * @example
     * // Create one Order_item
     * const Order_item = await prisma.order_item.create({
     *   data: {
     *     // ... data to create a Order_item
     *   }
     * })
     * 
     */
    create<T extends order_itemCreateArgs>(args: SelectSubset<T, order_itemCreateArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_item = await prisma.order_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemCreateManyArgs>(args?: SelectSubset<T, order_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_items and returns the data saved in the database.
     * @param {order_itemCreateManyAndReturnArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_item = await prisma.order_item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_items and only return the `id`
     * const order_itemWithIdOnly = await prisma.order_item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_itemCreateManyAndReturnArgs>(args?: SelectSubset<T, order_itemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_item.
     * @param {order_itemDeleteArgs} args - Arguments to delete one Order_item.
     * @example
     * // Delete one Order_item
     * const Order_item = await prisma.order_item.delete({
     *   where: {
     *     // ... filter to delete one Order_item
     *   }
     * })
     * 
     */
    delete<T extends order_itemDeleteArgs>(args: SelectSubset<T, order_itemDeleteArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_item.
     * @param {order_itemUpdateArgs} args - Arguments to update one Order_item.
     * @example
     * // Update one Order_item
     * const order_item = await prisma.order_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemUpdateArgs>(args: SelectSubset<T, order_itemUpdateArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemDeleteManyArgs>(args?: SelectSubset<T, order_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_item = await prisma.order_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemUpdateManyArgs>(args: SelectSubset<T, order_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items and returns the data updated in the database.
     * @param {order_itemUpdateManyAndReturnArgs} args - Arguments to update many Order_items.
     * @example
     * // Update many Order_items
     * const order_item = await prisma.order_item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_items and only return the `id`
     * const order_itemWithIdOnly = await prisma.order_item.updateManyAndReturn({
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
    updateManyAndReturn<T extends order_itemUpdateManyAndReturnArgs>(args: SelectSubset<T, order_itemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_item.
     * @param {order_itemUpsertArgs} args - Arguments to update or create a Order_item.
     * @example
     * // Update or create a Order_item
     * const order_item = await prisma.order_item.upsert({
     *   create: {
     *     // ... data to create a Order_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_item we want to update
     *   }
     * })
     */
    upsert<T extends order_itemUpsertArgs>(args: SelectSubset<T, order_itemUpsertArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_item.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemCountArgs>(
      args?: Subset<T, order_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_itemAggregateArgs>(args: Subset<T, Order_itemAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemAggregateType<T>>

    /**
     * Group by Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemGroupByArgs} args - Group by arguments.
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
      T extends order_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemGroupByArgs['orderBy'] }
        : { orderBy?: order_itemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_item model
   */
  readonly fields: order_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the order_item model
   */
  interface order_itemFieldRefs {
    readonly id: FieldRef<"order_item", 'Int'>
    readonly order_id: FieldRef<"order_item", 'Int'>
    readonly product_id: FieldRef<"order_item", 'Int'>
    readonly quantity: FieldRef<"order_item", 'Int'>
    readonly price: FieldRef<"order_item", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * order_item findUnique
   */
  export type order_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item findUniqueOrThrow
   */
  export type order_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item findFirst
   */
  export type order_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item findFirstOrThrow
   */
  export type order_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item findMany
   */
  export type order_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item create
   */
  export type order_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The data needed to create a order_item.
     */
    data: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>
  }

  /**
   * order_item createMany
   */
  export type order_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemCreateManyInput | order_itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_item createManyAndReturn
   */
  export type order_itemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * The data used to create many order_items.
     */
    data: order_itemCreateManyInput | order_itemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_item update
   */
  export type order_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The data needed to update a order_item.
     */
    data: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>
    /**
     * Choose, which order_item to update.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item updateMany
   */
  export type order_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_item updateManyAndReturn
   */
  export type order_itemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_item upsert
   */
  export type order_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The filter to search for the order_item to update in case it exists.
     */
    where: order_itemWhereUniqueInput
    /**
     * In case the order_item found by the `where` argument doesn't exist, create a new order_item with this data.
     */
    create: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>
    /**
     * In case the order_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>
  }

  /**
   * order_item delete
   */
  export type order_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter which order_item to delete.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item deleteMany
   */
  export type order_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_item without action
   */
  export type order_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
  }


  /**
   * Model Advertisement
   */

  export type AggregateAdvertisement = {
    _count: AdvertisementCountAggregateOutputType | null
    _avg: AdvertisementAvgAggregateOutputType | null
    _sum: AdvertisementSumAggregateOutputType | null
    _min: AdvertisementMinAggregateOutputType | null
    _max: AdvertisementMaxAggregateOutputType | null
  }

  export type AdvertisementAvgAggregateOutputType = {
    id: number | null
  }

  export type AdvertisementSumAggregateOutputType = {
    id: number | null
  }

  export type AdvertisementMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    imageUrl: string | null
  }

  export type AdvertisementMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    imageUrl: string | null
  }

  export type AdvertisementCountAggregateOutputType = {
    id: number
    created_at: number
    imageUrl: number
    _all: number
  }


  export type AdvertisementAvgAggregateInputType = {
    id?: true
  }

  export type AdvertisementSumAggregateInputType = {
    id?: true
  }

  export type AdvertisementMinAggregateInputType = {
    id?: true
    created_at?: true
    imageUrl?: true
  }

  export type AdvertisementMaxAggregateInputType = {
    id?: true
    created_at?: true
    imageUrl?: true
  }

  export type AdvertisementCountAggregateInputType = {
    id?: true
    created_at?: true
    imageUrl?: true
    _all?: true
  }

  export type AdvertisementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advertisement to aggregate.
     */
    where?: AdvertisementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisements to fetch.
     */
    orderBy?: AdvertisementOrderByWithRelationInput | AdvertisementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvertisementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Advertisements
    **/
    _count?: true | AdvertisementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdvertisementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdvertisementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvertisementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvertisementMaxAggregateInputType
  }

  export type GetAdvertisementAggregateType<T extends AdvertisementAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvertisement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvertisement[P]>
      : GetScalarType<T[P], AggregateAdvertisement[P]>
  }




  export type AdvertisementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertisementWhereInput
    orderBy?: AdvertisementOrderByWithAggregationInput | AdvertisementOrderByWithAggregationInput[]
    by: AdvertisementScalarFieldEnum[] | AdvertisementScalarFieldEnum
    having?: AdvertisementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvertisementCountAggregateInputType | true
    _avg?: AdvertisementAvgAggregateInputType
    _sum?: AdvertisementSumAggregateInputType
    _min?: AdvertisementMinAggregateInputType
    _max?: AdvertisementMaxAggregateInputType
  }

  export type AdvertisementGroupByOutputType = {
    id: number
    created_at: Date
    imageUrl: string
    _count: AdvertisementCountAggregateOutputType | null
    _avg: AdvertisementAvgAggregateOutputType | null
    _sum: AdvertisementSumAggregateOutputType | null
    _min: AdvertisementMinAggregateOutputType | null
    _max: AdvertisementMaxAggregateOutputType | null
  }

  type GetAdvertisementGroupByPayload<T extends AdvertisementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvertisementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvertisementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvertisementGroupByOutputType[P]>
            : GetScalarType<T[P], AdvertisementGroupByOutputType[P]>
        }
      >
    >


  export type AdvertisementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["advertisement"]>

  export type AdvertisementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["advertisement"]>

  export type AdvertisementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["advertisement"]>

  export type AdvertisementSelectScalar = {
    id?: boolean
    created_at?: boolean
    imageUrl?: boolean
  }

  export type AdvertisementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "imageUrl", ExtArgs["result"]["advertisement"]>

  export type $AdvertisementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Advertisement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      imageUrl: string
    }, ExtArgs["result"]["advertisement"]>
    composites: {}
  }

  type AdvertisementGetPayload<S extends boolean | null | undefined | AdvertisementDefaultArgs> = $Result.GetResult<Prisma.$AdvertisementPayload, S>

  type AdvertisementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvertisementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvertisementCountAggregateInputType | true
    }

  export interface AdvertisementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Advertisement'], meta: { name: 'Advertisement' } }
    /**
     * Find zero or one Advertisement that matches the filter.
     * @param {AdvertisementFindUniqueArgs} args - Arguments to find a Advertisement
     * @example
     * // Get one Advertisement
     * const advertisement = await prisma.advertisement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvertisementFindUniqueArgs>(args: SelectSubset<T, AdvertisementFindUniqueArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Advertisement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvertisementFindUniqueOrThrowArgs} args - Arguments to find a Advertisement
     * @example
     * // Get one Advertisement
     * const advertisement = await prisma.advertisement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvertisementFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvertisementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advertisement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementFindFirstArgs} args - Arguments to find a Advertisement
     * @example
     * // Get one Advertisement
     * const advertisement = await prisma.advertisement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvertisementFindFirstArgs>(args?: SelectSubset<T, AdvertisementFindFirstArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advertisement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementFindFirstOrThrowArgs} args - Arguments to find a Advertisement
     * @example
     * // Get one Advertisement
     * const advertisement = await prisma.advertisement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvertisementFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvertisementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Advertisements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Advertisements
     * const advertisements = await prisma.advertisement.findMany()
     * 
     * // Get first 10 Advertisements
     * const advertisements = await prisma.advertisement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advertisementWithIdOnly = await prisma.advertisement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvertisementFindManyArgs>(args?: SelectSubset<T, AdvertisementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Advertisement.
     * @param {AdvertisementCreateArgs} args - Arguments to create a Advertisement.
     * @example
     * // Create one Advertisement
     * const Advertisement = await prisma.advertisement.create({
     *   data: {
     *     // ... data to create a Advertisement
     *   }
     * })
     * 
     */
    create<T extends AdvertisementCreateArgs>(args: SelectSubset<T, AdvertisementCreateArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Advertisements.
     * @param {AdvertisementCreateManyArgs} args - Arguments to create many Advertisements.
     * @example
     * // Create many Advertisements
     * const advertisement = await prisma.advertisement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvertisementCreateManyArgs>(args?: SelectSubset<T, AdvertisementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Advertisements and returns the data saved in the database.
     * @param {AdvertisementCreateManyAndReturnArgs} args - Arguments to create many Advertisements.
     * @example
     * // Create many Advertisements
     * const advertisement = await prisma.advertisement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Advertisements and only return the `id`
     * const advertisementWithIdOnly = await prisma.advertisement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvertisementCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvertisementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Advertisement.
     * @param {AdvertisementDeleteArgs} args - Arguments to delete one Advertisement.
     * @example
     * // Delete one Advertisement
     * const Advertisement = await prisma.advertisement.delete({
     *   where: {
     *     // ... filter to delete one Advertisement
     *   }
     * })
     * 
     */
    delete<T extends AdvertisementDeleteArgs>(args: SelectSubset<T, AdvertisementDeleteArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Advertisement.
     * @param {AdvertisementUpdateArgs} args - Arguments to update one Advertisement.
     * @example
     * // Update one Advertisement
     * const advertisement = await prisma.advertisement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvertisementUpdateArgs>(args: SelectSubset<T, AdvertisementUpdateArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Advertisements.
     * @param {AdvertisementDeleteManyArgs} args - Arguments to filter Advertisements to delete.
     * @example
     * // Delete a few Advertisements
     * const { count } = await prisma.advertisement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvertisementDeleteManyArgs>(args?: SelectSubset<T, AdvertisementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advertisements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Advertisements
     * const advertisement = await prisma.advertisement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvertisementUpdateManyArgs>(args: SelectSubset<T, AdvertisementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advertisements and returns the data updated in the database.
     * @param {AdvertisementUpdateManyAndReturnArgs} args - Arguments to update many Advertisements.
     * @example
     * // Update many Advertisements
     * const advertisement = await prisma.advertisement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Advertisements and only return the `id`
     * const advertisementWithIdOnly = await prisma.advertisement.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdvertisementUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvertisementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Advertisement.
     * @param {AdvertisementUpsertArgs} args - Arguments to update or create a Advertisement.
     * @example
     * // Update or create a Advertisement
     * const advertisement = await prisma.advertisement.upsert({
     *   create: {
     *     // ... data to create a Advertisement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Advertisement we want to update
     *   }
     * })
     */
    upsert<T extends AdvertisementUpsertArgs>(args: SelectSubset<T, AdvertisementUpsertArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Advertisements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementCountArgs} args - Arguments to filter Advertisements to count.
     * @example
     * // Count the number of Advertisements
     * const count = await prisma.advertisement.count({
     *   where: {
     *     // ... the filter for the Advertisements we want to count
     *   }
     * })
    **/
    count<T extends AdvertisementCountArgs>(
      args?: Subset<T, AdvertisementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvertisementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Advertisement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdvertisementAggregateArgs>(args: Subset<T, AdvertisementAggregateArgs>): Prisma.PrismaPromise<GetAdvertisementAggregateType<T>>

    /**
     * Group by Advertisement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementGroupByArgs} args - Group by arguments.
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
      T extends AdvertisementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvertisementGroupByArgs['orderBy'] }
        : { orderBy?: AdvertisementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdvertisementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvertisementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Advertisement model
   */
  readonly fields: AdvertisementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Advertisement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvertisementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Advertisement model
   */
  interface AdvertisementFieldRefs {
    readonly id: FieldRef<"Advertisement", 'Int'>
    readonly created_at: FieldRef<"Advertisement", 'DateTime'>
    readonly imageUrl: FieldRef<"Advertisement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Advertisement findUnique
   */
  export type AdvertisementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisement to fetch.
     */
    where: AdvertisementWhereUniqueInput
  }

  /**
   * Advertisement findUniqueOrThrow
   */
  export type AdvertisementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisement to fetch.
     */
    where: AdvertisementWhereUniqueInput
  }

  /**
   * Advertisement findFirst
   */
  export type AdvertisementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisement to fetch.
     */
    where?: AdvertisementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisements to fetch.
     */
    orderBy?: AdvertisementOrderByWithRelationInput | AdvertisementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advertisements.
     */
    cursor?: AdvertisementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advertisements.
     */
    distinct?: AdvertisementScalarFieldEnum | AdvertisementScalarFieldEnum[]
  }

  /**
   * Advertisement findFirstOrThrow
   */
  export type AdvertisementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisement to fetch.
     */
    where?: AdvertisementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisements to fetch.
     */
    orderBy?: AdvertisementOrderByWithRelationInput | AdvertisementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advertisements.
     */
    cursor?: AdvertisementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advertisements.
     */
    distinct?: AdvertisementScalarFieldEnum | AdvertisementScalarFieldEnum[]
  }

  /**
   * Advertisement findMany
   */
  export type AdvertisementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisements to fetch.
     */
    where?: AdvertisementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisements to fetch.
     */
    orderBy?: AdvertisementOrderByWithRelationInput | AdvertisementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Advertisements.
     */
    cursor?: AdvertisementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisements.
     */
    skip?: number
    distinct?: AdvertisementScalarFieldEnum | AdvertisementScalarFieldEnum[]
  }

  /**
   * Advertisement create
   */
  export type AdvertisementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The data needed to create a Advertisement.
     */
    data: XOR<AdvertisementCreateInput, AdvertisementUncheckedCreateInput>
  }

  /**
   * Advertisement createMany
   */
  export type AdvertisementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Advertisements.
     */
    data: AdvertisementCreateManyInput | AdvertisementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Advertisement createManyAndReturn
   */
  export type AdvertisementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The data used to create many Advertisements.
     */
    data: AdvertisementCreateManyInput | AdvertisementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Advertisement update
   */
  export type AdvertisementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The data needed to update a Advertisement.
     */
    data: XOR<AdvertisementUpdateInput, AdvertisementUncheckedUpdateInput>
    /**
     * Choose, which Advertisement to update.
     */
    where: AdvertisementWhereUniqueInput
  }

  /**
   * Advertisement updateMany
   */
  export type AdvertisementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Advertisements.
     */
    data: XOR<AdvertisementUpdateManyMutationInput, AdvertisementUncheckedUpdateManyInput>
    /**
     * Filter which Advertisements to update
     */
    where?: AdvertisementWhereInput
    /**
     * Limit how many Advertisements to update.
     */
    limit?: number
  }

  /**
   * Advertisement updateManyAndReturn
   */
  export type AdvertisementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The data used to update Advertisements.
     */
    data: XOR<AdvertisementUpdateManyMutationInput, AdvertisementUncheckedUpdateManyInput>
    /**
     * Filter which Advertisements to update
     */
    where?: AdvertisementWhereInput
    /**
     * Limit how many Advertisements to update.
     */
    limit?: number
  }

  /**
   * Advertisement upsert
   */
  export type AdvertisementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The filter to search for the Advertisement to update in case it exists.
     */
    where: AdvertisementWhereUniqueInput
    /**
     * In case the Advertisement found by the `where` argument doesn't exist, create a new Advertisement with this data.
     */
    create: XOR<AdvertisementCreateInput, AdvertisementUncheckedCreateInput>
    /**
     * In case the Advertisement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvertisementUpdateInput, AdvertisementUncheckedUpdateInput>
  }

  /**
   * Advertisement delete
   */
  export type AdvertisementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter which Advertisement to delete.
     */
    where: AdvertisementWhereUniqueInput
  }

  /**
   * Advertisement deleteMany
   */
  export type AdvertisementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advertisements to delete
     */
    where?: AdvertisementWhereInput
    /**
     * Limit how many Advertisements to delete.
     */
    limit?: number
  }

  /**
   * Advertisement without action
   */
  export type AdvertisementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    reg_id: 'reg_id',
    fullName: 'fullName',
    username: 'username',
    email: 'email',
    password: 'password',
    mobileNo: 'mobileNo',
    gender: 'gender',
    address: 'address',
    role: 'role',
    isSeller: 'isSeller'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SellerScalarFieldEnum: {
    seller_id: 'seller_id',
    mobile_no1: 'mobile_no1',
    mobile_no2: 'mobile_no2',
    reg_id: 'reg_id',
    store_id: 'store_id',
    isBlocked: 'isBlocked',
    warning1: 'warning1',
    warning2: 'warning2',
    warning3: 'warning3'
  };

  export type SellerScalarFieldEnum = (typeof SellerScalarFieldEnum)[keyof typeof SellerScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    product_id: 'product_id',
    name: 'name',
    description: 'description',
    price: 'price',
    stock: 'stock',
    store_id: 'store_id',
    category: 'category',
    isPremium: 'isPremium',
    product_image: 'product_image',
    store_name: 'store_name',
    store_image: 'store_image'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    store_id: 'store_id',
    store_name: 'store_name',
    business_email: 'business_email',
    business_regNo: 'business_regNo',
    business_address: 'business_address',
    store_image: 'store_image'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const CartScalarFieldEnum: {
    cart_id: 'cart_id',
    reg_id: 'reg_id',
    product_id: 'product_id',
    quantity: 'quantity',
    price: 'price',
    description: 'description',
    created_at: 'created_at',
    product_image: 'product_image'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    fav_id: 'fav_id',
    reg_id: 'reg_id',
    product_id: 'product_id'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    review_id: 'review_id',
    content: 'content',
    userName: 'userName',
    product_id: 'product_id'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    follow_id: 'follow_id',
    reg_id: 'reg_id',
    store_id: 'store_id',
    is_followed: 'is_followed'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    order_id: 'order_id',
    reg_id: 'reg_id',
    guest_name: 'guest_name',
    guest_mobile: 'guest_mobile',
    guest_address: 'guest_address',
    total_price: 'total_price',
    courier_service: 'courier_service',
    status: 'status',
    order_date: 'order_date',
    deliver_date: 'deliver_date'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const Order_itemScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity',
    price: 'price'
  };

  export type Order_itemScalarFieldEnum = (typeof Order_itemScalarFieldEnum)[keyof typeof Order_itemScalarFieldEnum]


  export const AdvertisementScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    imageUrl: 'imageUrl'
  };

  export type AdvertisementScalarFieldEnum = (typeof AdvertisementScalarFieldEnum)[keyof typeof AdvertisementScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    reg_id?: IntFilter<"user"> | number
    fullName?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    mobileNo?: StringFilter<"user"> | string
    gender?: StringFilter<"user"> | string
    address?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    isSeller?: BoolFilter<"user"> | boolean
    follows?: FollowListRelationFilter
    carts?: CartListRelationFilter
    favorites?: FavoriteListRelationFilter
    seller?: XOR<SellerNullableScalarRelationFilter, sellerWhereInput> | null
    orders?: OrderListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    reg_id?: SortOrder
    fullName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobileNo?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    role?: SortOrder
    isSeller?: SortOrder
    follows?: followOrderByRelationAggregateInput
    carts?: cartOrderByRelationAggregateInput
    favorites?: favoriteOrderByRelationAggregateInput
    seller?: sellerOrderByWithRelationInput
    orders?: orderOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    reg_id?: number
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    fullName?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    mobileNo?: StringFilter<"user"> | string
    gender?: StringFilter<"user"> | string
    address?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    isSeller?: BoolFilter<"user"> | boolean
    follows?: FollowListRelationFilter
    carts?: CartListRelationFilter
    favorites?: FavoriteListRelationFilter
    seller?: XOR<SellerNullableScalarRelationFilter, sellerWhereInput> | null
    orders?: OrderListRelationFilter
  }, "reg_id" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    reg_id?: SortOrder
    fullName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobileNo?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    role?: SortOrder
    isSeller?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    reg_id?: IntWithAggregatesFilter<"user"> | number
    fullName?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    mobileNo?: StringWithAggregatesFilter<"user"> | string
    gender?: StringWithAggregatesFilter<"user"> | string
    address?: StringWithAggregatesFilter<"user"> | string
    role?: StringWithAggregatesFilter<"user"> | string
    isSeller?: BoolWithAggregatesFilter<"user"> | boolean
  }

  export type sellerWhereInput = {
    AND?: sellerWhereInput | sellerWhereInput[]
    OR?: sellerWhereInput[]
    NOT?: sellerWhereInput | sellerWhereInput[]
    seller_id?: IntFilter<"seller"> | number
    mobile_no1?: StringFilter<"seller"> | string
    mobile_no2?: StringFilter<"seller"> | string
    reg_id?: IntFilter<"seller"> | number
    store_id?: IntFilter<"seller"> | number
    isBlocked?: BoolFilter<"seller"> | boolean
    warning1?: StringNullableFilter<"seller"> | string | null
    warning2?: StringNullableFilter<"seller"> | string | null
    warning3?: StringNullableFilter<"seller"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    store?: XOR<StoreScalarRelationFilter, storeWhereInput>
  }

  export type sellerOrderByWithRelationInput = {
    seller_id?: SortOrder
    mobile_no1?: SortOrder
    mobile_no2?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
    isBlocked?: SortOrder
    warning1?: SortOrderInput | SortOrder
    warning2?: SortOrderInput | SortOrder
    warning3?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    store?: storeOrderByWithRelationInput
  }

  export type sellerWhereUniqueInput = Prisma.AtLeast<{
    seller_id?: number
    reg_id?: number
    store_id?: number
    AND?: sellerWhereInput | sellerWhereInput[]
    OR?: sellerWhereInput[]
    NOT?: sellerWhereInput | sellerWhereInput[]
    mobile_no1?: StringFilter<"seller"> | string
    mobile_no2?: StringFilter<"seller"> | string
    isBlocked?: BoolFilter<"seller"> | boolean
    warning1?: StringNullableFilter<"seller"> | string | null
    warning2?: StringNullableFilter<"seller"> | string | null
    warning3?: StringNullableFilter<"seller"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    store?: XOR<StoreScalarRelationFilter, storeWhereInput>
  }, "seller_id" | "reg_id" | "store_id">

  export type sellerOrderByWithAggregationInput = {
    seller_id?: SortOrder
    mobile_no1?: SortOrder
    mobile_no2?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
    isBlocked?: SortOrder
    warning1?: SortOrderInput | SortOrder
    warning2?: SortOrderInput | SortOrder
    warning3?: SortOrderInput | SortOrder
    _count?: sellerCountOrderByAggregateInput
    _avg?: sellerAvgOrderByAggregateInput
    _max?: sellerMaxOrderByAggregateInput
    _min?: sellerMinOrderByAggregateInput
    _sum?: sellerSumOrderByAggregateInput
  }

  export type sellerScalarWhereWithAggregatesInput = {
    AND?: sellerScalarWhereWithAggregatesInput | sellerScalarWhereWithAggregatesInput[]
    OR?: sellerScalarWhereWithAggregatesInput[]
    NOT?: sellerScalarWhereWithAggregatesInput | sellerScalarWhereWithAggregatesInput[]
    seller_id?: IntWithAggregatesFilter<"seller"> | number
    mobile_no1?: StringWithAggregatesFilter<"seller"> | string
    mobile_no2?: StringWithAggregatesFilter<"seller"> | string
    reg_id?: IntWithAggregatesFilter<"seller"> | number
    store_id?: IntWithAggregatesFilter<"seller"> | number
    isBlocked?: BoolWithAggregatesFilter<"seller"> | boolean
    warning1?: StringNullableWithAggregatesFilter<"seller"> | string | null
    warning2?: StringNullableWithAggregatesFilter<"seller"> | string | null
    warning3?: StringNullableWithAggregatesFilter<"seller"> | string | null
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    product_id?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
    price?: FloatFilter<"product"> | number
    stock?: IntFilter<"product"> | number
    store_id?: IntFilter<"product"> | number
    category?: StringFilter<"product"> | string
    isPremium?: BoolFilter<"product"> | boolean
    product_image?: StringNullableFilter<"product"> | string | null
    store_name?: StringFilter<"product"> | string
    store_image?: StringNullableFilter<"product"> | string | null
    store?: XOR<StoreScalarRelationFilter, storeWhereInput>
    carts?: CartListRelationFilter
    favorites?: FavoriteListRelationFilter
    reviews?: ReviewListRelationFilter
    order_items?: Order_itemListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    store_id?: SortOrder
    category?: SortOrder
    isPremium?: SortOrder
    product_image?: SortOrderInput | SortOrder
    store_name?: SortOrder
    store_image?: SortOrderInput | SortOrder
    store?: storeOrderByWithRelationInput
    carts?: cartOrderByRelationAggregateInput
    favorites?: favoriteOrderByRelationAggregateInput
    reviews?: reviewOrderByRelationAggregateInput
    order_items?: order_itemOrderByRelationAggregateInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
    price?: FloatFilter<"product"> | number
    stock?: IntFilter<"product"> | number
    store_id?: IntFilter<"product"> | number
    category?: StringFilter<"product"> | string
    isPremium?: BoolFilter<"product"> | boolean
    product_image?: StringNullableFilter<"product"> | string | null
    store_name?: StringFilter<"product"> | string
    store_image?: StringNullableFilter<"product"> | string | null
    store?: XOR<StoreScalarRelationFilter, storeWhereInput>
    carts?: CartListRelationFilter
    favorites?: FavoriteListRelationFilter
    reviews?: ReviewListRelationFilter
    order_items?: Order_itemListRelationFilter
  }, "product_id">

  export type productOrderByWithAggregationInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    store_id?: SortOrder
    category?: SortOrder
    isPremium?: SortOrder
    product_image?: SortOrderInput | SortOrder
    store_name?: SortOrder
    store_image?: SortOrderInput | SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"product"> | number
    name?: StringWithAggregatesFilter<"product"> | string
    description?: StringWithAggregatesFilter<"product"> | string
    price?: FloatWithAggregatesFilter<"product"> | number
    stock?: IntWithAggregatesFilter<"product"> | number
    store_id?: IntWithAggregatesFilter<"product"> | number
    category?: StringWithAggregatesFilter<"product"> | string
    isPremium?: BoolWithAggregatesFilter<"product"> | boolean
    product_image?: StringNullableWithAggregatesFilter<"product"> | string | null
    store_name?: StringWithAggregatesFilter<"product"> | string
    store_image?: StringNullableWithAggregatesFilter<"product"> | string | null
  }

  export type storeWhereInput = {
    AND?: storeWhereInput | storeWhereInput[]
    OR?: storeWhereInput[]
    NOT?: storeWhereInput | storeWhereInput[]
    store_id?: IntFilter<"store"> | number
    store_name?: StringFilter<"store"> | string
    business_email?: StringFilter<"store"> | string
    business_regNo?: StringFilter<"store"> | string
    business_address?: StringNullableFilter<"store"> | string | null
    store_image?: StringNullableFilter<"store"> | string | null
    seller?: XOR<SellerNullableScalarRelationFilter, sellerWhereInput> | null
    products?: ProductListRelationFilter
    follows?: FollowListRelationFilter
  }

  export type storeOrderByWithRelationInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    business_email?: SortOrder
    business_regNo?: SortOrder
    business_address?: SortOrderInput | SortOrder
    store_image?: SortOrderInput | SortOrder
    seller?: sellerOrderByWithRelationInput
    products?: productOrderByRelationAggregateInput
    follows?: followOrderByRelationAggregateInput
  }

  export type storeWhereUniqueInput = Prisma.AtLeast<{
    store_id?: number
    store_name?: string
    business_email?: string
    business_regNo?: string
    AND?: storeWhereInput | storeWhereInput[]
    OR?: storeWhereInput[]
    NOT?: storeWhereInput | storeWhereInput[]
    business_address?: StringNullableFilter<"store"> | string | null
    store_image?: StringNullableFilter<"store"> | string | null
    seller?: XOR<SellerNullableScalarRelationFilter, sellerWhereInput> | null
    products?: ProductListRelationFilter
    follows?: FollowListRelationFilter
  }, "store_id" | "store_name" | "business_email" | "business_regNo">

  export type storeOrderByWithAggregationInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    business_email?: SortOrder
    business_regNo?: SortOrder
    business_address?: SortOrderInput | SortOrder
    store_image?: SortOrderInput | SortOrder
    _count?: storeCountOrderByAggregateInput
    _avg?: storeAvgOrderByAggregateInput
    _max?: storeMaxOrderByAggregateInput
    _min?: storeMinOrderByAggregateInput
    _sum?: storeSumOrderByAggregateInput
  }

  export type storeScalarWhereWithAggregatesInput = {
    AND?: storeScalarWhereWithAggregatesInput | storeScalarWhereWithAggregatesInput[]
    OR?: storeScalarWhereWithAggregatesInput[]
    NOT?: storeScalarWhereWithAggregatesInput | storeScalarWhereWithAggregatesInput[]
    store_id?: IntWithAggregatesFilter<"store"> | number
    store_name?: StringWithAggregatesFilter<"store"> | string
    business_email?: StringWithAggregatesFilter<"store"> | string
    business_regNo?: StringWithAggregatesFilter<"store"> | string
    business_address?: StringNullableWithAggregatesFilter<"store"> | string | null
    store_image?: StringNullableWithAggregatesFilter<"store"> | string | null
  }

  export type cartWhereInput = {
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    cart_id?: IntFilter<"cart"> | number
    reg_id?: IntFilter<"cart"> | number
    product_id?: IntFilter<"cart"> | number
    quantity?: IntFilter<"cart"> | number
    price?: StringFilter<"cart"> | string
    description?: StringFilter<"cart"> | string
    created_at?: DateTimeFilter<"cart"> | Date | string
    product_image?: StringFilter<"cart"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type cartOrderByWithRelationInput = {
    cart_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    product_image?: SortOrder
    user?: userOrderByWithRelationInput
    product?: productOrderByWithRelationInput
  }

  export type cartWhereUniqueInput = Prisma.AtLeast<{
    cart_id?: number
    reg_id_product_id?: cartReg_idProduct_idCompoundUniqueInput
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    reg_id?: IntFilter<"cart"> | number
    product_id?: IntFilter<"cart"> | number
    quantity?: IntFilter<"cart"> | number
    price?: StringFilter<"cart"> | string
    description?: StringFilter<"cart"> | string
    created_at?: DateTimeFilter<"cart"> | Date | string
    product_image?: StringFilter<"cart"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "cart_id" | "reg_id_product_id">

  export type cartOrderByWithAggregationInput = {
    cart_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    product_image?: SortOrder
    _count?: cartCountOrderByAggregateInput
    _avg?: cartAvgOrderByAggregateInput
    _max?: cartMaxOrderByAggregateInput
    _min?: cartMinOrderByAggregateInput
    _sum?: cartSumOrderByAggregateInput
  }

  export type cartScalarWhereWithAggregatesInput = {
    AND?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    OR?: cartScalarWhereWithAggregatesInput[]
    NOT?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    cart_id?: IntWithAggregatesFilter<"cart"> | number
    reg_id?: IntWithAggregatesFilter<"cart"> | number
    product_id?: IntWithAggregatesFilter<"cart"> | number
    quantity?: IntWithAggregatesFilter<"cart"> | number
    price?: StringWithAggregatesFilter<"cart"> | string
    description?: StringWithAggregatesFilter<"cart"> | string
    created_at?: DateTimeWithAggregatesFilter<"cart"> | Date | string
    product_image?: StringWithAggregatesFilter<"cart"> | string
  }

  export type favoriteWhereInput = {
    AND?: favoriteWhereInput | favoriteWhereInput[]
    OR?: favoriteWhereInput[]
    NOT?: favoriteWhereInput | favoriteWhereInput[]
    fav_id?: IntFilter<"favorite"> | number
    reg_id?: IntFilter<"favorite"> | number
    product_id?: IntFilter<"favorite"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type favoriteOrderByWithRelationInput = {
    fav_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
    user?: userOrderByWithRelationInput
    product?: productOrderByWithRelationInput
  }

  export type favoriteWhereUniqueInput = Prisma.AtLeast<{
    fav_id?: number
    reg_id_product_id?: favoriteReg_idProduct_idCompoundUniqueInput
    AND?: favoriteWhereInput | favoriteWhereInput[]
    OR?: favoriteWhereInput[]
    NOT?: favoriteWhereInput | favoriteWhereInput[]
    reg_id?: IntFilter<"favorite"> | number
    product_id?: IntFilter<"favorite"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "fav_id" | "reg_id_product_id">

  export type favoriteOrderByWithAggregationInput = {
    fav_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
    _count?: favoriteCountOrderByAggregateInput
    _avg?: favoriteAvgOrderByAggregateInput
    _max?: favoriteMaxOrderByAggregateInput
    _min?: favoriteMinOrderByAggregateInput
    _sum?: favoriteSumOrderByAggregateInput
  }

  export type favoriteScalarWhereWithAggregatesInput = {
    AND?: favoriteScalarWhereWithAggregatesInput | favoriteScalarWhereWithAggregatesInput[]
    OR?: favoriteScalarWhereWithAggregatesInput[]
    NOT?: favoriteScalarWhereWithAggregatesInput | favoriteScalarWhereWithAggregatesInput[]
    fav_id?: IntWithAggregatesFilter<"favorite"> | number
    reg_id?: IntWithAggregatesFilter<"favorite"> | number
    product_id?: IntWithAggregatesFilter<"favorite"> | number
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    review_id?: IntFilter<"review"> | number
    content?: StringFilter<"review"> | string
    userName?: StringFilter<"review"> | string
    product_id?: IntFilter<"review"> | number
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    review_id?: SortOrder
    content?: SortOrder
    userName?: SortOrder
    product_id?: SortOrder
    product?: productOrderByWithRelationInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    content?: StringFilter<"review"> | string
    userName?: StringFilter<"review"> | string
    product_id?: IntFilter<"review"> | number
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "review_id">

  export type reviewOrderByWithAggregationInput = {
    review_id?: SortOrder
    content?: SortOrder
    userName?: SortOrder
    product_id?: SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"review"> | number
    content?: StringWithAggregatesFilter<"review"> | string
    userName?: StringWithAggregatesFilter<"review"> | string
    product_id?: IntWithAggregatesFilter<"review"> | number
  }

  export type followWhereInput = {
    AND?: followWhereInput | followWhereInput[]
    OR?: followWhereInput[]
    NOT?: followWhereInput | followWhereInput[]
    follow_id?: IntFilter<"follow"> | number
    reg_id?: IntFilter<"follow"> | number
    store_id?: IntFilter<"follow"> | number
    is_followed?: BoolFilter<"follow"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    store?: XOR<StoreScalarRelationFilter, storeWhereInput>
  }

  export type followOrderByWithRelationInput = {
    follow_id?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
    is_followed?: SortOrder
    user?: userOrderByWithRelationInput
    store?: storeOrderByWithRelationInput
  }

  export type followWhereUniqueInput = Prisma.AtLeast<{
    follow_id?: number
    reg_id_store_id?: followReg_id_store_idCompoundUniqueInput
    AND?: followWhereInput | followWhereInput[]
    OR?: followWhereInput[]
    NOT?: followWhereInput | followWhereInput[]
    reg_id?: IntFilter<"follow"> | number
    store_id?: IntFilter<"follow"> | number
    is_followed?: BoolFilter<"follow"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    store?: XOR<StoreScalarRelationFilter, storeWhereInput>
  }, "follow_id" | "reg_id_store_id">

  export type followOrderByWithAggregationInput = {
    follow_id?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
    is_followed?: SortOrder
    _count?: followCountOrderByAggregateInput
    _avg?: followAvgOrderByAggregateInput
    _max?: followMaxOrderByAggregateInput
    _min?: followMinOrderByAggregateInput
    _sum?: followSumOrderByAggregateInput
  }

  export type followScalarWhereWithAggregatesInput = {
    AND?: followScalarWhereWithAggregatesInput | followScalarWhereWithAggregatesInput[]
    OR?: followScalarWhereWithAggregatesInput[]
    NOT?: followScalarWhereWithAggregatesInput | followScalarWhereWithAggregatesInput[]
    follow_id?: IntWithAggregatesFilter<"follow"> | number
    reg_id?: IntWithAggregatesFilter<"follow"> | number
    store_id?: IntWithAggregatesFilter<"follow"> | number
    is_followed?: BoolWithAggregatesFilter<"follow"> | boolean
  }

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    order_id?: IntFilter<"order"> | number
    reg_id?: IntNullableFilter<"order"> | number | null
    guest_name?: StringNullableFilter<"order"> | string | null
    guest_mobile?: StringNullableFilter<"order"> | string | null
    guest_address?: StringNullableFilter<"order"> | string | null
    total_price?: FloatFilter<"order"> | number
    courier_service?: StringFilter<"order"> | string
    status?: StringFilter<"order"> | string
    order_date?: DateTimeFilter<"order"> | Date | string
    deliver_date?: DateTimeFilter<"order"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    order_items?: Order_itemListRelationFilter
  }

  export type orderOrderByWithRelationInput = {
    order_id?: SortOrder
    reg_id?: SortOrderInput | SortOrder
    guest_name?: SortOrderInput | SortOrder
    guest_mobile?: SortOrderInput | SortOrder
    guest_address?: SortOrderInput | SortOrder
    total_price?: SortOrder
    courier_service?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
    deliver_date?: SortOrder
    user?: userOrderByWithRelationInput
    order_items?: order_itemOrderByRelationAggregateInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    reg_id?: IntNullableFilter<"order"> | number | null
    guest_name?: StringNullableFilter<"order"> | string | null
    guest_mobile?: StringNullableFilter<"order"> | string | null
    guest_address?: StringNullableFilter<"order"> | string | null
    total_price?: FloatFilter<"order"> | number
    courier_service?: StringFilter<"order"> | string
    status?: StringFilter<"order"> | string
    order_date?: DateTimeFilter<"order"> | Date | string
    deliver_date?: DateTimeFilter<"order"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    order_items?: Order_itemListRelationFilter
  }, "order_id">

  export type orderOrderByWithAggregationInput = {
    order_id?: SortOrder
    reg_id?: SortOrderInput | SortOrder
    guest_name?: SortOrderInput | SortOrder
    guest_mobile?: SortOrderInput | SortOrder
    guest_address?: SortOrderInput | SortOrder
    total_price?: SortOrder
    courier_service?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
    deliver_date?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"order"> | number
    reg_id?: IntNullableWithAggregatesFilter<"order"> | number | null
    guest_name?: StringNullableWithAggregatesFilter<"order"> | string | null
    guest_mobile?: StringNullableWithAggregatesFilter<"order"> | string | null
    guest_address?: StringNullableWithAggregatesFilter<"order"> | string | null
    total_price?: FloatWithAggregatesFilter<"order"> | number
    courier_service?: StringWithAggregatesFilter<"order"> | string
    status?: StringWithAggregatesFilter<"order"> | string
    order_date?: DateTimeWithAggregatesFilter<"order"> | Date | string
    deliver_date?: DateTimeWithAggregatesFilter<"order"> | Date | string
  }

  export type order_itemWhereInput = {
    AND?: order_itemWhereInput | order_itemWhereInput[]
    OR?: order_itemWhereInput[]
    NOT?: order_itemWhereInput | order_itemWhereInput[]
    id?: IntFilter<"order_item"> | number
    order_id?: IntFilter<"order_item"> | number
    product_id?: IntFilter<"order_item"> | number
    quantity?: IntFilter<"order_item"> | number
    price?: FloatFilter<"order_item"> | number
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type order_itemOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    order?: orderOrderByWithRelationInput
    product?: productOrderByWithRelationInput
  }

  export type order_itemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_itemWhereInput | order_itemWhereInput[]
    OR?: order_itemWhereInput[]
    NOT?: order_itemWhereInput | order_itemWhereInput[]
    order_id?: IntFilter<"order_item"> | number
    product_id?: IntFilter<"order_item"> | number
    quantity?: IntFilter<"order_item"> | number
    price?: FloatFilter<"order_item"> | number
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "id">

  export type order_itemOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: order_itemCountOrderByAggregateInput
    _avg?: order_itemAvgOrderByAggregateInput
    _max?: order_itemMaxOrderByAggregateInput
    _min?: order_itemMinOrderByAggregateInput
    _sum?: order_itemSumOrderByAggregateInput
  }

  export type order_itemScalarWhereWithAggregatesInput = {
    AND?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[]
    OR?: order_itemScalarWhereWithAggregatesInput[]
    NOT?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_item"> | number
    order_id?: IntWithAggregatesFilter<"order_item"> | number
    product_id?: IntWithAggregatesFilter<"order_item"> | number
    quantity?: IntWithAggregatesFilter<"order_item"> | number
    price?: FloatWithAggregatesFilter<"order_item"> | number
  }

  export type AdvertisementWhereInput = {
    AND?: AdvertisementWhereInput | AdvertisementWhereInput[]
    OR?: AdvertisementWhereInput[]
    NOT?: AdvertisementWhereInput | AdvertisementWhereInput[]
    id?: IntFilter<"Advertisement"> | number
    created_at?: DateTimeFilter<"Advertisement"> | Date | string
    imageUrl?: StringFilter<"Advertisement"> | string
  }

  export type AdvertisementOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    imageUrl?: SortOrder
  }

  export type AdvertisementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdvertisementWhereInput | AdvertisementWhereInput[]
    OR?: AdvertisementWhereInput[]
    NOT?: AdvertisementWhereInput | AdvertisementWhereInput[]
    created_at?: DateTimeFilter<"Advertisement"> | Date | string
    imageUrl?: StringFilter<"Advertisement"> | string
  }, "id">

  export type AdvertisementOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    imageUrl?: SortOrder
    _count?: AdvertisementCountOrderByAggregateInput
    _avg?: AdvertisementAvgOrderByAggregateInput
    _max?: AdvertisementMaxOrderByAggregateInput
    _min?: AdvertisementMinOrderByAggregateInput
    _sum?: AdvertisementSumOrderByAggregateInput
  }

  export type AdvertisementScalarWhereWithAggregatesInput = {
    AND?: AdvertisementScalarWhereWithAggregatesInput | AdvertisementScalarWhereWithAggregatesInput[]
    OR?: AdvertisementScalarWhereWithAggregatesInput[]
    NOT?: AdvertisementScalarWhereWithAggregatesInput | AdvertisementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Advertisement"> | number
    created_at?: DateTimeWithAggregatesFilter<"Advertisement"> | Date | string
    imageUrl?: StringWithAggregatesFilter<"Advertisement"> | string
  }

  export type userCreateInput = {
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
    follows?: followCreateNestedManyWithoutUserInput
    carts?: cartCreateNestedManyWithoutUserInput
    favorites?: favoriteCreateNestedManyWithoutUserInput
    seller?: sellerCreateNestedOneWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    reg_id?: number
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
    follows?: followUncheckedCreateNestedManyWithoutUserInput
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    favorites?: favoriteUncheckedCreateNestedManyWithoutUserInput
    seller?: sellerUncheckedCreateNestedOneWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
    follows?: followUpdateManyWithoutUserNestedInput
    carts?: cartUpdateManyWithoutUserNestedInput
    favorites?: favoriteUpdateManyWithoutUserNestedInput
    seller?: sellerUpdateOneWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    reg_id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
    follows?: followUncheckedUpdateManyWithoutUserNestedInput
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    favorites?: favoriteUncheckedUpdateManyWithoutUserNestedInput
    seller?: sellerUncheckedUpdateOneWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    reg_id?: number
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
  }

  export type userUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUncheckedUpdateManyInput = {
    reg_id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sellerCreateInput = {
    mobile_no1: string
    mobile_no2: string
    isBlocked?: boolean
    warning1?: string | null
    warning2?: string | null
    warning3?: string | null
    user: userCreateNestedOneWithoutSellerInput
    store: storeCreateNestedOneWithoutSellerInput
  }

  export type sellerUncheckedCreateInput = {
    seller_id?: number
    mobile_no1: string
    mobile_no2: string
    reg_id: number
    store_id: number
    isBlocked?: boolean
    warning1?: string | null
    warning2?: string | null
    warning3?: string | null
  }

  export type sellerUpdateInput = {
    mobile_no1?: StringFieldUpdateOperationsInput | string
    mobile_no2?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    warning1?: NullableStringFieldUpdateOperationsInput | string | null
    warning2?: NullableStringFieldUpdateOperationsInput | string | null
    warning3?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutSellerNestedInput
    store?: storeUpdateOneRequiredWithoutSellerNestedInput
  }

  export type sellerUncheckedUpdateInput = {
    seller_id?: IntFieldUpdateOperationsInput | number
    mobile_no1?: StringFieldUpdateOperationsInput | string
    mobile_no2?: StringFieldUpdateOperationsInput | string
    reg_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    warning1?: NullableStringFieldUpdateOperationsInput | string | null
    warning2?: NullableStringFieldUpdateOperationsInput | string | null
    warning3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sellerCreateManyInput = {
    seller_id?: number
    mobile_no1: string
    mobile_no2: string
    reg_id: number
    store_id: number
    isBlocked?: boolean
    warning1?: string | null
    warning2?: string | null
    warning3?: string | null
  }

  export type sellerUpdateManyMutationInput = {
    mobile_no1?: StringFieldUpdateOperationsInput | string
    mobile_no2?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    warning1?: NullableStringFieldUpdateOperationsInput | string | null
    warning2?: NullableStringFieldUpdateOperationsInput | string | null
    warning3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sellerUncheckedUpdateManyInput = {
    seller_id?: IntFieldUpdateOperationsInput | number
    mobile_no1?: StringFieldUpdateOperationsInput | string
    mobile_no2?: StringFieldUpdateOperationsInput | string
    reg_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    warning1?: NullableStringFieldUpdateOperationsInput | string | null
    warning2?: NullableStringFieldUpdateOperationsInput | string | null
    warning3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productCreateInput = {
    name: string
    description: string
    price: number
    stock: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
    store: storeCreateNestedOneWithoutProductsInput
    carts?: cartCreateNestedManyWithoutProductInput
    favorites?: favoriteCreateNestedManyWithoutProductInput
    reviews?: reviewCreateNestedManyWithoutProductInput
    order_items?: order_itemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    product_id?: number
    name: string
    description: string
    price: number
    stock: number
    store_id: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
    carts?: cartUncheckedCreateNestedManyWithoutProductInput
    favorites?: favoriteUncheckedCreateNestedManyWithoutProductInput
    reviews?: reviewUncheckedCreateNestedManyWithoutProductInput
    order_items?: order_itemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: storeUpdateOneRequiredWithoutProductsNestedInput
    carts?: cartUpdateManyWithoutProductNestedInput
    favorites?: favoriteUpdateManyWithoutProductNestedInput
    reviews?: reviewUpdateManyWithoutProductNestedInput
    order_items?: order_itemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUncheckedUpdateManyWithoutProductNestedInput
    favorites?: favoriteUncheckedUpdateManyWithoutProductNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutProductNestedInput
    order_items?: order_itemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    product_id?: number
    name: string
    description: string
    price: number
    stock: number
    store_id: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
  }

  export type productUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storeCreateInput = {
    store_name: string
    business_email: string
    business_regNo: string
    business_address?: string | null
    store_image?: string | null
    seller?: sellerCreateNestedOneWithoutStoreInput
    products?: productCreateNestedManyWithoutStoreInput
    follows?: followCreateNestedManyWithoutStoreInput
  }

  export type storeUncheckedCreateInput = {
    store_id?: number
    store_name: string
    business_email: string
    business_regNo: string
    business_address?: string | null
    store_image?: string | null
    seller?: sellerUncheckedCreateNestedOneWithoutStoreInput
    products?: productUncheckedCreateNestedManyWithoutStoreInput
    follows?: followUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeUpdateInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    business_email?: StringFieldUpdateOperationsInput | string
    business_regNo?: StringFieldUpdateOperationsInput | string
    business_address?: NullableStringFieldUpdateOperationsInput | string | null
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: sellerUpdateOneWithoutStoreNestedInput
    products?: productUpdateManyWithoutStoreNestedInput
    follows?: followUpdateManyWithoutStoreNestedInput
  }

  export type storeUncheckedUpdateInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    business_email?: StringFieldUpdateOperationsInput | string
    business_regNo?: StringFieldUpdateOperationsInput | string
    business_address?: NullableStringFieldUpdateOperationsInput | string | null
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: sellerUncheckedUpdateOneWithoutStoreNestedInput
    products?: productUncheckedUpdateManyWithoutStoreNestedInput
    follows?: followUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type storeCreateManyInput = {
    store_id?: number
    store_name: string
    business_email: string
    business_regNo: string
    business_address?: string | null
    store_image?: string | null
  }

  export type storeUpdateManyMutationInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    business_email?: StringFieldUpdateOperationsInput | string
    business_regNo?: StringFieldUpdateOperationsInput | string
    business_address?: NullableStringFieldUpdateOperationsInput | string | null
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storeUncheckedUpdateManyInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    business_email?: StringFieldUpdateOperationsInput | string
    business_regNo?: StringFieldUpdateOperationsInput | string
    business_address?: NullableStringFieldUpdateOperationsInput | string | null
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartCreateInput = {
    quantity?: number
    price: string
    description: string
    created_at?: Date | string
    product_image: string
    user: userCreateNestedOneWithoutCartsInput
    product: productCreateNestedOneWithoutCartsInput
  }

  export type cartUncheckedCreateInput = {
    cart_id?: number
    reg_id: number
    product_id: number
    quantity?: number
    price: string
    description: string
    created_at?: Date | string
    product_image: string
  }

  export type cartUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_image?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutCartsNestedInput
    product?: productUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartUncheckedUpdateInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    reg_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_image?: StringFieldUpdateOperationsInput | string
  }

  export type cartCreateManyInput = {
    cart_id?: number
    reg_id: number
    product_id: number
    quantity?: number
    price: string
    description: string
    created_at?: Date | string
    product_image: string
  }

  export type cartUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_image?: StringFieldUpdateOperationsInput | string
  }

  export type cartUncheckedUpdateManyInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    reg_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_image?: StringFieldUpdateOperationsInput | string
  }

  export type favoriteCreateInput = {
    user: userCreateNestedOneWithoutFavoritesInput
    product: productCreateNestedOneWithoutFavoritesInput
  }

  export type favoriteUncheckedCreateInput = {
    fav_id?: number
    reg_id: number
    product_id: number
  }

  export type favoriteUpdateInput = {
    user?: userUpdateOneRequiredWithoutFavoritesNestedInput
    product?: productUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type favoriteUncheckedUpdateInput = {
    fav_id?: IntFieldUpdateOperationsInput | number
    reg_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type favoriteCreateManyInput = {
    fav_id?: number
    reg_id: number
    product_id: number
  }

  export type favoriteUpdateManyMutationInput = {

  }

  export type favoriteUncheckedUpdateManyInput = {
    fav_id?: IntFieldUpdateOperationsInput | number
    reg_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewCreateInput = {
    content: string
    userName: string
    product: productCreateNestedOneWithoutReviewsInput
  }

  export type reviewUncheckedCreateInput = {
    review_id?: number
    content: string
    userName: string
    product_id: number
  }

  export type reviewUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewCreateManyInput = {
    review_id?: number
    content: string
    userName: string
    product_id: number
  }

  export type reviewUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
  }

  export type reviewUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type followCreateInput = {
    is_followed?: boolean
    user: userCreateNestedOneWithoutFollowsInput
    store: storeCreateNestedOneWithoutFollowsInput
  }

  export type followUncheckedCreateInput = {
    follow_id?: number
    reg_id: number
    store_id: number
    is_followed?: boolean
  }

  export type followUpdateInput = {
    is_followed?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutFollowsNestedInput
    store?: storeUpdateOneRequiredWithoutFollowsNestedInput
  }

  export type followUncheckedUpdateInput = {
    follow_id?: IntFieldUpdateOperationsInput | number
    reg_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    is_followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type followCreateManyInput = {
    follow_id?: number
    reg_id: number
    store_id: number
    is_followed?: boolean
  }

  export type followUpdateManyMutationInput = {
    is_followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type followUncheckedUpdateManyInput = {
    follow_id?: IntFieldUpdateOperationsInput | number
    reg_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    is_followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type orderCreateInput = {
    guest_name?: string | null
    guest_mobile?: string | null
    guest_address?: string | null
    total_price: number
    courier_service: string
    status: string
    order_date?: Date | string
    deliver_date: Date | string
    user?: userCreateNestedOneWithoutOrdersInput
    order_items?: order_itemCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    order_id?: number
    reg_id?: number | null
    guest_name?: string | null
    guest_mobile?: string | null
    guest_address?: string | null
    total_price: number
    courier_service: string
    status: string
    order_date?: Date | string
    deliver_date: Date | string
    order_items?: order_itemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderUpdateInput = {
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    guest_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    guest_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    courier_service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutOrdersNestedInput
    order_items?: order_itemUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    reg_id?: NullableIntFieldUpdateOperationsInput | number | null
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    guest_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    guest_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    courier_service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderCreateManyInput = {
    order_id?: number
    reg_id?: number | null
    guest_name?: string | null
    guest_mobile?: string | null
    guest_address?: string | null
    total_price: number
    courier_service: string
    status: string
    order_date?: Date | string
    deliver_date: Date | string
  }

  export type orderUpdateManyMutationInput = {
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    guest_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    guest_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    courier_service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    reg_id?: NullableIntFieldUpdateOperationsInput | number | null
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    guest_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    guest_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    courier_service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemCreateInput = {
    quantity?: number
    price: number
    order: orderCreateNestedOneWithoutOrder_itemsInput
    product: productCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemUncheckedCreateInput = {
    id?: number
    order_id: number
    product_id: number
    quantity?: number
    price: number
  }

  export type order_itemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutOrder_itemsNestedInput
    product?: productUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type order_itemCreateManyInput = {
    id?: number
    order_id: number
    product_id: number
    quantity?: number
    price: number
  }

  export type order_itemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type order_itemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type AdvertisementCreateInput = {
    created_at?: Date | string
    imageUrl: string
  }

  export type AdvertisementUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    imageUrl: string
  }

  export type AdvertisementUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type AdvertisementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type AdvertisementCreateManyInput = {
    id?: number
    created_at?: Date | string
    imageUrl: string
  }

  export type AdvertisementUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type AdvertisementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FollowListRelationFilter = {
    every?: followWhereInput
    some?: followWhereInput
    none?: followWhereInput
  }

  export type CartListRelationFilter = {
    every?: cartWhereInput
    some?: cartWhereInput
    none?: cartWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: favoriteWhereInput
    some?: favoriteWhereInput
    none?: favoriteWhereInput
  }

  export type SellerNullableScalarRelationFilter = {
    is?: sellerWhereInput | null
    isNot?: sellerWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: orderWhereInput
    some?: orderWhereInput
    none?: orderWhereInput
  }

  export type followOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type favoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    reg_id?: SortOrder
    fullName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobileNo?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    role?: SortOrder
    isSeller?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    reg_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    reg_id?: SortOrder
    fullName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobileNo?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    role?: SortOrder
    isSeller?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    reg_id?: SortOrder
    fullName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobileNo?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    role?: SortOrder
    isSeller?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    reg_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type StoreScalarRelationFilter = {
    is?: storeWhereInput
    isNot?: storeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type sellerCountOrderByAggregateInput = {
    seller_id?: SortOrder
    mobile_no1?: SortOrder
    mobile_no2?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
    isBlocked?: SortOrder
    warning1?: SortOrder
    warning2?: SortOrder
    warning3?: SortOrder
  }

  export type sellerAvgOrderByAggregateInput = {
    seller_id?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
  }

  export type sellerMaxOrderByAggregateInput = {
    seller_id?: SortOrder
    mobile_no1?: SortOrder
    mobile_no2?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
    isBlocked?: SortOrder
    warning1?: SortOrder
    warning2?: SortOrder
    warning3?: SortOrder
  }

  export type sellerMinOrderByAggregateInput = {
    seller_id?: SortOrder
    mobile_no1?: SortOrder
    mobile_no2?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
    isBlocked?: SortOrder
    warning1?: SortOrder
    warning2?: SortOrder
    warning3?: SortOrder
  }

  export type sellerSumOrderByAggregateInput = {
    seller_id?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type Order_itemListRelationFilter = {
    every?: order_itemWhereInput
    some?: order_itemWhereInput
    none?: order_itemWhereInput
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type order_itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productCountOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    store_id?: SortOrder
    category?: SortOrder
    isPremium?: SortOrder
    product_image?: SortOrder
    store_name?: SortOrder
    store_image?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    product_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    store_id?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    store_id?: SortOrder
    category?: SortOrder
    isPremium?: SortOrder
    product_image?: SortOrder
    store_name?: SortOrder
    store_image?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    store_id?: SortOrder
    category?: SortOrder
    isPremium?: SortOrder
    product_image?: SortOrder
    store_name?: SortOrder
    store_image?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    product_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    store_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type storeCountOrderByAggregateInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    business_email?: SortOrder
    business_regNo?: SortOrder
    business_address?: SortOrder
    store_image?: SortOrder
  }

  export type storeAvgOrderByAggregateInput = {
    store_id?: SortOrder
  }

  export type storeMaxOrderByAggregateInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    business_email?: SortOrder
    business_regNo?: SortOrder
    business_address?: SortOrder
    store_image?: SortOrder
  }

  export type storeMinOrderByAggregateInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    business_email?: SortOrder
    business_regNo?: SortOrder
    business_address?: SortOrder
    store_image?: SortOrder
  }

  export type storeSumOrderByAggregateInput = {
    store_id?: SortOrder
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

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type cartReg_idProduct_idCompoundUniqueInput = {
    reg_id: number
    product_id: number
  }

  export type cartCountOrderByAggregateInput = {
    cart_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    product_image?: SortOrder
  }

  export type cartAvgOrderByAggregateInput = {
    cart_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type cartMaxOrderByAggregateInput = {
    cart_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    product_image?: SortOrder
  }

  export type cartMinOrderByAggregateInput = {
    cart_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    product_image?: SortOrder
  }

  export type cartSumOrderByAggregateInput = {
    cart_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
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

  export type favoriteReg_idProduct_idCompoundUniqueInput = {
    reg_id: number
    product_id: number
  }

  export type favoriteCountOrderByAggregateInput = {
    fav_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
  }

  export type favoriteAvgOrderByAggregateInput = {
    fav_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
  }

  export type favoriteMaxOrderByAggregateInput = {
    fav_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
  }

  export type favoriteMinOrderByAggregateInput = {
    fav_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
  }

  export type favoriteSumOrderByAggregateInput = {
    fav_id?: SortOrder
    reg_id?: SortOrder
    product_id?: SortOrder
  }

  export type reviewCountOrderByAggregateInput = {
    review_id?: SortOrder
    content?: SortOrder
    userName?: SortOrder
    product_id?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    review_id?: SortOrder
    product_id?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    review_id?: SortOrder
    content?: SortOrder
    userName?: SortOrder
    product_id?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    review_id?: SortOrder
    content?: SortOrder
    userName?: SortOrder
    product_id?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    review_id?: SortOrder
    product_id?: SortOrder
  }

  export type followReg_id_store_idCompoundUniqueInput = {
    reg_id: number
    store_id: number
  }

  export type followCountOrderByAggregateInput = {
    follow_id?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
    is_followed?: SortOrder
  }

  export type followAvgOrderByAggregateInput = {
    follow_id?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
  }

  export type followMaxOrderByAggregateInput = {
    follow_id?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
    is_followed?: SortOrder
  }

  export type followMinOrderByAggregateInput = {
    follow_id?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
    is_followed?: SortOrder
  }

  export type followSumOrderByAggregateInput = {
    follow_id?: SortOrder
    reg_id?: SortOrder
    store_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type orderCountOrderByAggregateInput = {
    order_id?: SortOrder
    reg_id?: SortOrder
    guest_name?: SortOrder
    guest_mobile?: SortOrder
    guest_address?: SortOrder
    total_price?: SortOrder
    courier_service?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
    deliver_date?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    order_id?: SortOrder
    reg_id?: SortOrder
    total_price?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    order_id?: SortOrder
    reg_id?: SortOrder
    guest_name?: SortOrder
    guest_mobile?: SortOrder
    guest_address?: SortOrder
    total_price?: SortOrder
    courier_service?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
    deliver_date?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    order_id?: SortOrder
    reg_id?: SortOrder
    guest_name?: SortOrder
    guest_mobile?: SortOrder
    guest_address?: SortOrder
    total_price?: SortOrder
    courier_service?: SortOrder
    status?: SortOrder
    order_date?: SortOrder
    deliver_date?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    order_id?: SortOrder
    reg_id?: SortOrder
    total_price?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type OrderScalarRelationFilter = {
    is?: orderWhereInput
    isNot?: orderWhereInput
  }

  export type order_itemCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type AdvertisementCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    imageUrl?: SortOrder
  }

  export type AdvertisementAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdvertisementMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    imageUrl?: SortOrder
  }

  export type AdvertisementMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    imageUrl?: SortOrder
  }

  export type AdvertisementSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type followCreateNestedManyWithoutUserInput = {
    create?: XOR<followCreateWithoutUserInput, followUncheckedCreateWithoutUserInput> | followCreateWithoutUserInput[] | followUncheckedCreateWithoutUserInput[]
    connectOrCreate?: followCreateOrConnectWithoutUserInput | followCreateOrConnectWithoutUserInput[]
    createMany?: followCreateManyUserInputEnvelope
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
  }

  export type cartCreateNestedManyWithoutUserInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type favoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput> | favoriteCreateWithoutUserInput[] | favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[]
    createMany?: favoriteCreateManyUserInputEnvelope
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
  }

  export type sellerCreateNestedOneWithoutUserInput = {
    create?: XOR<sellerCreateWithoutUserInput, sellerUncheckedCreateWithoutUserInput>
    connectOrCreate?: sellerCreateOrConnectWithoutUserInput
    connect?: sellerWhereUniqueInput
  }

  export type orderCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type followUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<followCreateWithoutUserInput, followUncheckedCreateWithoutUserInput> | followCreateWithoutUserInput[] | followUncheckedCreateWithoutUserInput[]
    connectOrCreate?: followCreateOrConnectWithoutUserInput | followCreateOrConnectWithoutUserInput[]
    createMany?: followCreateManyUserInputEnvelope
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
  }

  export type cartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type favoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput> | favoriteCreateWithoutUserInput[] | favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[]
    createMany?: favoriteCreateManyUserInputEnvelope
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
  }

  export type sellerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<sellerCreateWithoutUserInput, sellerUncheckedCreateWithoutUserInput>
    connectOrCreate?: sellerCreateOrConnectWithoutUserInput
    connect?: sellerWhereUniqueInput
  }

  export type orderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type followUpdateManyWithoutUserNestedInput = {
    create?: XOR<followCreateWithoutUserInput, followUncheckedCreateWithoutUserInput> | followCreateWithoutUserInput[] | followUncheckedCreateWithoutUserInput[]
    connectOrCreate?: followCreateOrConnectWithoutUserInput | followCreateOrConnectWithoutUserInput[]
    upsert?: followUpsertWithWhereUniqueWithoutUserInput | followUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: followCreateManyUserInputEnvelope
    set?: followWhereUniqueInput | followWhereUniqueInput[]
    disconnect?: followWhereUniqueInput | followWhereUniqueInput[]
    delete?: followWhereUniqueInput | followWhereUniqueInput[]
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
    update?: followUpdateWithWhereUniqueWithoutUserInput | followUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: followUpdateManyWithWhereWithoutUserInput | followUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: followScalarWhereInput | followScalarWhereInput[]
  }

  export type cartUpdateManyWithoutUserNestedInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutUserInput | cartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutUserInput | cartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cartUpdateManyWithWhereWithoutUserInput | cartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type favoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput> | favoriteCreateWithoutUserInput[] | favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[]
    upsert?: favoriteUpsertWithWhereUniqueWithoutUserInput | favoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: favoriteCreateManyUserInputEnvelope
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    update?: favoriteUpdateWithWhereUniqueWithoutUserInput | favoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: favoriteUpdateManyWithWhereWithoutUserInput | favoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
  }

  export type sellerUpdateOneWithoutUserNestedInput = {
    create?: XOR<sellerCreateWithoutUserInput, sellerUncheckedCreateWithoutUserInput>
    connectOrCreate?: sellerCreateOrConnectWithoutUserInput
    upsert?: sellerUpsertWithoutUserInput
    disconnect?: sellerWhereInput | boolean
    delete?: sellerWhereInput | boolean
    connect?: sellerWhereUniqueInput
    update?: XOR<XOR<sellerUpdateToOneWithWhereWithoutUserInput, sellerUpdateWithoutUserInput>, sellerUncheckedUpdateWithoutUserInput>
  }

  export type orderUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type followUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<followCreateWithoutUserInput, followUncheckedCreateWithoutUserInput> | followCreateWithoutUserInput[] | followUncheckedCreateWithoutUserInput[]
    connectOrCreate?: followCreateOrConnectWithoutUserInput | followCreateOrConnectWithoutUserInput[]
    upsert?: followUpsertWithWhereUniqueWithoutUserInput | followUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: followCreateManyUserInputEnvelope
    set?: followWhereUniqueInput | followWhereUniqueInput[]
    disconnect?: followWhereUniqueInput | followWhereUniqueInput[]
    delete?: followWhereUniqueInput | followWhereUniqueInput[]
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
    update?: followUpdateWithWhereUniqueWithoutUserInput | followUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: followUpdateManyWithWhereWithoutUserInput | followUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: followScalarWhereInput | followScalarWhereInput[]
  }

  export type cartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutUserInput | cartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutUserInput | cartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cartUpdateManyWithWhereWithoutUserInput | cartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type favoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput> | favoriteCreateWithoutUserInput[] | favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[]
    upsert?: favoriteUpsertWithWhereUniqueWithoutUserInput | favoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: favoriteCreateManyUserInputEnvelope
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    update?: favoriteUpdateWithWhereUniqueWithoutUserInput | favoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: favoriteUpdateManyWithWhereWithoutUserInput | favoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
  }

  export type sellerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<sellerCreateWithoutUserInput, sellerUncheckedCreateWithoutUserInput>
    connectOrCreate?: sellerCreateOrConnectWithoutUserInput
    upsert?: sellerUpsertWithoutUserInput
    disconnect?: sellerWhereInput | boolean
    delete?: sellerWhereInput | boolean
    connect?: sellerWhereUniqueInput
    update?: XOR<XOR<sellerUpdateToOneWithWhereWithoutUserInput, sellerUpdateWithoutUserInput>, sellerUncheckedUpdateWithoutUserInput>
  }

  export type orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutSellerInput = {
    create?: XOR<userCreateWithoutSellerInput, userUncheckedCreateWithoutSellerInput>
    connectOrCreate?: userCreateOrConnectWithoutSellerInput
    connect?: userWhereUniqueInput
  }

  export type storeCreateNestedOneWithoutSellerInput = {
    create?: XOR<storeCreateWithoutSellerInput, storeUncheckedCreateWithoutSellerInput>
    connectOrCreate?: storeCreateOrConnectWithoutSellerInput
    connect?: storeWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneRequiredWithoutSellerNestedInput = {
    create?: XOR<userCreateWithoutSellerInput, userUncheckedCreateWithoutSellerInput>
    connectOrCreate?: userCreateOrConnectWithoutSellerInput
    upsert?: userUpsertWithoutSellerInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSellerInput, userUpdateWithoutSellerInput>, userUncheckedUpdateWithoutSellerInput>
  }

  export type storeUpdateOneRequiredWithoutSellerNestedInput = {
    create?: XOR<storeCreateWithoutSellerInput, storeUncheckedCreateWithoutSellerInput>
    connectOrCreate?: storeCreateOrConnectWithoutSellerInput
    upsert?: storeUpsertWithoutSellerInput
    connect?: storeWhereUniqueInput
    update?: XOR<XOR<storeUpdateToOneWithWhereWithoutSellerInput, storeUpdateWithoutSellerInput>, storeUncheckedUpdateWithoutSellerInput>
  }

  export type storeCreateNestedOneWithoutProductsInput = {
    create?: XOR<storeCreateWithoutProductsInput, storeUncheckedCreateWithoutProductsInput>
    connectOrCreate?: storeCreateOrConnectWithoutProductsInput
    connect?: storeWhereUniqueInput
  }

  export type cartCreateNestedManyWithoutProductInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type favoriteCreateNestedManyWithoutProductInput = {
    create?: XOR<favoriteCreateWithoutProductInput, favoriteUncheckedCreateWithoutProductInput> | favoriteCreateWithoutProductInput[] | favoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutProductInput | favoriteCreateOrConnectWithoutProductInput[]
    createMany?: favoriteCreateManyProductInputEnvelope
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutProductInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type order_itemCreateNestedManyWithoutProductInput = {
    create?: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput> | order_itemCreateWithoutProductInput[] | order_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[]
    createMany?: order_itemCreateManyProductInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type cartUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type favoriteUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<favoriteCreateWithoutProductInput, favoriteUncheckedCreateWithoutProductInput> | favoriteCreateWithoutProductInput[] | favoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutProductInput | favoriteCreateOrConnectWithoutProductInput[]
    createMany?: favoriteCreateManyProductInputEnvelope
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type order_itemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput> | order_itemCreateWithoutProductInput[] | order_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[]
    createMany?: order_itemCreateManyProductInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type storeUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<storeCreateWithoutProductsInput, storeUncheckedCreateWithoutProductsInput>
    connectOrCreate?: storeCreateOrConnectWithoutProductsInput
    upsert?: storeUpsertWithoutProductsInput
    connect?: storeWhereUniqueInput
    update?: XOR<XOR<storeUpdateToOneWithWhereWithoutProductsInput, storeUpdateWithoutProductsInput>, storeUncheckedUpdateWithoutProductsInput>
  }

  export type cartUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutProductInput | cartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutProductInput | cartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartUpdateManyWithWhereWithoutProductInput | cartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type favoriteUpdateManyWithoutProductNestedInput = {
    create?: XOR<favoriteCreateWithoutProductInput, favoriteUncheckedCreateWithoutProductInput> | favoriteCreateWithoutProductInput[] | favoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutProductInput | favoriteCreateOrConnectWithoutProductInput[]
    upsert?: favoriteUpsertWithWhereUniqueWithoutProductInput | favoriteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: favoriteCreateManyProductInputEnvelope
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    update?: favoriteUpdateWithWhereUniqueWithoutProductInput | favoriteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: favoriteUpdateManyWithWhereWithoutProductInput | favoriteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutProductInput | reviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutProductInput | reviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutProductInput | reviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type order_itemUpdateManyWithoutProductNestedInput = {
    create?: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput> | order_itemCreateWithoutProductInput[] | order_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutProductInput | order_itemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: order_itemCreateManyProductInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutProductInput | order_itemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutProductInput | order_itemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type cartUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutProductInput | cartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutProductInput | cartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartUpdateManyWithWhereWithoutProductInput | cartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type favoriteUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<favoriteCreateWithoutProductInput, favoriteUncheckedCreateWithoutProductInput> | favoriteCreateWithoutProductInput[] | favoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutProductInput | favoriteCreateOrConnectWithoutProductInput[]
    upsert?: favoriteUpsertWithWhereUniqueWithoutProductInput | favoriteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: favoriteCreateManyProductInputEnvelope
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    update?: favoriteUpdateWithWhereUniqueWithoutProductInput | favoriteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: favoriteUpdateManyWithWhereWithoutProductInput | favoriteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutProductInput | reviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutProductInput | reviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutProductInput | reviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type order_itemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput> | order_itemCreateWithoutProductInput[] | order_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutProductInput | order_itemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: order_itemCreateManyProductInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutProductInput | order_itemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutProductInput | order_itemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type sellerCreateNestedOneWithoutStoreInput = {
    create?: XOR<sellerCreateWithoutStoreInput, sellerUncheckedCreateWithoutStoreInput>
    connectOrCreate?: sellerCreateOrConnectWithoutStoreInput
    connect?: sellerWhereUniqueInput
  }

  export type productCreateNestedManyWithoutStoreInput = {
    create?: XOR<productCreateWithoutStoreInput, productUncheckedCreateWithoutStoreInput> | productCreateWithoutStoreInput[] | productUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: productCreateOrConnectWithoutStoreInput | productCreateOrConnectWithoutStoreInput[]
    createMany?: productCreateManyStoreInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type followCreateNestedManyWithoutStoreInput = {
    create?: XOR<followCreateWithoutStoreInput, followUncheckedCreateWithoutStoreInput> | followCreateWithoutStoreInput[] | followUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: followCreateOrConnectWithoutStoreInput | followCreateOrConnectWithoutStoreInput[]
    createMany?: followCreateManyStoreInputEnvelope
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
  }

  export type sellerUncheckedCreateNestedOneWithoutStoreInput = {
    create?: XOR<sellerCreateWithoutStoreInput, sellerUncheckedCreateWithoutStoreInput>
    connectOrCreate?: sellerCreateOrConnectWithoutStoreInput
    connect?: sellerWhereUniqueInput
  }

  export type productUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<productCreateWithoutStoreInput, productUncheckedCreateWithoutStoreInput> | productCreateWithoutStoreInput[] | productUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: productCreateOrConnectWithoutStoreInput | productCreateOrConnectWithoutStoreInput[]
    createMany?: productCreateManyStoreInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type followUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<followCreateWithoutStoreInput, followUncheckedCreateWithoutStoreInput> | followCreateWithoutStoreInput[] | followUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: followCreateOrConnectWithoutStoreInput | followCreateOrConnectWithoutStoreInput[]
    createMany?: followCreateManyStoreInputEnvelope
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
  }

  export type sellerUpdateOneWithoutStoreNestedInput = {
    create?: XOR<sellerCreateWithoutStoreInput, sellerUncheckedCreateWithoutStoreInput>
    connectOrCreate?: sellerCreateOrConnectWithoutStoreInput
    upsert?: sellerUpsertWithoutStoreInput
    disconnect?: sellerWhereInput | boolean
    delete?: sellerWhereInput | boolean
    connect?: sellerWhereUniqueInput
    update?: XOR<XOR<sellerUpdateToOneWithWhereWithoutStoreInput, sellerUpdateWithoutStoreInput>, sellerUncheckedUpdateWithoutStoreInput>
  }

  export type productUpdateManyWithoutStoreNestedInput = {
    create?: XOR<productCreateWithoutStoreInput, productUncheckedCreateWithoutStoreInput> | productCreateWithoutStoreInput[] | productUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: productCreateOrConnectWithoutStoreInput | productCreateOrConnectWithoutStoreInput[]
    upsert?: productUpsertWithWhereUniqueWithoutStoreInput | productUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: productCreateManyStoreInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutStoreInput | productUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: productUpdateManyWithWhereWithoutStoreInput | productUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type followUpdateManyWithoutStoreNestedInput = {
    create?: XOR<followCreateWithoutStoreInput, followUncheckedCreateWithoutStoreInput> | followCreateWithoutStoreInput[] | followUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: followCreateOrConnectWithoutStoreInput | followCreateOrConnectWithoutStoreInput[]
    upsert?: followUpsertWithWhereUniqueWithoutStoreInput | followUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: followCreateManyStoreInputEnvelope
    set?: followWhereUniqueInput | followWhereUniqueInput[]
    disconnect?: followWhereUniqueInput | followWhereUniqueInput[]
    delete?: followWhereUniqueInput | followWhereUniqueInput[]
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
    update?: followUpdateWithWhereUniqueWithoutStoreInput | followUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: followUpdateManyWithWhereWithoutStoreInput | followUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: followScalarWhereInput | followScalarWhereInput[]
  }

  export type sellerUncheckedUpdateOneWithoutStoreNestedInput = {
    create?: XOR<sellerCreateWithoutStoreInput, sellerUncheckedCreateWithoutStoreInput>
    connectOrCreate?: sellerCreateOrConnectWithoutStoreInput
    upsert?: sellerUpsertWithoutStoreInput
    disconnect?: sellerWhereInput | boolean
    delete?: sellerWhereInput | boolean
    connect?: sellerWhereUniqueInput
    update?: XOR<XOR<sellerUpdateToOneWithWhereWithoutStoreInput, sellerUpdateWithoutStoreInput>, sellerUncheckedUpdateWithoutStoreInput>
  }

  export type productUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<productCreateWithoutStoreInput, productUncheckedCreateWithoutStoreInput> | productCreateWithoutStoreInput[] | productUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: productCreateOrConnectWithoutStoreInput | productCreateOrConnectWithoutStoreInput[]
    upsert?: productUpsertWithWhereUniqueWithoutStoreInput | productUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: productCreateManyStoreInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutStoreInput | productUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: productUpdateManyWithWhereWithoutStoreInput | productUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type followUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<followCreateWithoutStoreInput, followUncheckedCreateWithoutStoreInput> | followCreateWithoutStoreInput[] | followUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: followCreateOrConnectWithoutStoreInput | followCreateOrConnectWithoutStoreInput[]
    upsert?: followUpsertWithWhereUniqueWithoutStoreInput | followUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: followCreateManyStoreInputEnvelope
    set?: followWhereUniqueInput | followWhereUniqueInput[]
    disconnect?: followWhereUniqueInput | followWhereUniqueInput[]
    delete?: followWhereUniqueInput | followWhereUniqueInput[]
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
    update?: followUpdateWithWhereUniqueWithoutStoreInput | followUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: followUpdateManyWithWhereWithoutStoreInput | followUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: followScalarWhereInput | followScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutCartsInput = {
    create?: XOR<userCreateWithoutCartsInput, userUncheckedCreateWithoutCartsInput>
    connectOrCreate?: userCreateOrConnectWithoutCartsInput
    connect?: userWhereUniqueInput
  }

  export type productCreateNestedOneWithoutCartsInput = {
    create?: XOR<productCreateWithoutCartsInput, productUncheckedCreateWithoutCartsInput>
    connectOrCreate?: productCreateOrConnectWithoutCartsInput
    connect?: productWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<userCreateWithoutCartsInput, userUncheckedCreateWithoutCartsInput>
    connectOrCreate?: userCreateOrConnectWithoutCartsInput
    upsert?: userUpsertWithoutCartsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCartsInput, userUpdateWithoutCartsInput>, userUncheckedUpdateWithoutCartsInput>
  }

  export type productUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<productCreateWithoutCartsInput, productUncheckedCreateWithoutCartsInput>
    connectOrCreate?: productCreateOrConnectWithoutCartsInput
    upsert?: productUpsertWithoutCartsInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutCartsInput, productUpdateWithoutCartsInput>, productUncheckedUpdateWithoutCartsInput>
  }

  export type userCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<userCreateWithoutFavoritesInput, userUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: userCreateOrConnectWithoutFavoritesInput
    connect?: userWhereUniqueInput
  }

  export type productCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<productCreateWithoutFavoritesInput, productUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: productCreateOrConnectWithoutFavoritesInput
    connect?: productWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<userCreateWithoutFavoritesInput, userUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: userCreateOrConnectWithoutFavoritesInput
    upsert?: userUpsertWithoutFavoritesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFavoritesInput, userUpdateWithoutFavoritesInput>, userUncheckedUpdateWithoutFavoritesInput>
  }

  export type productUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<productCreateWithoutFavoritesInput, productUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: productCreateOrConnectWithoutFavoritesInput
    upsert?: productUpsertWithoutFavoritesInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutFavoritesInput, productUpdateWithoutFavoritesInput>, productUncheckedUpdateWithoutFavoritesInput>
  }

  export type productCreateNestedOneWithoutReviewsInput = {
    create?: XOR<productCreateWithoutReviewsInput, productUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: productCreateOrConnectWithoutReviewsInput
    connect?: productWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<productCreateWithoutReviewsInput, productUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: productCreateOrConnectWithoutReviewsInput
    upsert?: productUpsertWithoutReviewsInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutReviewsInput, productUpdateWithoutReviewsInput>, productUncheckedUpdateWithoutReviewsInput>
  }

  export type userCreateNestedOneWithoutFollowsInput = {
    create?: XOR<userCreateWithoutFollowsInput, userUncheckedCreateWithoutFollowsInput>
    connectOrCreate?: userCreateOrConnectWithoutFollowsInput
    connect?: userWhereUniqueInput
  }

  export type storeCreateNestedOneWithoutFollowsInput = {
    create?: XOR<storeCreateWithoutFollowsInput, storeUncheckedCreateWithoutFollowsInput>
    connectOrCreate?: storeCreateOrConnectWithoutFollowsInput
    connect?: storeWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutFollowsNestedInput = {
    create?: XOR<userCreateWithoutFollowsInput, userUncheckedCreateWithoutFollowsInput>
    connectOrCreate?: userCreateOrConnectWithoutFollowsInput
    upsert?: userUpsertWithoutFollowsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFollowsInput, userUpdateWithoutFollowsInput>, userUncheckedUpdateWithoutFollowsInput>
  }

  export type storeUpdateOneRequiredWithoutFollowsNestedInput = {
    create?: XOR<storeCreateWithoutFollowsInput, storeUncheckedCreateWithoutFollowsInput>
    connectOrCreate?: storeCreateOrConnectWithoutFollowsInput
    upsert?: storeUpsertWithoutFollowsInput
    connect?: storeWhereUniqueInput
    update?: XOR<XOR<storeUpdateToOneWithWhereWithoutFollowsInput, storeUpdateWithoutFollowsInput>, storeUncheckedUpdateWithoutFollowsInput>
  }

  export type userCreateNestedOneWithoutOrdersInput = {
    create?: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: userCreateOrConnectWithoutOrdersInput
    connect?: userWhereUniqueInput
  }

  export type order_itemCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type order_itemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type userUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: userCreateOrConnectWithoutOrdersInput
    upsert?: userUpsertWithoutOrdersInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutOrdersInput, userUpdateWithoutOrdersInput>, userUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutOrderInput | order_itemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutOrderInput | order_itemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutOrderInput | order_itemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type order_itemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutOrderInput | order_itemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutOrderInput | order_itemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutOrderInput | order_itemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type orderCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<orderCreateWithoutOrder_itemsInput, orderUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrder_itemsInput
    connect?: orderWhereUniqueInput
  }

  export type productCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productCreateWithoutOrder_itemsInput, productUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productCreateOrConnectWithoutOrder_itemsInput
    connect?: productWhereUniqueInput
  }

  export type orderUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<orderCreateWithoutOrder_itemsInput, orderUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrder_itemsInput
    upsert?: orderUpsertWithoutOrder_itemsInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutOrder_itemsInput, orderUpdateWithoutOrder_itemsInput>, orderUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<productCreateWithoutOrder_itemsInput, productUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productCreateOrConnectWithoutOrder_itemsInput
    upsert?: productUpsertWithoutOrder_itemsInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutOrder_itemsInput, productUpdateWithoutOrder_itemsInput>, productUncheckedUpdateWithoutOrder_itemsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type followCreateWithoutUserInput = {
    is_followed?: boolean
    store: storeCreateNestedOneWithoutFollowsInput
  }

  export type followUncheckedCreateWithoutUserInput = {
    follow_id?: number
    store_id: number
    is_followed?: boolean
  }

  export type followCreateOrConnectWithoutUserInput = {
    where: followWhereUniqueInput
    create: XOR<followCreateWithoutUserInput, followUncheckedCreateWithoutUserInput>
  }

  export type followCreateManyUserInputEnvelope = {
    data: followCreateManyUserInput | followCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type cartCreateWithoutUserInput = {
    quantity?: number
    price: string
    description: string
    created_at?: Date | string
    product_image: string
    product: productCreateNestedOneWithoutCartsInput
  }

  export type cartUncheckedCreateWithoutUserInput = {
    cart_id?: number
    product_id: number
    quantity?: number
    price: string
    description: string
    created_at?: Date | string
    product_image: string
  }

  export type cartCreateOrConnectWithoutUserInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput>
  }

  export type cartCreateManyUserInputEnvelope = {
    data: cartCreateManyUserInput | cartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type favoriteCreateWithoutUserInput = {
    product: productCreateNestedOneWithoutFavoritesInput
  }

  export type favoriteUncheckedCreateWithoutUserInput = {
    fav_id?: number
    product_id: number
  }

  export type favoriteCreateOrConnectWithoutUserInput = {
    where: favoriteWhereUniqueInput
    create: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput>
  }

  export type favoriteCreateManyUserInputEnvelope = {
    data: favoriteCreateManyUserInput | favoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sellerCreateWithoutUserInput = {
    mobile_no1: string
    mobile_no2: string
    isBlocked?: boolean
    warning1?: string | null
    warning2?: string | null
    warning3?: string | null
    store: storeCreateNestedOneWithoutSellerInput
  }

  export type sellerUncheckedCreateWithoutUserInput = {
    seller_id?: number
    mobile_no1: string
    mobile_no2: string
    store_id: number
    isBlocked?: boolean
    warning1?: string | null
    warning2?: string | null
    warning3?: string | null
  }

  export type sellerCreateOrConnectWithoutUserInput = {
    where: sellerWhereUniqueInput
    create: XOR<sellerCreateWithoutUserInput, sellerUncheckedCreateWithoutUserInput>
  }

  export type orderCreateWithoutUserInput = {
    guest_name?: string | null
    guest_mobile?: string | null
    guest_address?: string | null
    total_price: number
    courier_service: string
    status: string
    order_date?: Date | string
    deliver_date: Date | string
    order_items?: order_itemCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutUserInput = {
    order_id?: number
    guest_name?: string | null
    guest_mobile?: string | null
    guest_address?: string | null
    total_price: number
    courier_service: string
    status: string
    order_date?: Date | string
    deliver_date: Date | string
    order_items?: order_itemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutUserInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderCreateManyUserInputEnvelope = {
    data: orderCreateManyUserInput | orderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type followUpsertWithWhereUniqueWithoutUserInput = {
    where: followWhereUniqueInput
    update: XOR<followUpdateWithoutUserInput, followUncheckedUpdateWithoutUserInput>
    create: XOR<followCreateWithoutUserInput, followUncheckedCreateWithoutUserInput>
  }

  export type followUpdateWithWhereUniqueWithoutUserInput = {
    where: followWhereUniqueInput
    data: XOR<followUpdateWithoutUserInput, followUncheckedUpdateWithoutUserInput>
  }

  export type followUpdateManyWithWhereWithoutUserInput = {
    where: followScalarWhereInput
    data: XOR<followUpdateManyMutationInput, followUncheckedUpdateManyWithoutUserInput>
  }

  export type followScalarWhereInput = {
    AND?: followScalarWhereInput | followScalarWhereInput[]
    OR?: followScalarWhereInput[]
    NOT?: followScalarWhereInput | followScalarWhereInput[]
    follow_id?: IntFilter<"follow"> | number
    reg_id?: IntFilter<"follow"> | number
    store_id?: IntFilter<"follow"> | number
    is_followed?: BoolFilter<"follow"> | boolean
  }

  export type cartUpsertWithWhereUniqueWithoutUserInput = {
    where: cartWhereUniqueInput
    update: XOR<cartUpdateWithoutUserInput, cartUncheckedUpdateWithoutUserInput>
    create: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput>
  }

  export type cartUpdateWithWhereUniqueWithoutUserInput = {
    where: cartWhereUniqueInput
    data: XOR<cartUpdateWithoutUserInput, cartUncheckedUpdateWithoutUserInput>
  }

  export type cartUpdateManyWithWhereWithoutUserInput = {
    where: cartScalarWhereInput
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyWithoutUserInput>
  }

  export type cartScalarWhereInput = {
    AND?: cartScalarWhereInput | cartScalarWhereInput[]
    OR?: cartScalarWhereInput[]
    NOT?: cartScalarWhereInput | cartScalarWhereInput[]
    cart_id?: IntFilter<"cart"> | number
    reg_id?: IntFilter<"cart"> | number
    product_id?: IntFilter<"cart"> | number
    quantity?: IntFilter<"cart"> | number
    price?: StringFilter<"cart"> | string
    description?: StringFilter<"cart"> | string
    created_at?: DateTimeFilter<"cart"> | Date | string
    product_image?: StringFilter<"cart"> | string
  }

  export type favoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: favoriteWhereUniqueInput
    update: XOR<favoriteUpdateWithoutUserInput, favoriteUncheckedUpdateWithoutUserInput>
    create: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput>
  }

  export type favoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: favoriteWhereUniqueInput
    data: XOR<favoriteUpdateWithoutUserInput, favoriteUncheckedUpdateWithoutUserInput>
  }

  export type favoriteUpdateManyWithWhereWithoutUserInput = {
    where: favoriteScalarWhereInput
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type favoriteScalarWhereInput = {
    AND?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
    OR?: favoriteScalarWhereInput[]
    NOT?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
    fav_id?: IntFilter<"favorite"> | number
    reg_id?: IntFilter<"favorite"> | number
    product_id?: IntFilter<"favorite"> | number
  }

  export type sellerUpsertWithoutUserInput = {
    update: XOR<sellerUpdateWithoutUserInput, sellerUncheckedUpdateWithoutUserInput>
    create: XOR<sellerCreateWithoutUserInput, sellerUncheckedCreateWithoutUserInput>
    where?: sellerWhereInput
  }

  export type sellerUpdateToOneWithWhereWithoutUserInput = {
    where?: sellerWhereInput
    data: XOR<sellerUpdateWithoutUserInput, sellerUncheckedUpdateWithoutUserInput>
  }

  export type sellerUpdateWithoutUserInput = {
    mobile_no1?: StringFieldUpdateOperationsInput | string
    mobile_no2?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    warning1?: NullableStringFieldUpdateOperationsInput | string | null
    warning2?: NullableStringFieldUpdateOperationsInput | string | null
    warning3?: NullableStringFieldUpdateOperationsInput | string | null
    store?: storeUpdateOneRequiredWithoutSellerNestedInput
  }

  export type sellerUncheckedUpdateWithoutUserInput = {
    seller_id?: IntFieldUpdateOperationsInput | number
    mobile_no1?: StringFieldUpdateOperationsInput | string
    mobile_no2?: StringFieldUpdateOperationsInput | string
    store_id?: IntFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    warning1?: NullableStringFieldUpdateOperationsInput | string | null
    warning2?: NullableStringFieldUpdateOperationsInput | string | null
    warning3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type orderUpsertWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderUpdateWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
  }

  export type orderUpdateManyWithWhereWithoutUserInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutUserInput>
  }

  export type orderScalarWhereInput = {
    AND?: orderScalarWhereInput | orderScalarWhereInput[]
    OR?: orderScalarWhereInput[]
    NOT?: orderScalarWhereInput | orderScalarWhereInput[]
    order_id?: IntFilter<"order"> | number
    reg_id?: IntNullableFilter<"order"> | number | null
    guest_name?: StringNullableFilter<"order"> | string | null
    guest_mobile?: StringNullableFilter<"order"> | string | null
    guest_address?: StringNullableFilter<"order"> | string | null
    total_price?: FloatFilter<"order"> | number
    courier_service?: StringFilter<"order"> | string
    status?: StringFilter<"order"> | string
    order_date?: DateTimeFilter<"order"> | Date | string
    deliver_date?: DateTimeFilter<"order"> | Date | string
  }

  export type userCreateWithoutSellerInput = {
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
    follows?: followCreateNestedManyWithoutUserInput
    carts?: cartCreateNestedManyWithoutUserInput
    favorites?: favoriteCreateNestedManyWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSellerInput = {
    reg_id?: number
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
    follows?: followUncheckedCreateNestedManyWithoutUserInput
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    favorites?: favoriteUncheckedCreateNestedManyWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSellerInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSellerInput, userUncheckedCreateWithoutSellerInput>
  }

  export type storeCreateWithoutSellerInput = {
    store_name: string
    business_email: string
    business_regNo: string
    business_address?: string | null
    store_image?: string | null
    products?: productCreateNestedManyWithoutStoreInput
    follows?: followCreateNestedManyWithoutStoreInput
  }

  export type storeUncheckedCreateWithoutSellerInput = {
    store_id?: number
    store_name: string
    business_email: string
    business_regNo: string
    business_address?: string | null
    store_image?: string | null
    products?: productUncheckedCreateNestedManyWithoutStoreInput
    follows?: followUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeCreateOrConnectWithoutSellerInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutSellerInput, storeUncheckedCreateWithoutSellerInput>
  }

  export type userUpsertWithoutSellerInput = {
    update: XOR<userUpdateWithoutSellerInput, userUncheckedUpdateWithoutSellerInput>
    create: XOR<userCreateWithoutSellerInput, userUncheckedCreateWithoutSellerInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSellerInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSellerInput, userUncheckedUpdateWithoutSellerInput>
  }

  export type userUpdateWithoutSellerInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
    follows?: followUpdateManyWithoutUserNestedInput
    carts?: cartUpdateManyWithoutUserNestedInput
    favorites?: favoriteUpdateManyWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSellerInput = {
    reg_id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
    follows?: followUncheckedUpdateManyWithoutUserNestedInput
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    favorites?: favoriteUncheckedUpdateManyWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type storeUpsertWithoutSellerInput = {
    update: XOR<storeUpdateWithoutSellerInput, storeUncheckedUpdateWithoutSellerInput>
    create: XOR<storeCreateWithoutSellerInput, storeUncheckedCreateWithoutSellerInput>
    where?: storeWhereInput
  }

  export type storeUpdateToOneWithWhereWithoutSellerInput = {
    where?: storeWhereInput
    data: XOR<storeUpdateWithoutSellerInput, storeUncheckedUpdateWithoutSellerInput>
  }

  export type storeUpdateWithoutSellerInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    business_email?: StringFieldUpdateOperationsInput | string
    business_regNo?: StringFieldUpdateOperationsInput | string
    business_address?: NullableStringFieldUpdateOperationsInput | string | null
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productUpdateManyWithoutStoreNestedInput
    follows?: followUpdateManyWithoutStoreNestedInput
  }

  export type storeUncheckedUpdateWithoutSellerInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    business_email?: StringFieldUpdateOperationsInput | string
    business_regNo?: StringFieldUpdateOperationsInput | string
    business_address?: NullableStringFieldUpdateOperationsInput | string | null
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productUncheckedUpdateManyWithoutStoreNestedInput
    follows?: followUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type storeCreateWithoutProductsInput = {
    store_name: string
    business_email: string
    business_regNo: string
    business_address?: string | null
    store_image?: string | null
    seller?: sellerCreateNestedOneWithoutStoreInput
    follows?: followCreateNestedManyWithoutStoreInput
  }

  export type storeUncheckedCreateWithoutProductsInput = {
    store_id?: number
    store_name: string
    business_email: string
    business_regNo: string
    business_address?: string | null
    store_image?: string | null
    seller?: sellerUncheckedCreateNestedOneWithoutStoreInput
    follows?: followUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeCreateOrConnectWithoutProductsInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutProductsInput, storeUncheckedCreateWithoutProductsInput>
  }

  export type cartCreateWithoutProductInput = {
    quantity?: number
    price: string
    description: string
    created_at?: Date | string
    product_image: string
    user: userCreateNestedOneWithoutCartsInput
  }

  export type cartUncheckedCreateWithoutProductInput = {
    cart_id?: number
    reg_id: number
    quantity?: number
    price: string
    description: string
    created_at?: Date | string
    product_image: string
  }

  export type cartCreateOrConnectWithoutProductInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput>
  }

  export type cartCreateManyProductInputEnvelope = {
    data: cartCreateManyProductInput | cartCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type favoriteCreateWithoutProductInput = {
    user: userCreateNestedOneWithoutFavoritesInput
  }

  export type favoriteUncheckedCreateWithoutProductInput = {
    fav_id?: number
    reg_id: number
  }

  export type favoriteCreateOrConnectWithoutProductInput = {
    where: favoriteWhereUniqueInput
    create: XOR<favoriteCreateWithoutProductInput, favoriteUncheckedCreateWithoutProductInput>
  }

  export type favoriteCreateManyProductInputEnvelope = {
    data: favoriteCreateManyProductInput | favoriteCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutProductInput = {
    content: string
    userName: string
  }

  export type reviewUncheckedCreateWithoutProductInput = {
    review_id?: number
    content: string
    userName: string
  }

  export type reviewCreateOrConnectWithoutProductInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput>
  }

  export type reviewCreateManyProductInputEnvelope = {
    data: reviewCreateManyProductInput | reviewCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type order_itemCreateWithoutProductInput = {
    quantity?: number
    price: number
    order: orderCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemUncheckedCreateWithoutProductInput = {
    id?: number
    order_id: number
    quantity?: number
    price: number
  }

  export type order_itemCreateOrConnectWithoutProductInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput>
  }

  export type order_itemCreateManyProductInputEnvelope = {
    data: order_itemCreateManyProductInput | order_itemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type storeUpsertWithoutProductsInput = {
    update: XOR<storeUpdateWithoutProductsInput, storeUncheckedUpdateWithoutProductsInput>
    create: XOR<storeCreateWithoutProductsInput, storeUncheckedCreateWithoutProductsInput>
    where?: storeWhereInput
  }

  export type storeUpdateToOneWithWhereWithoutProductsInput = {
    where?: storeWhereInput
    data: XOR<storeUpdateWithoutProductsInput, storeUncheckedUpdateWithoutProductsInput>
  }

  export type storeUpdateWithoutProductsInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    business_email?: StringFieldUpdateOperationsInput | string
    business_regNo?: StringFieldUpdateOperationsInput | string
    business_address?: NullableStringFieldUpdateOperationsInput | string | null
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: sellerUpdateOneWithoutStoreNestedInput
    follows?: followUpdateManyWithoutStoreNestedInput
  }

  export type storeUncheckedUpdateWithoutProductsInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    business_email?: StringFieldUpdateOperationsInput | string
    business_regNo?: StringFieldUpdateOperationsInput | string
    business_address?: NullableStringFieldUpdateOperationsInput | string | null
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: sellerUncheckedUpdateOneWithoutStoreNestedInput
    follows?: followUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type cartUpsertWithWhereUniqueWithoutProductInput = {
    where: cartWhereUniqueInput
    update: XOR<cartUpdateWithoutProductInput, cartUncheckedUpdateWithoutProductInput>
    create: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput>
  }

  export type cartUpdateWithWhereUniqueWithoutProductInput = {
    where: cartWhereUniqueInput
    data: XOR<cartUpdateWithoutProductInput, cartUncheckedUpdateWithoutProductInput>
  }

  export type cartUpdateManyWithWhereWithoutProductInput = {
    where: cartScalarWhereInput
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyWithoutProductInput>
  }

  export type favoriteUpsertWithWhereUniqueWithoutProductInput = {
    where: favoriteWhereUniqueInput
    update: XOR<favoriteUpdateWithoutProductInput, favoriteUncheckedUpdateWithoutProductInput>
    create: XOR<favoriteCreateWithoutProductInput, favoriteUncheckedCreateWithoutProductInput>
  }

  export type favoriteUpdateWithWhereUniqueWithoutProductInput = {
    where: favoriteWhereUniqueInput
    data: XOR<favoriteUpdateWithoutProductInput, favoriteUncheckedUpdateWithoutProductInput>
  }

  export type favoriteUpdateManyWithWhereWithoutProductInput = {
    where: favoriteScalarWhereInput
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyWithoutProductInput>
  }

  export type reviewUpsertWithWhereUniqueWithoutProductInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutProductInput, reviewUncheckedUpdateWithoutProductInput>
    create: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutProductInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutProductInput, reviewUncheckedUpdateWithoutProductInput>
  }

  export type reviewUpdateManyWithWhereWithoutProductInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutProductInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    review_id?: IntFilter<"review"> | number
    content?: StringFilter<"review"> | string
    userName?: StringFilter<"review"> | string
    product_id?: IntFilter<"review"> | number
  }

  export type order_itemUpsertWithWhereUniqueWithoutProductInput = {
    where: order_itemWhereUniqueInput
    update: XOR<order_itemUpdateWithoutProductInput, order_itemUncheckedUpdateWithoutProductInput>
    create: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput>
  }

  export type order_itemUpdateWithWhereUniqueWithoutProductInput = {
    where: order_itemWhereUniqueInput
    data: XOR<order_itemUpdateWithoutProductInput, order_itemUncheckedUpdateWithoutProductInput>
  }

  export type order_itemUpdateManyWithWhereWithoutProductInput = {
    where: order_itemScalarWhereInput
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutProductInput>
  }

  export type order_itemScalarWhereInput = {
    AND?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
    OR?: order_itemScalarWhereInput[]
    NOT?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
    id?: IntFilter<"order_item"> | number
    order_id?: IntFilter<"order_item"> | number
    product_id?: IntFilter<"order_item"> | number
    quantity?: IntFilter<"order_item"> | number
    price?: FloatFilter<"order_item"> | number
  }

  export type sellerCreateWithoutStoreInput = {
    mobile_no1: string
    mobile_no2: string
    isBlocked?: boolean
    warning1?: string | null
    warning2?: string | null
    warning3?: string | null
    user: userCreateNestedOneWithoutSellerInput
  }

  export type sellerUncheckedCreateWithoutStoreInput = {
    seller_id?: number
    mobile_no1: string
    mobile_no2: string
    reg_id: number
    isBlocked?: boolean
    warning1?: string | null
    warning2?: string | null
    warning3?: string | null
  }

  export type sellerCreateOrConnectWithoutStoreInput = {
    where: sellerWhereUniqueInput
    create: XOR<sellerCreateWithoutStoreInput, sellerUncheckedCreateWithoutStoreInput>
  }

  export type productCreateWithoutStoreInput = {
    name: string
    description: string
    price: number
    stock: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
    carts?: cartCreateNestedManyWithoutProductInput
    favorites?: favoriteCreateNestedManyWithoutProductInput
    reviews?: reviewCreateNestedManyWithoutProductInput
    order_items?: order_itemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutStoreInput = {
    product_id?: number
    name: string
    description: string
    price: number
    stock: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
    carts?: cartUncheckedCreateNestedManyWithoutProductInput
    favorites?: favoriteUncheckedCreateNestedManyWithoutProductInput
    reviews?: reviewUncheckedCreateNestedManyWithoutProductInput
    order_items?: order_itemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutStoreInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutStoreInput, productUncheckedCreateWithoutStoreInput>
  }

  export type productCreateManyStoreInputEnvelope = {
    data: productCreateManyStoreInput | productCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type followCreateWithoutStoreInput = {
    is_followed?: boolean
    user: userCreateNestedOneWithoutFollowsInput
  }

  export type followUncheckedCreateWithoutStoreInput = {
    follow_id?: number
    reg_id: number
    is_followed?: boolean
  }

  export type followCreateOrConnectWithoutStoreInput = {
    where: followWhereUniqueInput
    create: XOR<followCreateWithoutStoreInput, followUncheckedCreateWithoutStoreInput>
  }

  export type followCreateManyStoreInputEnvelope = {
    data: followCreateManyStoreInput | followCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type sellerUpsertWithoutStoreInput = {
    update: XOR<sellerUpdateWithoutStoreInput, sellerUncheckedUpdateWithoutStoreInput>
    create: XOR<sellerCreateWithoutStoreInput, sellerUncheckedCreateWithoutStoreInput>
    where?: sellerWhereInput
  }

  export type sellerUpdateToOneWithWhereWithoutStoreInput = {
    where?: sellerWhereInput
    data: XOR<sellerUpdateWithoutStoreInput, sellerUncheckedUpdateWithoutStoreInput>
  }

  export type sellerUpdateWithoutStoreInput = {
    mobile_no1?: StringFieldUpdateOperationsInput | string
    mobile_no2?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    warning1?: NullableStringFieldUpdateOperationsInput | string | null
    warning2?: NullableStringFieldUpdateOperationsInput | string | null
    warning3?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutSellerNestedInput
  }

  export type sellerUncheckedUpdateWithoutStoreInput = {
    seller_id?: IntFieldUpdateOperationsInput | number
    mobile_no1?: StringFieldUpdateOperationsInput | string
    mobile_no2?: StringFieldUpdateOperationsInput | string
    reg_id?: IntFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    warning1?: NullableStringFieldUpdateOperationsInput | string | null
    warning2?: NullableStringFieldUpdateOperationsInput | string | null
    warning3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productUpsertWithWhereUniqueWithoutStoreInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutStoreInput, productUncheckedUpdateWithoutStoreInput>
    create: XOR<productCreateWithoutStoreInput, productUncheckedCreateWithoutStoreInput>
  }

  export type productUpdateWithWhereUniqueWithoutStoreInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutStoreInput, productUncheckedUpdateWithoutStoreInput>
  }

  export type productUpdateManyWithWhereWithoutStoreInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutStoreInput>
  }

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[]
    OR?: productScalarWhereInput[]
    NOT?: productScalarWhereInput | productScalarWhereInput[]
    product_id?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
    price?: FloatFilter<"product"> | number
    stock?: IntFilter<"product"> | number
    store_id?: IntFilter<"product"> | number
    category?: StringFilter<"product"> | string
    isPremium?: BoolFilter<"product"> | boolean
    product_image?: StringNullableFilter<"product"> | string | null
    store_name?: StringFilter<"product"> | string
    store_image?: StringNullableFilter<"product"> | string | null
  }

  export type followUpsertWithWhereUniqueWithoutStoreInput = {
    where: followWhereUniqueInput
    update: XOR<followUpdateWithoutStoreInput, followUncheckedUpdateWithoutStoreInput>
    create: XOR<followCreateWithoutStoreInput, followUncheckedCreateWithoutStoreInput>
  }

  export type followUpdateWithWhereUniqueWithoutStoreInput = {
    where: followWhereUniqueInput
    data: XOR<followUpdateWithoutStoreInput, followUncheckedUpdateWithoutStoreInput>
  }

  export type followUpdateManyWithWhereWithoutStoreInput = {
    where: followScalarWhereInput
    data: XOR<followUpdateManyMutationInput, followUncheckedUpdateManyWithoutStoreInput>
  }

  export type userCreateWithoutCartsInput = {
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
    follows?: followCreateNestedManyWithoutUserInput
    favorites?: favoriteCreateNestedManyWithoutUserInput
    seller?: sellerCreateNestedOneWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCartsInput = {
    reg_id?: number
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
    follows?: followUncheckedCreateNestedManyWithoutUserInput
    favorites?: favoriteUncheckedCreateNestedManyWithoutUserInput
    seller?: sellerUncheckedCreateNestedOneWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCartsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCartsInput, userUncheckedCreateWithoutCartsInput>
  }

  export type productCreateWithoutCartsInput = {
    name: string
    description: string
    price: number
    stock: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
    store: storeCreateNestedOneWithoutProductsInput
    favorites?: favoriteCreateNestedManyWithoutProductInput
    reviews?: reviewCreateNestedManyWithoutProductInput
    order_items?: order_itemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutCartsInput = {
    product_id?: number
    name: string
    description: string
    price: number
    stock: number
    store_id: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
    favorites?: favoriteUncheckedCreateNestedManyWithoutProductInput
    reviews?: reviewUncheckedCreateNestedManyWithoutProductInput
    order_items?: order_itemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutCartsInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCartsInput, productUncheckedCreateWithoutCartsInput>
  }

  export type userUpsertWithoutCartsInput = {
    update: XOR<userUpdateWithoutCartsInput, userUncheckedUpdateWithoutCartsInput>
    create: XOR<userCreateWithoutCartsInput, userUncheckedCreateWithoutCartsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCartsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCartsInput, userUncheckedUpdateWithoutCartsInput>
  }

  export type userUpdateWithoutCartsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
    follows?: followUpdateManyWithoutUserNestedInput
    favorites?: favoriteUpdateManyWithoutUserNestedInput
    seller?: sellerUpdateOneWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCartsInput = {
    reg_id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
    follows?: followUncheckedUpdateManyWithoutUserNestedInput
    favorites?: favoriteUncheckedUpdateManyWithoutUserNestedInput
    seller?: sellerUncheckedUpdateOneWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type productUpsertWithoutCartsInput = {
    update: XOR<productUpdateWithoutCartsInput, productUncheckedUpdateWithoutCartsInput>
    create: XOR<productCreateWithoutCartsInput, productUncheckedCreateWithoutCartsInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutCartsInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutCartsInput, productUncheckedUpdateWithoutCartsInput>
  }

  export type productUpdateWithoutCartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: storeUpdateOneRequiredWithoutProductsNestedInput
    favorites?: favoriteUpdateManyWithoutProductNestedInput
    reviews?: reviewUpdateManyWithoutProductNestedInput
    order_items?: order_itemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutCartsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    favorites?: favoriteUncheckedUpdateManyWithoutProductNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutProductNestedInput
    order_items?: order_itemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type userCreateWithoutFavoritesInput = {
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
    follows?: followCreateNestedManyWithoutUserInput
    carts?: cartCreateNestedManyWithoutUserInput
    seller?: sellerCreateNestedOneWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutFavoritesInput = {
    reg_id?: number
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
    follows?: followUncheckedCreateNestedManyWithoutUserInput
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    seller?: sellerUncheckedCreateNestedOneWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutFavoritesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFavoritesInput, userUncheckedCreateWithoutFavoritesInput>
  }

  export type productCreateWithoutFavoritesInput = {
    name: string
    description: string
    price: number
    stock: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
    store: storeCreateNestedOneWithoutProductsInput
    carts?: cartCreateNestedManyWithoutProductInput
    reviews?: reviewCreateNestedManyWithoutProductInput
    order_items?: order_itemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutFavoritesInput = {
    product_id?: number
    name: string
    description: string
    price: number
    stock: number
    store_id: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
    carts?: cartUncheckedCreateNestedManyWithoutProductInput
    reviews?: reviewUncheckedCreateNestedManyWithoutProductInput
    order_items?: order_itemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutFavoritesInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutFavoritesInput, productUncheckedCreateWithoutFavoritesInput>
  }

  export type userUpsertWithoutFavoritesInput = {
    update: XOR<userUpdateWithoutFavoritesInput, userUncheckedUpdateWithoutFavoritesInput>
    create: XOR<userCreateWithoutFavoritesInput, userUncheckedCreateWithoutFavoritesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFavoritesInput, userUncheckedUpdateWithoutFavoritesInput>
  }

  export type userUpdateWithoutFavoritesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
    follows?: followUpdateManyWithoutUserNestedInput
    carts?: cartUpdateManyWithoutUserNestedInput
    seller?: sellerUpdateOneWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFavoritesInput = {
    reg_id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
    follows?: followUncheckedUpdateManyWithoutUserNestedInput
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    seller?: sellerUncheckedUpdateOneWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type productUpsertWithoutFavoritesInput = {
    update: XOR<productUpdateWithoutFavoritesInput, productUncheckedUpdateWithoutFavoritesInput>
    create: XOR<productCreateWithoutFavoritesInput, productUncheckedCreateWithoutFavoritesInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutFavoritesInput, productUncheckedUpdateWithoutFavoritesInput>
  }

  export type productUpdateWithoutFavoritesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: storeUpdateOneRequiredWithoutProductsNestedInput
    carts?: cartUpdateManyWithoutProductNestedInput
    reviews?: reviewUpdateManyWithoutProductNestedInput
    order_items?: order_itemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutFavoritesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUncheckedUpdateManyWithoutProductNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutProductNestedInput
    order_items?: order_itemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateWithoutReviewsInput = {
    name: string
    description: string
    price: number
    stock: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
    store: storeCreateNestedOneWithoutProductsInput
    carts?: cartCreateNestedManyWithoutProductInput
    favorites?: favoriteCreateNestedManyWithoutProductInput
    order_items?: order_itemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutReviewsInput = {
    product_id?: number
    name: string
    description: string
    price: number
    stock: number
    store_id: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
    carts?: cartUncheckedCreateNestedManyWithoutProductInput
    favorites?: favoriteUncheckedCreateNestedManyWithoutProductInput
    order_items?: order_itemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutReviewsInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutReviewsInput, productUncheckedCreateWithoutReviewsInput>
  }

  export type productUpsertWithoutReviewsInput = {
    update: XOR<productUpdateWithoutReviewsInput, productUncheckedUpdateWithoutReviewsInput>
    create: XOR<productCreateWithoutReviewsInput, productUncheckedCreateWithoutReviewsInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutReviewsInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutReviewsInput, productUncheckedUpdateWithoutReviewsInput>
  }

  export type productUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: storeUpdateOneRequiredWithoutProductsNestedInput
    carts?: cartUpdateManyWithoutProductNestedInput
    favorites?: favoriteUpdateManyWithoutProductNestedInput
    order_items?: order_itemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutReviewsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUncheckedUpdateManyWithoutProductNestedInput
    favorites?: favoriteUncheckedUpdateManyWithoutProductNestedInput
    order_items?: order_itemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type userCreateWithoutFollowsInput = {
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
    carts?: cartCreateNestedManyWithoutUserInput
    favorites?: favoriteCreateNestedManyWithoutUserInput
    seller?: sellerCreateNestedOneWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutFollowsInput = {
    reg_id?: number
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    favorites?: favoriteUncheckedCreateNestedManyWithoutUserInput
    seller?: sellerUncheckedCreateNestedOneWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutFollowsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFollowsInput, userUncheckedCreateWithoutFollowsInput>
  }

  export type storeCreateWithoutFollowsInput = {
    store_name: string
    business_email: string
    business_regNo: string
    business_address?: string | null
    store_image?: string | null
    seller?: sellerCreateNestedOneWithoutStoreInput
    products?: productCreateNestedManyWithoutStoreInput
  }

  export type storeUncheckedCreateWithoutFollowsInput = {
    store_id?: number
    store_name: string
    business_email: string
    business_regNo: string
    business_address?: string | null
    store_image?: string | null
    seller?: sellerUncheckedCreateNestedOneWithoutStoreInput
    products?: productUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeCreateOrConnectWithoutFollowsInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutFollowsInput, storeUncheckedCreateWithoutFollowsInput>
  }

  export type userUpsertWithoutFollowsInput = {
    update: XOR<userUpdateWithoutFollowsInput, userUncheckedUpdateWithoutFollowsInput>
    create: XOR<userCreateWithoutFollowsInput, userUncheckedCreateWithoutFollowsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFollowsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFollowsInput, userUncheckedUpdateWithoutFollowsInput>
  }

  export type userUpdateWithoutFollowsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
    carts?: cartUpdateManyWithoutUserNestedInput
    favorites?: favoriteUpdateManyWithoutUserNestedInput
    seller?: sellerUpdateOneWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFollowsInput = {
    reg_id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    favorites?: favoriteUncheckedUpdateManyWithoutUserNestedInput
    seller?: sellerUncheckedUpdateOneWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type storeUpsertWithoutFollowsInput = {
    update: XOR<storeUpdateWithoutFollowsInput, storeUncheckedUpdateWithoutFollowsInput>
    create: XOR<storeCreateWithoutFollowsInput, storeUncheckedCreateWithoutFollowsInput>
    where?: storeWhereInput
  }

  export type storeUpdateToOneWithWhereWithoutFollowsInput = {
    where?: storeWhereInput
    data: XOR<storeUpdateWithoutFollowsInput, storeUncheckedUpdateWithoutFollowsInput>
  }

  export type storeUpdateWithoutFollowsInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    business_email?: StringFieldUpdateOperationsInput | string
    business_regNo?: StringFieldUpdateOperationsInput | string
    business_address?: NullableStringFieldUpdateOperationsInput | string | null
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: sellerUpdateOneWithoutStoreNestedInput
    products?: productUpdateManyWithoutStoreNestedInput
  }

  export type storeUncheckedUpdateWithoutFollowsInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    business_email?: StringFieldUpdateOperationsInput | string
    business_regNo?: StringFieldUpdateOperationsInput | string
    business_address?: NullableStringFieldUpdateOperationsInput | string | null
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: sellerUncheckedUpdateOneWithoutStoreNestedInput
    products?: productUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type userCreateWithoutOrdersInput = {
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
    follows?: followCreateNestedManyWithoutUserInput
    carts?: cartCreateNestedManyWithoutUserInput
    favorites?: favoriteCreateNestedManyWithoutUserInput
    seller?: sellerCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutOrdersInput = {
    reg_id?: number
    fullName: string
    username: string
    email: string
    password: string
    mobileNo: string
    gender: string
    address: string
    role?: string
    isSeller?: boolean
    follows?: followUncheckedCreateNestedManyWithoutUserInput
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    favorites?: favoriteUncheckedCreateNestedManyWithoutUserInput
    seller?: sellerUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutOrdersInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemCreateWithoutOrderInput = {
    quantity?: number
    price: number
    product: productCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemUncheckedCreateWithoutOrderInput = {
    id?: number
    product_id: number
    quantity?: number
    price: number
  }

  export type order_itemCreateOrConnectWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
  }

  export type order_itemCreateManyOrderInputEnvelope = {
    data: order_itemCreateManyOrderInput | order_itemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutOrdersInput = {
    update: XOR<userUpdateWithoutOrdersInput, userUncheckedUpdateWithoutOrdersInput>
    create: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutOrdersInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutOrdersInput, userUncheckedUpdateWithoutOrdersInput>
  }

  export type userUpdateWithoutOrdersInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
    follows?: followUpdateManyWithoutUserNestedInput
    carts?: cartUpdateManyWithoutUserNestedInput
    favorites?: favoriteUpdateManyWithoutUserNestedInput
    seller?: sellerUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutOrdersInput = {
    reg_id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isSeller?: BoolFieldUpdateOperationsInput | boolean
    follows?: followUncheckedUpdateManyWithoutUserNestedInput
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    favorites?: favoriteUncheckedUpdateManyWithoutUserNestedInput
    seller?: sellerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type order_itemUpsertWithWhereUniqueWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    update: XOR<order_itemUpdateWithoutOrderInput, order_itemUncheckedUpdateWithoutOrderInput>
    create: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
  }

  export type order_itemUpdateWithWhereUniqueWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    data: XOR<order_itemUpdateWithoutOrderInput, order_itemUncheckedUpdateWithoutOrderInput>
  }

  export type order_itemUpdateManyWithWhereWithoutOrderInput = {
    where: order_itemScalarWhereInput
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutOrderInput>
  }

  export type orderCreateWithoutOrder_itemsInput = {
    guest_name?: string | null
    guest_mobile?: string | null
    guest_address?: string | null
    total_price: number
    courier_service: string
    status: string
    order_date?: Date | string
    deliver_date: Date | string
    user?: userCreateNestedOneWithoutOrdersInput
  }

  export type orderUncheckedCreateWithoutOrder_itemsInput = {
    order_id?: number
    reg_id?: number | null
    guest_name?: string | null
    guest_mobile?: string | null
    guest_address?: string | null
    total_price: number
    courier_service: string
    status: string
    order_date?: Date | string
    deliver_date: Date | string
  }

  export type orderCreateOrConnectWithoutOrder_itemsInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutOrder_itemsInput, orderUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productCreateWithoutOrder_itemsInput = {
    name: string
    description: string
    price: number
    stock: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
    store: storeCreateNestedOneWithoutProductsInput
    carts?: cartCreateNestedManyWithoutProductInput
    favorites?: favoriteCreateNestedManyWithoutProductInput
    reviews?: reviewCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutOrder_itemsInput = {
    product_id?: number
    name: string
    description: string
    price: number
    stock: number
    store_id: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
    carts?: cartUncheckedCreateNestedManyWithoutProductInput
    favorites?: favoriteUncheckedCreateNestedManyWithoutProductInput
    reviews?: reviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutOrder_itemsInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutOrder_itemsInput, productUncheckedCreateWithoutOrder_itemsInput>
  }

  export type orderUpsertWithoutOrder_itemsInput = {
    update: XOR<orderUpdateWithoutOrder_itemsInput, orderUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<orderCreateWithoutOrder_itemsInput, orderUncheckedCreateWithoutOrder_itemsInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutOrder_itemsInput, orderUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type orderUpdateWithoutOrder_itemsInput = {
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    guest_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    guest_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    courier_service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutOrdersNestedInput
  }

  export type orderUncheckedUpdateWithoutOrder_itemsInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    reg_id?: NullableIntFieldUpdateOperationsInput | number | null
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    guest_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    guest_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    courier_service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productUpsertWithoutOrder_itemsInput = {
    update: XOR<productUpdateWithoutOrder_itemsInput, productUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productCreateWithoutOrder_itemsInput, productUncheckedCreateWithoutOrder_itemsInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutOrder_itemsInput, productUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productUpdateWithoutOrder_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: storeUpdateOneRequiredWithoutProductsNestedInput
    carts?: cartUpdateManyWithoutProductNestedInput
    favorites?: favoriteUpdateManyWithoutProductNestedInput
    reviews?: reviewUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutOrder_itemsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUncheckedUpdateManyWithoutProductNestedInput
    favorites?: favoriteUncheckedUpdateManyWithoutProductNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type followCreateManyUserInput = {
    follow_id?: number
    store_id: number
    is_followed?: boolean
  }

  export type cartCreateManyUserInput = {
    cart_id?: number
    product_id: number
    quantity?: number
    price: string
    description: string
    created_at?: Date | string
    product_image: string
  }

  export type favoriteCreateManyUserInput = {
    fav_id?: number
    product_id: number
  }

  export type orderCreateManyUserInput = {
    order_id?: number
    guest_name?: string | null
    guest_mobile?: string | null
    guest_address?: string | null
    total_price: number
    courier_service: string
    status: string
    order_date?: Date | string
    deliver_date: Date | string
  }

  export type followUpdateWithoutUserInput = {
    is_followed?: BoolFieldUpdateOperationsInput | boolean
    store?: storeUpdateOneRequiredWithoutFollowsNestedInput
  }

  export type followUncheckedUpdateWithoutUserInput = {
    follow_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    is_followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type followUncheckedUpdateManyWithoutUserInput = {
    follow_id?: IntFieldUpdateOperationsInput | number
    store_id?: IntFieldUpdateOperationsInput | number
    is_followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cartUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_image?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartUncheckedUpdateWithoutUserInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_image?: StringFieldUpdateOperationsInput | string
  }

  export type cartUncheckedUpdateManyWithoutUserInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_image?: StringFieldUpdateOperationsInput | string
  }

  export type favoriteUpdateWithoutUserInput = {
    product?: productUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type favoriteUncheckedUpdateWithoutUserInput = {
    fav_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type favoriteUncheckedUpdateManyWithoutUserInput = {
    fav_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type orderUpdateWithoutUserInput = {
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    guest_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    guest_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    courier_service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutUserInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    guest_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    guest_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    courier_service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateManyWithoutUserInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    guest_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    guest_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    courier_service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartCreateManyProductInput = {
    cart_id?: number
    reg_id: number
    quantity?: number
    price: string
    description: string
    created_at?: Date | string
    product_image: string
  }

  export type favoriteCreateManyProductInput = {
    fav_id?: number
    reg_id: number
  }

  export type reviewCreateManyProductInput = {
    review_id?: number
    content: string
    userName: string
  }

  export type order_itemCreateManyProductInput = {
    id?: number
    order_id: number
    quantity?: number
    price: number
  }

  export type cartUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_image?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartUncheckedUpdateWithoutProductInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    reg_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_image?: StringFieldUpdateOperationsInput | string
  }

  export type cartUncheckedUpdateManyWithoutProductInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    reg_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_image?: StringFieldUpdateOperationsInput | string
  }

  export type favoriteUpdateWithoutProductInput = {
    user?: userUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type favoriteUncheckedUpdateWithoutProductInput = {
    fav_id?: IntFieldUpdateOperationsInput | number
    reg_id?: IntFieldUpdateOperationsInput | number
  }

  export type favoriteUncheckedUpdateManyWithoutProductInput = {
    fav_id?: IntFieldUpdateOperationsInput | number
    reg_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUpdateWithoutProductInput = {
    content?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
  }

  export type reviewUncheckedUpdateWithoutProductInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
  }

  export type reviewUncheckedUpdateManyWithoutProductInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type order_itemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type productCreateManyStoreInput = {
    product_id?: number
    name: string
    description: string
    price: number
    stock: number
    category: string
    isPremium: boolean
    product_image?: string | null
    store_name: string
    store_image?: string | null
  }

  export type followCreateManyStoreInput = {
    follow_id?: number
    reg_id: number
    is_followed?: boolean
  }

  export type productUpdateWithoutStoreInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUpdateManyWithoutProductNestedInput
    favorites?: favoriteUpdateManyWithoutProductNestedInput
    reviews?: reviewUpdateManyWithoutProductNestedInput
    order_items?: order_itemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutStoreInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUncheckedUpdateManyWithoutProductNestedInput
    favorites?: favoriteUncheckedUpdateManyWithoutProductNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutProductNestedInput
    order_items?: order_itemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutStoreInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    product_image?: NullableStringFieldUpdateOperationsInput | string | null
    store_name?: StringFieldUpdateOperationsInput | string
    store_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type followUpdateWithoutStoreInput = {
    is_followed?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutFollowsNestedInput
  }

  export type followUncheckedUpdateWithoutStoreInput = {
    follow_id?: IntFieldUpdateOperationsInput | number
    reg_id?: IntFieldUpdateOperationsInput | number
    is_followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type followUncheckedUpdateManyWithoutStoreInput = {
    follow_id?: IntFieldUpdateOperationsInput | number
    reg_id?: IntFieldUpdateOperationsInput | number
    is_followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type order_itemCreateManyOrderInput = {
    id?: number
    product_id: number
    quantity?: number
    price: number
  }

  export type order_itemUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    product?: productUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type order_itemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
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