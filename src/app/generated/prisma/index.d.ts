
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Addresses
 * 
 */
export type Addresses = $Result.DefaultSelection<Prisma.$AddressesPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model SubCategories
 * 
 */
export type SubCategories = $Result.DefaultSelection<Prisma.$SubCategoriesPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Wishlist
 * 
 */
export type Wishlist = $Result.DefaultSelection<Prisma.$WishlistPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model PaymentDetails
 * 
 */
export type PaymentDetails = $Result.DefaultSelection<Prisma.$PaymentDetailsPayload>
/**
 * Model OrderDetails
 * 
 */
export type OrderDetails = $Result.DefaultSelection<Prisma.$OrderDetailsPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Customer: 'Customer',
  Seller: 'Seller',
  Admin: 'Admin'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addresses`: Exposes CRUD operations for the **Addresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.addresses.findMany()
    * ```
    */
  get addresses(): Prisma.AddressesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subCategories`: Exposes CRUD operations for the **SubCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategories.findMany()
    * ```
    */
  get subCategories(): Prisma.SubCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wishlist`: Exposes CRUD operations for the **Wishlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wishlists
    * const wishlists = await prisma.wishlist.findMany()
    * ```
    */
  get wishlist(): Prisma.WishlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentDetails`: Exposes CRUD operations for the **PaymentDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentDetails
    * const paymentDetails = await prisma.paymentDetails.findMany()
    * ```
    */
  get paymentDetails(): Prisma.PaymentDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderDetails`: Exposes CRUD operations for the **OrderDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetails.findMany()
    * ```
    */
  get orderDetails(): Prisma.OrderDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Users: 'Users',
    Addresses: 'Addresses',
    Categories: 'Categories',
    SubCategories: 'SubCategories',
    Products: 'Products',
    Wishlist: 'Wishlist',
    Cart: 'Cart',
    CartItem: 'CartItem',
    PaymentDetails: 'PaymentDetails',
    OrderDetails: 'OrderDetails',
    OrderItem: 'OrderItem'
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
      modelProps: "users" | "addresses" | "categories" | "subCategories" | "products" | "wishlist" | "cart" | "cartItem" | "paymentDetails" | "orderDetails" | "orderItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Addresses: {
        payload: Prisma.$AddressesPayload<ExtArgs>
        fields: Prisma.AddressesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressesPayload>
          }
          findFirst: {
            args: Prisma.AddressesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressesPayload>
          }
          findMany: {
            args: Prisma.AddressesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressesPayload>[]
          }
          create: {
            args: Prisma.AddressesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressesPayload>
          }
          createMany: {
            args: Prisma.AddressesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressesPayload>[]
          }
          delete: {
            args: Prisma.AddressesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressesPayload>
          }
          update: {
            args: Prisma.AddressesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressesPayload>
          }
          deleteMany: {
            args: Prisma.AddressesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressesPayload>[]
          }
          upsert: {
            args: Prisma.AddressesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressesPayload>
          }
          aggregate: {
            args: Prisma.AddressesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddresses>
          }
          groupBy: {
            args: Prisma.AddressesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressesCountArgs<ExtArgs>
            result: $Utils.Optional<AddressesCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      SubCategories: {
        payload: Prisma.$SubCategoriesPayload<ExtArgs>
        fields: Prisma.SubCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>
          }
          findFirst: {
            args: Prisma.SubCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>
          }
          findMany: {
            args: Prisma.SubCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>[]
          }
          create: {
            args: Prisma.SubCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>
          }
          createMany: {
            args: Prisma.SubCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubCategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>[]
          }
          delete: {
            args: Prisma.SubCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>
          }
          update: {
            args: Prisma.SubCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubCategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>[]
          }
          upsert: {
            args: Prisma.SubCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriesPayload>
          }
          aggregate: {
            args: Prisma.SubCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategories>
          }
          groupBy: {
            args: Prisma.SubCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoriesCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Wishlist: {
        payload: Prisma.$WishlistPayload<ExtArgs>
        fields: Prisma.WishlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WishlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WishlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          findFirst: {
            args: Prisma.WishlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WishlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          findMany: {
            args: Prisma.WishlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>[]
          }
          create: {
            args: Prisma.WishlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          createMany: {
            args: Prisma.WishlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WishlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>[]
          }
          delete: {
            args: Prisma.WishlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          update: {
            args: Prisma.WishlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          deleteMany: {
            args: Prisma.WishlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WishlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WishlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>[]
          }
          upsert: {
            args: Prisma.WishlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          aggregate: {
            args: Prisma.WishlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWishlist>
          }
          groupBy: {
            args: Prisma.WishlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WishlistCountArgs<ExtArgs>
            result: $Utils.Optional<WishlistCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      PaymentDetails: {
        payload: Prisma.$PaymentDetailsPayload<ExtArgs>
        fields: Prisma.PaymentDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          findFirst: {
            args: Prisma.PaymentDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          findMany: {
            args: Prisma.PaymentDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>[]
          }
          create: {
            args: Prisma.PaymentDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          createMany: {
            args: Prisma.PaymentDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>[]
          }
          delete: {
            args: Prisma.PaymentDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          update: {
            args: Prisma.PaymentDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          aggregate: {
            args: Prisma.PaymentDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentDetails>
          }
          groupBy: {
            args: Prisma.PaymentDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentDetailsCountAggregateOutputType> | number
          }
        }
      }
      OrderDetails: {
        payload: Prisma.$OrderDetailsPayload<ExtArgs>
        fields: Prisma.OrderDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findMany: {
            args: Prisma.OrderDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          create: {
            args: Prisma.OrderDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          createMany: {
            args: Prisma.OrderDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          delete: {
            args: Prisma.OrderDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          update: {
            args: Prisma.OrderDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          upsert: {
            args: Prisma.OrderDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderDetails>
          }
          groupBy: {
            args: Prisma.OrderDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
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
    users?: UsersOmit
    addresses?: AddressesOmit
    categories?: CategoriesOmit
    subCategories?: SubCategoriesOmit
    products?: ProductsOmit
    wishlist?: WishlistOmit
    cart?: CartOmit
    cartItem?: CartItemOmit
    paymentDetails?: PaymentDetailsOmit
    orderDetails?: OrderDetailsOmit
    orderItem?: OrderItemOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    addresses: number
    wishlist: number
    cart: number
    order_details: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | UsersCountOutputTypeCountAddressesArgs
    wishlist?: boolean | UsersCountOutputTypeCountWishlistArgs
    cart?: boolean | UsersCountOutputTypeCountCartArgs
    order_details?: boolean | UsersCountOutputTypeCountOrder_detailsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrder_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    sub_categories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_categories?: boolean | CategoriesCountOutputTypeCountSub_categoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountSub_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoriesWhereInput
  }


  /**
   * Count Type SubCategoriesCountOutputType
   */

  export type SubCategoriesCountOutputType = {
    products: number
  }

  export type SubCategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SubCategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * SubCategoriesCountOutputType without action
   */
  export type SubCategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoriesCountOutputType
     */
    select?: SubCategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCategoriesCountOutputType without action
   */
  export type SubCategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    wishlist: number
    cart_item: number
    order_item: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wishlist?: boolean | ProductsCountOutputTypeCountWishlistArgs
    cart_item?: boolean | ProductsCountOutputTypeCountCart_itemArgs
    order_item?: boolean | ProductsCountOutputTypeCountOrder_itemArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountWishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCart_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    cart_item: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_item?: boolean | CartCountOutputTypeCountCart_itemArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountCart_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type OrderDetailsCountOutputType
   */

  export type OrderDetailsCountOutputType = {
    OrderItem: number
  }

  export type OrderDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItem?: boolean | OrderDetailsCountOutputTypeCountOrderItemArgs
  }

  // Custom InputTypes
  /**
   * OrderDetailsCountOutputType without action
   */
  export type OrderDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetailsCountOutputType
     */
    select?: OrderDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderDetailsCountOutputType without action
   */
  export type OrderDetailsCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    image: string | null
    name: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    image: string | null
    name: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    image: number
    name: number
    username: number
    email: number
    phone_number: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    image?: true
    name?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    image?: true
    name?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    image?: true
    name?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    image: string
    name: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    addresses?: boolean | Users$addressesArgs<ExtArgs>
    wishlist?: boolean | Users$wishlistArgs<ExtArgs>
    cart?: boolean | Users$cartArgs<ExtArgs>
    order_details?: boolean | Users$order_detailsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    image?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "name" | "username" | "email" | "phone_number" | "role" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | Users$addressesArgs<ExtArgs>
    wishlist?: boolean | Users$wishlistArgs<ExtArgs>
    cart?: boolean | Users$cartArgs<ExtArgs>
    order_details?: boolean | Users$order_detailsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      addresses: Prisma.$AddressesPayload<ExtArgs>[]
      wishlist: Prisma.$WishlistPayload<ExtArgs>[]
      cart: Prisma.$CartPayload<ExtArgs>[]
      order_details: Prisma.$OrderDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      name: string
      username: string
      email: string
      phone_number: string
      role: $Enums.Role
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends Users$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Users$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wishlist<T extends Users$wishlistArgs<ExtArgs> = {}>(args?: Subset<T, Users$wishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends Users$cartArgs<ExtArgs> = {}>(args?: Subset<T, Users$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_details<T extends Users$order_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Users$order_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly image: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone_number: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.addresses
   */
  export type Users$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesInclude<ExtArgs> | null
    where?: AddressesWhereInput
    orderBy?: AddressesOrderByWithRelationInput | AddressesOrderByWithRelationInput[]
    cursor?: AddressesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * Users.wishlist
   */
  export type Users$wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    where?: WishlistWhereInput
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    cursor?: WishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Users.cart
   */
  export type Users$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Users.order_details
   */
  export type Users$order_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    cursor?: OrderDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Addresses
   */

  export type AggregateAddresses = {
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  export type AddressesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AddressesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AddressesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    address_line_1: string | null
    address_line_2: string | null
    country: string | null
    city: string | null
    postal_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    address_line_1: string | null
    address_line_2: string | null
    country: string | null
    city: string | null
    postal_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressesCountAggregateOutputType = {
    id: number
    user_id: number
    address_line_1: number
    address_line_2: number
    country: number
    city: number
    postal_code: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AddressesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AddressesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AddressesMinAggregateInputType = {
    id?: true
    user_id?: true
    address_line_1?: true
    address_line_2?: true
    country?: true
    city?: true
    postal_code?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressesMaxAggregateInputType = {
    id?: true
    user_id?: true
    address_line_1?: true
    address_line_2?: true
    country?: true
    city?: true
    postal_code?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressesCountAggregateInputType = {
    id?: true
    user_id?: true
    address_line_1?: true
    address_line_2?: true
    country?: true
    city?: true
    postal_code?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AddressesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to aggregate.
     */
    where?: AddressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressesOrderByWithRelationInput | AddressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressesMaxAggregateInputType
  }

  export type GetAddressesAggregateType<T extends AddressesAggregateArgs> = {
        [P in keyof T & keyof AggregateAddresses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddresses[P]>
      : GetScalarType<T[P], AggregateAddresses[P]>
  }




  export type AddressesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressesWhereInput
    orderBy?: AddressesOrderByWithAggregationInput | AddressesOrderByWithAggregationInput[]
    by: AddressesScalarFieldEnum[] | AddressesScalarFieldEnum
    having?: AddressesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressesCountAggregateInputType | true
    _avg?: AddressesAvgAggregateInputType
    _sum?: AddressesSumAggregateInputType
    _min?: AddressesMinAggregateInputType
    _max?: AddressesMaxAggregateInputType
  }

  export type AddressesGroupByOutputType = {
    id: number
    user_id: number
    address_line_1: string
    address_line_2: string
    country: string
    city: string
    postal_code: string
    created_at: Date
    updated_at: Date
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  type GetAddressesGroupByPayload<T extends AddressesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressesGroupByOutputType[P]>
            : GetScalarType<T[P], AddressesGroupByOutputType[P]>
        }
      >
    >


  export type AddressesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    address_line_1?: boolean
    address_line_2?: boolean
    country?: boolean
    city?: boolean
    postal_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type AddressesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    address_line_1?: boolean
    address_line_2?: boolean
    country?: boolean
    city?: boolean
    postal_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type AddressesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    address_line_1?: boolean
    address_line_2?: boolean
    country?: boolean
    city?: boolean
    postal_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type AddressesSelectScalar = {
    id?: boolean
    user_id?: boolean
    address_line_1?: boolean
    address_line_2?: boolean
    country?: boolean
    city?: boolean
    postal_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AddressesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "address_line_1" | "address_line_2" | "country" | "city" | "postal_code" | "created_at" | "updated_at", ExtArgs["result"]["addresses"]>
  export type AddressesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type AddressesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type AddressesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $AddressesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Addresses"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      address_line_1: string
      address_line_2: string
      country: string
      city: string
      postal_code: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["addresses"]>
    composites: {}
  }

  type AddressesGetPayload<S extends boolean | null | undefined | AddressesDefaultArgs> = $Result.GetResult<Prisma.$AddressesPayload, S>

  type AddressesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressesCountAggregateInputType | true
    }

  export interface AddressesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Addresses'], meta: { name: 'Addresses' } }
    /**
     * Find zero or one Addresses that matches the filter.
     * @param {AddressesFindUniqueArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressesFindUniqueArgs>(args: SelectSubset<T, AddressesFindUniqueArgs<ExtArgs>>): Prisma__AddressesClient<$Result.GetResult<Prisma.$AddressesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Addresses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressesFindUniqueOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressesFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressesClient<$Result.GetResult<Prisma.$AddressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesFindFirstArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressesFindFirstArgs>(args?: SelectSubset<T, AddressesFindFirstArgs<ExtArgs>>): Prisma__AddressesClient<$Result.GetResult<Prisma.$AddressesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesFindFirstOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressesFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressesClient<$Result.GetResult<Prisma.$AddressesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.addresses.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.addresses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressesWithIdOnly = await prisma.addresses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressesFindManyArgs>(args?: SelectSubset<T, AddressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Addresses.
     * @param {AddressesCreateArgs} args - Arguments to create a Addresses.
     * @example
     * // Create one Addresses
     * const Addresses = await prisma.addresses.create({
     *   data: {
     *     // ... data to create a Addresses
     *   }
     * })
     * 
     */
    create<T extends AddressesCreateArgs>(args: SelectSubset<T, AddressesCreateArgs<ExtArgs>>): Prisma__AddressesClient<$Result.GetResult<Prisma.$AddressesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressesCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressesCreateManyArgs>(args?: SelectSubset<T, AddressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressesCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressesWithIdOnly = await prisma.addresses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressesCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Addresses.
     * @param {AddressesDeleteArgs} args - Arguments to delete one Addresses.
     * @example
     * // Delete one Addresses
     * const Addresses = await prisma.addresses.delete({
     *   where: {
     *     // ... filter to delete one Addresses
     *   }
     * })
     * 
     */
    delete<T extends AddressesDeleteArgs>(args: SelectSubset<T, AddressesDeleteArgs<ExtArgs>>): Prisma__AddressesClient<$Result.GetResult<Prisma.$AddressesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Addresses.
     * @param {AddressesUpdateArgs} args - Arguments to update one Addresses.
     * @example
     * // Update one Addresses
     * const addresses = await prisma.addresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressesUpdateArgs>(args: SelectSubset<T, AddressesUpdateArgs<ExtArgs>>): Prisma__AddressesClient<$Result.GetResult<Prisma.$AddressesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressesDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.addresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressesDeleteManyArgs>(args?: SelectSubset<T, AddressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressesUpdateManyArgs>(args: SelectSubset<T, AddressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressesUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressesWithIdOnly = await prisma.addresses.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressesUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Addresses.
     * @param {AddressesUpsertArgs} args - Arguments to update or create a Addresses.
     * @example
     * // Update or create a Addresses
     * const addresses = await prisma.addresses.upsert({
     *   create: {
     *     // ... data to create a Addresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addresses we want to update
     *   }
     * })
     */
    upsert<T extends AddressesUpsertArgs>(args: SelectSubset<T, AddressesUpsertArgs<ExtArgs>>): Prisma__AddressesClient<$Result.GetResult<Prisma.$AddressesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.addresses.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressesCountArgs>(
      args?: Subset<T, AddressesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressesAggregateArgs>(args: Subset<T, AddressesAggregateArgs>): Prisma.PrismaPromise<GetAddressesAggregateType<T>>

    /**
     * Group by Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesGroupByArgs} args - Group by arguments.
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
      T extends AddressesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressesGroupByArgs['orderBy'] }
        : { orderBy?: AddressesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Addresses model
   */
  readonly fields: AddressesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Addresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Addresses model
   */
  interface AddressesFieldRefs {
    readonly id: FieldRef<"Addresses", 'Int'>
    readonly user_id: FieldRef<"Addresses", 'Int'>
    readonly address_line_1: FieldRef<"Addresses", 'String'>
    readonly address_line_2: FieldRef<"Addresses", 'String'>
    readonly country: FieldRef<"Addresses", 'String'>
    readonly city: FieldRef<"Addresses", 'String'>
    readonly postal_code: FieldRef<"Addresses", 'String'>
    readonly created_at: FieldRef<"Addresses", 'DateTime'>
    readonly updated_at: FieldRef<"Addresses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Addresses findUnique
   */
  export type AddressesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where: AddressesWhereUniqueInput
  }

  /**
   * Addresses findUniqueOrThrow
   */
  export type AddressesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where: AddressesWhereUniqueInput
  }

  /**
   * Addresses findFirst
   */
  export type AddressesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressesOrderByWithRelationInput | AddressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * Addresses findFirstOrThrow
   */
  export type AddressesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressesOrderByWithRelationInput | AddressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * Addresses findMany
   */
  export type AddressesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressesOrderByWithRelationInput | AddressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * Addresses create
   */
  export type AddressesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesInclude<ExtArgs> | null
    /**
     * The data needed to create a Addresses.
     */
    data: XOR<AddressesCreateInput, AddressesUncheckedCreateInput>
  }

  /**
   * Addresses createMany
   */
  export type AddressesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressesCreateManyInput | AddressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Addresses createManyAndReturn
   */
  export type AddressesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressesCreateManyInput | AddressesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Addresses update
   */
  export type AddressesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesInclude<ExtArgs> | null
    /**
     * The data needed to update a Addresses.
     */
    data: XOR<AddressesUpdateInput, AddressesUncheckedUpdateInput>
    /**
     * Choose, which Addresses to update.
     */
    where: AddressesWhereUniqueInput
  }

  /**
   * Addresses updateMany
   */
  export type AddressesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressesUpdateManyMutationInput, AddressesUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressesWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Addresses updateManyAndReturn
   */
  export type AddressesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressesUpdateManyMutationInput, AddressesUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressesWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Addresses upsert
   */
  export type AddressesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesInclude<ExtArgs> | null
    /**
     * The filter to search for the Addresses to update in case it exists.
     */
    where: AddressesWhereUniqueInput
    /**
     * In case the Addresses found by the `where` argument doesn't exist, create a new Addresses with this data.
     */
    create: XOR<AddressesCreateInput, AddressesUncheckedCreateInput>
    /**
     * In case the Addresses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressesUpdateInput, AddressesUncheckedUpdateInput>
  }

  /**
   * Addresses delete
   */
  export type AddressesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesInclude<ExtArgs> | null
    /**
     * Filter which Addresses to delete.
     */
    where: AddressesWhereUniqueInput
  }

  /**
   * Addresses deleteMany
   */
  export type AddressesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressesWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Addresses without action
   */
  export type AddressesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addresses
     */
    select?: AddressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addresses
     */
    omit?: AddressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressesInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    description: string
    created_at: Date
    updated_at: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    sub_categories?: boolean | Categories$sub_categoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_categories?: boolean | Categories$sub_categoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      sub_categories: Prisma.$SubCategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sub_categories<T extends Categories$sub_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Categories$sub_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly description: FieldRef<"Categories", 'String'>
    readonly created_at: FieldRef<"Categories", 'DateTime'>
    readonly updated_at: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.sub_categories
   */
  export type Categories$sub_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    where?: SubCategoriesWhereInput
    orderBy?: SubCategoriesOrderByWithRelationInput | SubCategoriesOrderByWithRelationInput[]
    cursor?: SubCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoriesScalarFieldEnum | SubCategoriesScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model SubCategories
   */

  export type AggregateSubCategories = {
    _count: SubCategoriesCountAggregateOutputType | null
    _avg: SubCategoriesAvgAggregateOutputType | null
    _sum: SubCategoriesSumAggregateOutputType | null
    _min: SubCategoriesMinAggregateOutputType | null
    _max: SubCategoriesMaxAggregateOutputType | null
  }

  export type SubCategoriesAvgAggregateOutputType = {
    id: number | null
    categoriesId: number | null
  }

  export type SubCategoriesSumAggregateOutputType = {
    id: number | null
    categoriesId: number | null
  }

  export type SubCategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    categoriesId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubCategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    categoriesId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubCategoriesCountAggregateOutputType = {
    id: number
    name: number
    categoriesId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SubCategoriesAvgAggregateInputType = {
    id?: true
    categoriesId?: true
  }

  export type SubCategoriesSumAggregateInputType = {
    id?: true
    categoriesId?: true
  }

  export type SubCategoriesMinAggregateInputType = {
    id?: true
    name?: true
    categoriesId?: true
    created_at?: true
    updated_at?: true
  }

  export type SubCategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    categoriesId?: true
    created_at?: true
    updated_at?: true
  }

  export type SubCategoriesCountAggregateInputType = {
    id?: true
    name?: true
    categoriesId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SubCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to aggregate.
     */
    where?: SubCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoriesOrderByWithRelationInput | SubCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubCategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubCategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoriesMaxAggregateInputType
  }

  export type GetSubCategoriesAggregateType<T extends SubCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategories[P]>
      : GetScalarType<T[P], AggregateSubCategories[P]>
  }




  export type SubCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoriesWhereInput
    orderBy?: SubCategoriesOrderByWithAggregationInput | SubCategoriesOrderByWithAggregationInput[]
    by: SubCategoriesScalarFieldEnum[] | SubCategoriesScalarFieldEnum
    having?: SubCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoriesCountAggregateInputType | true
    _avg?: SubCategoriesAvgAggregateInputType
    _sum?: SubCategoriesSumAggregateInputType
    _min?: SubCategoriesMinAggregateInputType
    _max?: SubCategoriesMaxAggregateInputType
  }

  export type SubCategoriesGroupByOutputType = {
    id: number
    name: string
    categoriesId: number
    created_at: Date
    updated_at: Date
    _count: SubCategoriesCountAggregateOutputType | null
    _avg: SubCategoriesAvgAggregateOutputType | null
    _sum: SubCategoriesSumAggregateOutputType | null
    _min: SubCategoriesMinAggregateOutputType | null
    _max: SubCategoriesMaxAggregateOutputType | null
  }

  type GetSubCategoriesGroupByPayload<T extends SubCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type SubCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoriesId?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    products?: boolean | SubCategories$productsArgs<ExtArgs>
    _count?: boolean | SubCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategories"]>

  export type SubCategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoriesId?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategories"]>

  export type SubCategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoriesId?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategories"]>

  export type SubCategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    categoriesId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SubCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categoriesId" | "created_at" | "updated_at", ExtArgs["result"]["subCategories"]>
  export type SubCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    products?: boolean | SubCategories$productsArgs<ExtArgs>
    _count?: boolean | SubCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubCategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type SubCategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }

  export type $SubCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategories"
    objects: {
      category: Prisma.$CategoriesPayload<ExtArgs>
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      categoriesId: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["subCategories"]>
    composites: {}
  }

  type SubCategoriesGetPayload<S extends boolean | null | undefined | SubCategoriesDefaultArgs> = $Result.GetResult<Prisma.$SubCategoriesPayload, S>

  type SubCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCategoriesCountAggregateInputType | true
    }

  export interface SubCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategories'], meta: { name: 'SubCategories' } }
    /**
     * Find zero or one SubCategories that matches the filter.
     * @param {SubCategoriesFindUniqueArgs} args - Arguments to find a SubCategories
     * @example
     * // Get one SubCategories
     * const subCategories = await prisma.subCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCategoriesFindUniqueArgs>(args: SelectSubset<T, SubCategoriesFindUniqueArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubCategoriesFindUniqueOrThrowArgs} args - Arguments to find a SubCategories
     * @example
     * // Get one SubCategories
     * const subCategories = await prisma.subCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesFindFirstArgs} args - Arguments to find a SubCategories
     * @example
     * // Get one SubCategories
     * const subCategories = await prisma.subCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCategoriesFindFirstArgs>(args?: SelectSubset<T, SubCategoriesFindFirstArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesFindFirstOrThrowArgs} args - Arguments to find a SubCategories
     * @example
     * // Get one SubCategories
     * const subCategories = await prisma.subCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategories.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoriesWithIdOnly = await prisma.subCategories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubCategoriesFindManyArgs>(args?: SelectSubset<T, SubCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubCategories.
     * @param {SubCategoriesCreateArgs} args - Arguments to create a SubCategories.
     * @example
     * // Create one SubCategories
     * const SubCategories = await prisma.subCategories.create({
     *   data: {
     *     // ... data to create a SubCategories
     *   }
     * })
     * 
     */
    create<T extends SubCategoriesCreateArgs>(args: SelectSubset<T, SubCategoriesCreateArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubCategories.
     * @param {SubCategoriesCreateManyArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategories = await prisma.subCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCategoriesCreateManyArgs>(args?: SelectSubset<T, SubCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubCategories and returns the data saved in the database.
     * @param {SubCategoriesCreateManyAndReturnArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategories = await prisma.subCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubCategories and only return the `id`
     * const subCategoriesWithIdOnly = await prisma.subCategories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubCategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, SubCategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubCategories.
     * @param {SubCategoriesDeleteArgs} args - Arguments to delete one SubCategories.
     * @example
     * // Delete one SubCategories
     * const SubCategories = await prisma.subCategories.delete({
     *   where: {
     *     // ... filter to delete one SubCategories
     *   }
     * })
     * 
     */
    delete<T extends SubCategoriesDeleteArgs>(args: SelectSubset<T, SubCategoriesDeleteArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubCategories.
     * @param {SubCategoriesUpdateArgs} args - Arguments to update one SubCategories.
     * @example
     * // Update one SubCategories
     * const subCategories = await prisma.subCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCategoriesUpdateArgs>(args: SelectSubset<T, SubCategoriesUpdateArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoriesDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCategoriesDeleteManyArgs>(args?: SelectSubset<T, SubCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategories = await prisma.subCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCategoriesUpdateManyArgs>(args: SelectSubset<T, SubCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories and returns the data updated in the database.
     * @param {SubCategoriesUpdateManyAndReturnArgs} args - Arguments to update many SubCategories.
     * @example
     * // Update many SubCategories
     * const subCategories = await prisma.subCategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubCategories and only return the `id`
     * const subCategoriesWithIdOnly = await prisma.subCategories.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubCategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, SubCategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubCategories.
     * @param {SubCategoriesUpsertArgs} args - Arguments to update or create a SubCategories.
     * @example
     * // Update or create a SubCategories
     * const subCategories = await prisma.subCategories.upsert({
     *   create: {
     *     // ... data to create a SubCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategories we want to update
     *   }
     * })
     */
    upsert<T extends SubCategoriesUpsertArgs>(args: SelectSubset<T, SubCategoriesUpsertArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategories.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoriesCountArgs>(
      args?: Subset<T, SubCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubCategoriesAggregateArgs>(args: Subset<T, SubCategoriesAggregateArgs>): Prisma.PrismaPromise<GetSubCategoriesAggregateType<T>>

    /**
     * Group by SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriesGroupByArgs} args - Group by arguments.
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
      T extends SubCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategories model
   */
  readonly fields: SubCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends SubCategories$productsArgs<ExtArgs> = {}>(args?: Subset<T, SubCategories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubCategories model
   */
  interface SubCategoriesFieldRefs {
    readonly id: FieldRef<"SubCategories", 'Int'>
    readonly name: FieldRef<"SubCategories", 'String'>
    readonly categoriesId: FieldRef<"SubCategories", 'Int'>
    readonly created_at: FieldRef<"SubCategories", 'DateTime'>
    readonly updated_at: FieldRef<"SubCategories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubCategories findUnique
   */
  export type SubCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where: SubCategoriesWhereUniqueInput
  }

  /**
   * SubCategories findUniqueOrThrow
   */
  export type SubCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where: SubCategoriesWhereUniqueInput
  }

  /**
   * SubCategories findFirst
   */
  export type SubCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoriesOrderByWithRelationInput | SubCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoriesScalarFieldEnum | SubCategoriesScalarFieldEnum[]
  }

  /**
   * SubCategories findFirstOrThrow
   */
  export type SubCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoriesOrderByWithRelationInput | SubCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoriesScalarFieldEnum | SubCategoriesScalarFieldEnum[]
  }

  /**
   * SubCategories findMany
   */
  export type SubCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoriesOrderByWithRelationInput | SubCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    distinct?: SubCategoriesScalarFieldEnum | SubCategoriesScalarFieldEnum[]
  }

  /**
   * SubCategories create
   */
  export type SubCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategories.
     */
    data: XOR<SubCategoriesCreateInput, SubCategoriesUncheckedCreateInput>
  }

  /**
   * SubCategories createMany
   */
  export type SubCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoriesCreateManyInput | SubCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubCategories createManyAndReturn
   */
  export type SubCategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoriesCreateManyInput | SubCategoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategories update
   */
  export type SubCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategories.
     */
    data: XOR<SubCategoriesUpdateInput, SubCategoriesUncheckedUpdateInput>
    /**
     * Choose, which SubCategories to update.
     */
    where: SubCategoriesWhereUniqueInput
  }

  /**
   * SubCategories updateMany
   */
  export type SubCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoriesUpdateManyMutationInput, SubCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoriesWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
  }

  /**
   * SubCategories updateManyAndReturn
   */
  export type SubCategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoriesUpdateManyMutationInput, SubCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoriesWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategories upsert
   */
  export type SubCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategories to update in case it exists.
     */
    where: SubCategoriesWhereUniqueInput
    /**
     * In case the SubCategories found by the `where` argument doesn't exist, create a new SubCategories with this data.
     */
    create: XOR<SubCategoriesCreateInput, SubCategoriesUncheckedCreateInput>
    /**
     * In case the SubCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoriesUpdateInput, SubCategoriesUncheckedUpdateInput>
  }

  /**
   * SubCategories delete
   */
  export type SubCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
    /**
     * Filter which SubCategories to delete.
     */
    where: SubCategoriesWhereUniqueInput
  }

  /**
   * SubCategories deleteMany
   */
  export type SubCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoriesWhereInput
    /**
     * Limit how many SubCategories to delete.
     */
    limit?: number
  }

  /**
   * SubCategories.products
   */
  export type SubCategories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * SubCategories without action
   */
  export type SubCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategories
     */
    select?: SubCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategories
     */
    omit?: SubCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    sub_category_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    sub_category_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    image: string | null
    quantity: number | null
    price: number | null
    sub_category_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    image: string | null
    quantity: number | null
    price: number | null
    sub_category_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    quantity: number
    price: number
    sub_category_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    sub_category_id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    sub_category_id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    quantity?: true
    price?: true
    sub_category_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    quantity?: true
    price?: true
    sub_category_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    quantity?: true
    price?: true
    sub_category_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    description: string
    image: string
    quantity: number
    price: number
    sub_category_id: number
    created_at: Date
    updated_at: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    quantity?: boolean
    price?: boolean
    sub_category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    sub_category?: boolean | SubCategoriesDefaultArgs<ExtArgs>
    wishlist?: boolean | Products$wishlistArgs<ExtArgs>
    cart_item?: boolean | Products$cart_itemArgs<ExtArgs>
    order_item?: boolean | Products$order_itemArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    quantity?: boolean
    price?: boolean
    sub_category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    sub_category?: boolean | SubCategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    quantity?: boolean
    price?: boolean
    sub_category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    sub_category?: boolean | SubCategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    quantity?: boolean
    price?: boolean
    sub_category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image" | "quantity" | "price" | "sub_category_id" | "created_at" | "updated_at", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_category?: boolean | SubCategoriesDefaultArgs<ExtArgs>
    wishlist?: boolean | Products$wishlistArgs<ExtArgs>
    cart_item?: boolean | Products$cart_itemArgs<ExtArgs>
    order_item?: boolean | Products$order_itemArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_category?: boolean | SubCategoriesDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_category?: boolean | SubCategoriesDefaultArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      sub_category: Prisma.$SubCategoriesPayload<ExtArgs>
      wishlist: Prisma.$WishlistPayload<ExtArgs>[]
      cart_item: Prisma.$CartItemPayload<ExtArgs>[]
      order_item: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      image: string
      quantity: number
      price: number
      sub_category_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sub_category<T extends SubCategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoriesDefaultArgs<ExtArgs>>): Prisma__SubCategoriesClient<$Result.GetResult<Prisma.$SubCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wishlist<T extends Products$wishlistArgs<ExtArgs> = {}>(args?: Subset<T, Products$wishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart_item<T extends Products$cart_itemArgs<ExtArgs> = {}>(args?: Subset<T, Products$cart_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_item<T extends Products$order_itemArgs<ExtArgs> = {}>(args?: Subset<T, Products$order_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'Int'>
    readonly name: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly image: FieldRef<"Products", 'String'>
    readonly quantity: FieldRef<"Products", 'Int'>
    readonly price: FieldRef<"Products", 'Int'>
    readonly sub_category_id: FieldRef<"Products", 'Int'>
    readonly created_at: FieldRef<"Products", 'DateTime'>
    readonly updated_at: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.wishlist
   */
  export type Products$wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    where?: WishlistWhereInput
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    cursor?: WishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Products.cart_item
   */
  export type Products$cart_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Products.order_item
   */
  export type Products$order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Wishlist
   */

  export type AggregateWishlist = {
    _count: WishlistCountAggregateOutputType | null
    _avg: WishlistAvgAggregateOutputType | null
    _sum: WishlistSumAggregateOutputType | null
    _min: WishlistMinAggregateOutputType | null
    _max: WishlistMaxAggregateOutputType | null
  }

  export type WishlistAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
  }

  export type WishlistSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
  }

  export type WishlistMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WishlistMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WishlistCountAggregateOutputType = {
    id: number
    product_id: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WishlistAvgAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
  }

  export type WishlistSumAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
  }

  export type WishlistMinAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type WishlistMaxAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type WishlistCountAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WishlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishlist to aggregate.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wishlists
    **/
    _count?: true | WishlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WishlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WishlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishlistMaxAggregateInputType
  }

  export type GetWishlistAggregateType<T extends WishlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWishlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWishlist[P]>
      : GetScalarType<T[P], AggregateWishlist[P]>
  }




  export type WishlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistWhereInput
    orderBy?: WishlistOrderByWithAggregationInput | WishlistOrderByWithAggregationInput[]
    by: WishlistScalarFieldEnum[] | WishlistScalarFieldEnum
    having?: WishlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishlistCountAggregateInputType | true
    _avg?: WishlistAvgAggregateInputType
    _sum?: WishlistSumAggregateInputType
    _min?: WishlistMinAggregateInputType
    _max?: WishlistMaxAggregateInputType
  }

  export type WishlistGroupByOutputType = {
    id: number
    product_id: number
    user_id: number
    created_at: Date
    updated_at: Date
    _count: WishlistCountAggregateOutputType | null
    _avg: WishlistAvgAggregateOutputType | null
    _sum: WishlistSumAggregateOutputType | null
    _min: WishlistMinAggregateOutputType | null
    _max: WishlistMaxAggregateOutputType | null
  }

  type GetWishlistGroupByPayload<T extends WishlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishlistGroupByOutputType[P]>
            : GetScalarType<T[P], WishlistGroupByOutputType[P]>
        }
      >
    >


  export type WishlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type WishlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type WishlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type WishlistSelectScalar = {
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WishlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["wishlist"]>
  export type WishlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type WishlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type WishlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $WishlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wishlist"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      user_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["wishlist"]>
    composites: {}
  }

  type WishlistGetPayload<S extends boolean | null | undefined | WishlistDefaultArgs> = $Result.GetResult<Prisma.$WishlistPayload, S>

  type WishlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WishlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishlistCountAggregateInputType | true
    }

  export interface WishlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wishlist'], meta: { name: 'Wishlist' } }
    /**
     * Find zero or one Wishlist that matches the filter.
     * @param {WishlistFindUniqueArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WishlistFindUniqueArgs>(args: SelectSubset<T, WishlistFindUniqueArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wishlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WishlistFindUniqueOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WishlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WishlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wishlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistFindFirstArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WishlistFindFirstArgs>(args?: SelectSubset<T, WishlistFindFirstArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wishlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistFindFirstOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WishlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WishlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlists
     * const wishlists = await prisma.wishlist.findMany()
     * 
     * // Get first 10 Wishlists
     * const wishlists = await prisma.wishlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wishlistWithIdOnly = await prisma.wishlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WishlistFindManyArgs>(args?: SelectSubset<T, WishlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wishlist.
     * @param {WishlistCreateArgs} args - Arguments to create a Wishlist.
     * @example
     * // Create one Wishlist
     * const Wishlist = await prisma.wishlist.create({
     *   data: {
     *     // ... data to create a Wishlist
     *   }
     * })
     * 
     */
    create<T extends WishlistCreateArgs>(args: SelectSubset<T, WishlistCreateArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wishlists.
     * @param {WishlistCreateManyArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WishlistCreateManyArgs>(args?: SelectSubset<T, WishlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wishlists and returns the data saved in the database.
     * @param {WishlistCreateManyAndReturnArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wishlists and only return the `id`
     * const wishlistWithIdOnly = await prisma.wishlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WishlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WishlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wishlist.
     * @param {WishlistDeleteArgs} args - Arguments to delete one Wishlist.
     * @example
     * // Delete one Wishlist
     * const Wishlist = await prisma.wishlist.delete({
     *   where: {
     *     // ... filter to delete one Wishlist
     *   }
     * })
     * 
     */
    delete<T extends WishlistDeleteArgs>(args: SelectSubset<T, WishlistDeleteArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wishlist.
     * @param {WishlistUpdateArgs} args - Arguments to update one Wishlist.
     * @example
     * // Update one Wishlist
     * const wishlist = await prisma.wishlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WishlistUpdateArgs>(args: SelectSubset<T, WishlistUpdateArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wishlists.
     * @param {WishlistDeleteManyArgs} args - Arguments to filter Wishlists to delete.
     * @example
     * // Delete a few Wishlists
     * const { count } = await prisma.wishlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WishlistDeleteManyArgs>(args?: SelectSubset<T, WishlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlists
     * const wishlist = await prisma.wishlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WishlistUpdateManyArgs>(args: SelectSubset<T, WishlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishlists and returns the data updated in the database.
     * @param {WishlistUpdateManyAndReturnArgs} args - Arguments to update many Wishlists.
     * @example
     * // Update many Wishlists
     * const wishlist = await prisma.wishlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wishlists and only return the `id`
     * const wishlistWithIdOnly = await prisma.wishlist.updateManyAndReturn({
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
    updateManyAndReturn<T extends WishlistUpdateManyAndReturnArgs>(args: SelectSubset<T, WishlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wishlist.
     * @param {WishlistUpsertArgs} args - Arguments to update or create a Wishlist.
     * @example
     * // Update or create a Wishlist
     * const wishlist = await prisma.wishlist.upsert({
     *   create: {
     *     // ... data to create a Wishlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlist we want to update
     *   }
     * })
     */
    upsert<T extends WishlistUpsertArgs>(args: SelectSubset<T, WishlistUpsertArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistCountArgs} args - Arguments to filter Wishlists to count.
     * @example
     * // Count the number of Wishlists
     * const count = await prisma.wishlist.count({
     *   where: {
     *     // ... the filter for the Wishlists we want to count
     *   }
     * })
    **/
    count<T extends WishlistCountArgs>(
      args?: Subset<T, WishlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WishlistAggregateArgs>(args: Subset<T, WishlistAggregateArgs>): Prisma.PrismaPromise<GetWishlistAggregateType<T>>

    /**
     * Group by Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistGroupByArgs} args - Group by arguments.
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
      T extends WishlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WishlistGroupByArgs['orderBy'] }
        : { orderBy?: WishlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WishlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wishlist model
   */
  readonly fields: WishlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wishlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WishlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Wishlist model
   */
  interface WishlistFieldRefs {
    readonly id: FieldRef<"Wishlist", 'Int'>
    readonly product_id: FieldRef<"Wishlist", 'Int'>
    readonly user_id: FieldRef<"Wishlist", 'Int'>
    readonly created_at: FieldRef<"Wishlist", 'DateTime'>
    readonly updated_at: FieldRef<"Wishlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wishlist findUnique
   */
  export type WishlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist findUniqueOrThrow
   */
  export type WishlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist findFirst
   */
  export type WishlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishlists.
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishlists.
     */
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Wishlist findFirstOrThrow
   */
  export type WishlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishlists.
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishlists.
     */
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Wishlist findMany
   */
  export type WishlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlists to fetch.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wishlists.
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Wishlist create
   */
  export type WishlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Wishlist.
     */
    data: XOR<WishlistCreateInput, WishlistUncheckedCreateInput>
  }

  /**
   * Wishlist createMany
   */
  export type WishlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wishlists.
     */
    data: WishlistCreateManyInput | WishlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wishlist createManyAndReturn
   */
  export type WishlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * The data used to create many Wishlists.
     */
    data: WishlistCreateManyInput | WishlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wishlist update
   */
  export type WishlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Wishlist.
     */
    data: XOR<WishlistUpdateInput, WishlistUncheckedUpdateInput>
    /**
     * Choose, which Wishlist to update.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist updateMany
   */
  export type WishlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wishlists.
     */
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyInput>
    /**
     * Filter which Wishlists to update
     */
    where?: WishlistWhereInput
    /**
     * Limit how many Wishlists to update.
     */
    limit?: number
  }

  /**
   * Wishlist updateManyAndReturn
   */
  export type WishlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * The data used to update Wishlists.
     */
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyInput>
    /**
     * Filter which Wishlists to update
     */
    where?: WishlistWhereInput
    /**
     * Limit how many Wishlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wishlist upsert
   */
  export type WishlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Wishlist to update in case it exists.
     */
    where: WishlistWhereUniqueInput
    /**
     * In case the Wishlist found by the `where` argument doesn't exist, create a new Wishlist with this data.
     */
    create: XOR<WishlistCreateInput, WishlistUncheckedCreateInput>
    /**
     * In case the Wishlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WishlistUpdateInput, WishlistUncheckedUpdateInput>
  }

  /**
   * Wishlist delete
   */
  export type WishlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter which Wishlist to delete.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist deleteMany
   */
  export type WishlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishlists to delete
     */
    where?: WishlistWhereInput
    /**
     * Limit how many Wishlists to delete.
     */
    limit?: number
  }

  /**
   * Wishlist without action
   */
  export type WishlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    total: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    total: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    total: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    total: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    user_id: number
    total: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    user_id?: true
    total?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    user_id?: true
    total?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    user_id?: true
    total?: true
    created_at?: true
    updated_at?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    user_id?: true
    total?: true
    created_at?: true
    updated_at?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    user_id?: true
    total?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
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




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    user_id: number
    total: number
    created_at: Date
    updated_at: Date
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
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


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    cart_item?: boolean | Cart$cart_itemArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean
    user_id?: boolean
    total?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "total" | "created_at" | "updated_at", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    cart_item?: boolean | Cart$cart_itemArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      cart_item: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      total: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
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
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
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
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
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
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
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
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
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
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart_item<T extends Cart$cart_itemArgs<ExtArgs> = {}>(args?: Subset<T, Cart$cart_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'Int'>
    readonly user_id: FieldRef<"Cart", 'Int'>
    readonly total: FieldRef<"Cart", 'Int'>
    readonly created_at: FieldRef<"Cart", 'DateTime'>
    readonly updated_at: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart createManyAndReturn
   */
  export type CartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart updateManyAndReturn
   */
  export type CartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.cart_item
   */
  export type Cart$cart_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    id: number | null
    cart_id: number | null
    products_id: number | null
  }

  export type CartItemSumAggregateOutputType = {
    id: number | null
    cart_id: number | null
    products_id: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: number | null
    cart_id: number | null
    products_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: number | null
    cart_id: number | null
    products_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    cart_id: number
    products_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    id?: true
    cart_id?: true
    products_id?: true
  }

  export type CartItemSumAggregateInputType = {
    id?: true
    cart_id?: true
    products_id?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    cart_id?: true
    products_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    cart_id?: true
    products_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    cart_id?: true
    products_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: number
    cart_id: number
    products_id: number
    created_at: Date
    updated_at: Date
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    products_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    products_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    products_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    cart_id?: boolean
    products_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cart_id" | "products_id" | "created_at" | "updated_at", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cart_id: number
      products_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'Int'>
    readonly cart_id: FieldRef<"CartItem", 'Int'>
    readonly products_id: FieldRef<"CartItem", 'Int'>
    readonly created_at: FieldRef<"CartItem", 'DateTime'>
    readonly updated_at: FieldRef<"CartItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model PaymentDetails
   */

  export type AggregatePaymentDetails = {
    _count: PaymentDetailsCountAggregateOutputType | null
    _avg: PaymentDetailsAvgAggregateOutputType | null
    _sum: PaymentDetailsSumAggregateOutputType | null
    _min: PaymentDetailsMinAggregateOutputType | null
    _max: PaymentDetailsMaxAggregateOutputType | null
  }

  export type PaymentDetailsAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: number | null
  }

  export type PaymentDetailsSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: number | null
  }

  export type PaymentDetailsMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: number | null
    provider: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentDetailsMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: number | null
    provider: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentDetailsCountAggregateOutputType = {
    id: number
    order_id: number
    amount: number
    provider: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentDetailsAvgAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentDetailsSumAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentDetailsMinAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    provider?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentDetailsMaxAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    provider?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentDetailsCountAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    provider?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentDetails to aggregate.
     */
    where?: PaymentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentDetails
    **/
    _count?: true | PaymentDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentDetailsMaxAggregateInputType
  }

  export type GetPaymentDetailsAggregateType<T extends PaymentDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentDetails[P]>
      : GetScalarType<T[P], AggregatePaymentDetails[P]>
  }




  export type PaymentDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentDetailsWhereInput
    orderBy?: PaymentDetailsOrderByWithAggregationInput | PaymentDetailsOrderByWithAggregationInput[]
    by: PaymentDetailsScalarFieldEnum[] | PaymentDetailsScalarFieldEnum
    having?: PaymentDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentDetailsCountAggregateInputType | true
    _avg?: PaymentDetailsAvgAggregateInputType
    _sum?: PaymentDetailsSumAggregateInputType
    _min?: PaymentDetailsMinAggregateInputType
    _max?: PaymentDetailsMaxAggregateInputType
  }

  export type PaymentDetailsGroupByOutputType = {
    id: number
    order_id: number
    amount: number
    provider: string
    status: string
    created_at: Date
    updated_at: Date
    _count: PaymentDetailsCountAggregateOutputType | null
    _avg: PaymentDetailsAvgAggregateOutputType | null
    _sum: PaymentDetailsSumAggregateOutputType | null
    _min: PaymentDetailsMinAggregateOutputType | null
    _max: PaymentDetailsMaxAggregateOutputType | null
  }

  type GetPaymentDetailsGroupByPayload<T extends PaymentDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentDetailsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    amount?: boolean
    provider?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | OrderDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentDetails"]>

  export type PaymentDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    amount?: boolean
    provider?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | OrderDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentDetails"]>

  export type PaymentDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    amount?: boolean
    provider?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | OrderDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentDetails"]>

  export type PaymentDetailsSelectScalar = {
    id?: boolean
    order_id?: boolean
    amount?: boolean
    provider?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PaymentDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "amount" | "provider" | "status" | "created_at" | "updated_at", ExtArgs["result"]["paymentDetails"]>
  export type PaymentDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | OrderDetailsDefaultArgs<ExtArgs>
  }
  export type PaymentDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | OrderDetailsDefaultArgs<ExtArgs>
  }
  export type PaymentDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | OrderDetailsDefaultArgs<ExtArgs>
  }

  export type $PaymentDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentDetails"
    objects: {
      orders: Prisma.$OrderDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      amount: number
      provider: string
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["paymentDetails"]>
    composites: {}
  }

  type PaymentDetailsGetPayload<S extends boolean | null | undefined | PaymentDetailsDefaultArgs> = $Result.GetResult<Prisma.$PaymentDetailsPayload, S>

  type PaymentDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentDetailsCountAggregateInputType | true
    }

  export interface PaymentDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentDetails'], meta: { name: 'PaymentDetails' } }
    /**
     * Find zero or one PaymentDetails that matches the filter.
     * @param {PaymentDetailsFindUniqueArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentDetailsFindUniqueArgs>(args: SelectSubset<T, PaymentDetailsFindUniqueArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentDetailsFindUniqueOrThrowArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsFindFirstArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentDetailsFindFirstArgs>(args?: SelectSubset<T, PaymentDetailsFindFirstArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsFindFirstOrThrowArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findMany()
     * 
     * // Get first 10 PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentDetailsWithIdOnly = await prisma.paymentDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentDetailsFindManyArgs>(args?: SelectSubset<T, PaymentDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentDetails.
     * @param {PaymentDetailsCreateArgs} args - Arguments to create a PaymentDetails.
     * @example
     * // Create one PaymentDetails
     * const PaymentDetails = await prisma.paymentDetails.create({
     *   data: {
     *     // ... data to create a PaymentDetails
     *   }
     * })
     * 
     */
    create<T extends PaymentDetailsCreateArgs>(args: SelectSubset<T, PaymentDetailsCreateArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentDetails.
     * @param {PaymentDetailsCreateManyArgs} args - Arguments to create many PaymentDetails.
     * @example
     * // Create many PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentDetailsCreateManyArgs>(args?: SelectSubset<T, PaymentDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentDetails and returns the data saved in the database.
     * @param {PaymentDetailsCreateManyAndReturnArgs} args - Arguments to create many PaymentDetails.
     * @example
     * // Create many PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentDetails and only return the `id`
     * const paymentDetailsWithIdOnly = await prisma.paymentDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentDetails.
     * @param {PaymentDetailsDeleteArgs} args - Arguments to delete one PaymentDetails.
     * @example
     * // Delete one PaymentDetails
     * const PaymentDetails = await prisma.paymentDetails.delete({
     *   where: {
     *     // ... filter to delete one PaymentDetails
     *   }
     * })
     * 
     */
    delete<T extends PaymentDetailsDeleteArgs>(args: SelectSubset<T, PaymentDetailsDeleteArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentDetails.
     * @param {PaymentDetailsUpdateArgs} args - Arguments to update one PaymentDetails.
     * @example
     * // Update one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentDetailsUpdateArgs>(args: SelectSubset<T, PaymentDetailsUpdateArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentDetails.
     * @param {PaymentDetailsDeleteManyArgs} args - Arguments to filter PaymentDetails to delete.
     * @example
     * // Delete a few PaymentDetails
     * const { count } = await prisma.paymentDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDetailsDeleteManyArgs>(args?: SelectSubset<T, PaymentDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentDetailsUpdateManyArgs>(args: SelectSubset<T, PaymentDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentDetails and returns the data updated in the database.
     * @param {PaymentDetailsUpdateManyAndReturnArgs} args - Arguments to update many PaymentDetails.
     * @example
     * // Update many PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentDetails and only return the `id`
     * const paymentDetailsWithIdOnly = await prisma.paymentDetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentDetails.
     * @param {PaymentDetailsUpsertArgs} args - Arguments to update or create a PaymentDetails.
     * @example
     * // Update or create a PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.upsert({
     *   create: {
     *     // ... data to create a PaymentDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentDetails we want to update
     *   }
     * })
     */
    upsert<T extends PaymentDetailsUpsertArgs>(args: SelectSubset<T, PaymentDetailsUpsertArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsCountArgs} args - Arguments to filter PaymentDetails to count.
     * @example
     * // Count the number of PaymentDetails
     * const count = await prisma.paymentDetails.count({
     *   where: {
     *     // ... the filter for the PaymentDetails we want to count
     *   }
     * })
    **/
    count<T extends PaymentDetailsCountArgs>(
      args?: Subset<T, PaymentDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentDetailsAggregateArgs>(args: Subset<T, PaymentDetailsAggregateArgs>): Prisma.PrismaPromise<GetPaymentDetailsAggregateType<T>>

    /**
     * Group by PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsGroupByArgs} args - Group by arguments.
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
      T extends PaymentDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentDetailsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentDetails model
   */
  readonly fields: PaymentDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends OrderDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDetailsDefaultArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentDetails model
   */
  interface PaymentDetailsFieldRefs {
    readonly id: FieldRef<"PaymentDetails", 'Int'>
    readonly order_id: FieldRef<"PaymentDetails", 'Int'>
    readonly amount: FieldRef<"PaymentDetails", 'Int'>
    readonly provider: FieldRef<"PaymentDetails", 'String'>
    readonly status: FieldRef<"PaymentDetails", 'String'>
    readonly created_at: FieldRef<"PaymentDetails", 'DateTime'>
    readonly updated_at: FieldRef<"PaymentDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentDetails findUnique
   */
  export type PaymentDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where: PaymentDetailsWhereUniqueInput
  }

  /**
   * PaymentDetails findUniqueOrThrow
   */
  export type PaymentDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where: PaymentDetailsWhereUniqueInput
  }

  /**
   * PaymentDetails findFirst
   */
  export type PaymentDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[]
  }

  /**
   * PaymentDetails findFirstOrThrow
   */
  export type PaymentDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[]
  }

  /**
   * PaymentDetails findMany
   */
  export type PaymentDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentDetails.
     */
    cursor?: PaymentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[]
  }

  /**
   * PaymentDetails create
   */
  export type PaymentDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentDetails.
     */
    data: XOR<PaymentDetailsCreateInput, PaymentDetailsUncheckedCreateInput>
  }

  /**
   * PaymentDetails createMany
   */
  export type PaymentDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentDetails.
     */
    data: PaymentDetailsCreateManyInput | PaymentDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentDetails createManyAndReturn
   */
  export type PaymentDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentDetails.
     */
    data: PaymentDetailsCreateManyInput | PaymentDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentDetails update
   */
  export type PaymentDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentDetails.
     */
    data: XOR<PaymentDetailsUpdateInput, PaymentDetailsUncheckedUpdateInput>
    /**
     * Choose, which PaymentDetails to update.
     */
    where: PaymentDetailsWhereUniqueInput
  }

  /**
   * PaymentDetails updateMany
   */
  export type PaymentDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentDetails.
     */
    data: XOR<PaymentDetailsUpdateManyMutationInput, PaymentDetailsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentDetails to update
     */
    where?: PaymentDetailsWhereInput
    /**
     * Limit how many PaymentDetails to update.
     */
    limit?: number
  }

  /**
   * PaymentDetails updateManyAndReturn
   */
  export type PaymentDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * The data used to update PaymentDetails.
     */
    data: XOR<PaymentDetailsUpdateManyMutationInput, PaymentDetailsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentDetails to update
     */
    where?: PaymentDetailsWhereInput
    /**
     * Limit how many PaymentDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentDetails upsert
   */
  export type PaymentDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentDetails to update in case it exists.
     */
    where: PaymentDetailsWhereUniqueInput
    /**
     * In case the PaymentDetails found by the `where` argument doesn't exist, create a new PaymentDetails with this data.
     */
    create: XOR<PaymentDetailsCreateInput, PaymentDetailsUncheckedCreateInput>
    /**
     * In case the PaymentDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentDetailsUpdateInput, PaymentDetailsUncheckedUpdateInput>
  }

  /**
   * PaymentDetails delete
   */
  export type PaymentDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter which PaymentDetails to delete.
     */
    where: PaymentDetailsWhereUniqueInput
  }

  /**
   * PaymentDetails deleteMany
   */
  export type PaymentDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentDetails to delete
     */
    where?: PaymentDetailsWhereInput
    /**
     * Limit how many PaymentDetails to delete.
     */
    limit?: number
  }

  /**
   * PaymentDetails without action
   */
  export type PaymentDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
  }


  /**
   * Model OrderDetails
   */

  export type AggregateOrderDetails = {
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  export type OrderDetailsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    total: number | null
  }

  export type OrderDetailsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    total: number | null
  }

  export type OrderDetailsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_id: string | null
    total: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderDetailsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_id: string | null
    total: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderDetailsCountAggregateOutputType = {
    id: number
    user_id: number
    payment_id: number
    total: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderDetailsAvgAggregateInputType = {
    id?: true
    user_id?: true
    total?: true
  }

  export type OrderDetailsSumAggregateInputType = {
    id?: true
    user_id?: true
    total?: true
  }

  export type OrderDetailsMinAggregateInputType = {
    id?: true
    user_id?: true
    payment_id?: true
    total?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderDetailsMaxAggregateInputType = {
    id?: true
    user_id?: true
    payment_id?: true
    total?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderDetailsCountAggregateInputType = {
    id?: true
    user_id?: true
    payment_id?: true
    total?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to aggregate.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type GetOrderDetailsAggregateType<T extends OrderDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetails[P]>
      : GetScalarType<T[P], AggregateOrderDetails[P]>
  }




  export type OrderDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithAggregationInput | OrderDetailsOrderByWithAggregationInput[]
    by: OrderDetailsScalarFieldEnum[] | OrderDetailsScalarFieldEnum
    having?: OrderDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailsCountAggregateInputType | true
    _avg?: OrderDetailsAvgAggregateInputType
    _sum?: OrderDetailsSumAggregateInputType
    _min?: OrderDetailsMinAggregateInputType
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type OrderDetailsGroupByOutputType = {
    id: number
    user_id: number
    payment_id: string
    total: number
    created_at: Date
    updated_at: Date
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  type GetOrderDetailsGroupByPayload<T extends OrderDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    payment_id?: boolean
    total?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    payment_details?: boolean | OrderDetails$payment_detailsArgs<ExtArgs>
    OrderItem?: boolean | OrderDetails$OrderItemArgs<ExtArgs>
    _count?: boolean | OrderDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    payment_id?: boolean
    total?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    payment_id?: boolean
    total?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectScalar = {
    id?: boolean
    user_id?: boolean
    payment_id?: boolean
    total?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrderDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "payment_id" | "total" | "created_at" | "updated_at", ExtArgs["result"]["orderDetails"]>
  export type OrderDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    payment_details?: boolean | OrderDetails$payment_detailsArgs<ExtArgs>
    OrderItem?: boolean | OrderDetails$OrderItemArgs<ExtArgs>
    _count?: boolean | OrderDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type OrderDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $OrderDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetails"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      payment_details: Prisma.$PaymentDetailsPayload<ExtArgs> | null
      OrderItem: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      payment_id: string
      total: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orderDetails"]>
    composites: {}
  }

  type OrderDetailsGetPayload<S extends boolean | null | undefined | OrderDetailsDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailsPayload, S>

  type OrderDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderDetailsCountAggregateInputType | true
    }

  export interface OrderDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetails'], meta: { name: 'OrderDetails' } }
    /**
     * Find zero or one OrderDetails that matches the filter.
     * @param {OrderDetailsFindUniqueArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDetailsFindUniqueArgs>(args: SelectSubset<T, OrderDetailsFindUniqueArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderDetailsFindUniqueOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDetailsFindFirstArgs>(args?: SelectSubset<T, OrderDetailsFindFirstArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderDetailsFindManyArgs>(args?: SelectSubset<T, OrderDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderDetails.
     * @param {OrderDetailsCreateArgs} args - Arguments to create a OrderDetails.
     * @example
     * // Create one OrderDetails
     * const OrderDetails = await prisma.orderDetails.create({
     *   data: {
     *     // ... data to create a OrderDetails
     *   }
     * })
     * 
     */
    create<T extends OrderDetailsCreateArgs>(args: SelectSubset<T, OrderDetailsCreateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderDetails.
     * @param {OrderDetailsCreateManyArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetails = await prisma.orderDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderDetailsCreateManyArgs>(args?: SelectSubset<T, OrderDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderDetails and returns the data saved in the database.
     * @param {OrderDetailsCreateManyAndReturnArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetails = await prisma.orderDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderDetails and only return the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderDetails.
     * @param {OrderDetailsDeleteArgs} args - Arguments to delete one OrderDetails.
     * @example
     * // Delete one OrderDetails
     * const OrderDetails = await prisma.orderDetails.delete({
     *   where: {
     *     // ... filter to delete one OrderDetails
     *   }
     * })
     * 
     */
    delete<T extends OrderDetailsDeleteArgs>(args: SelectSubset<T, OrderDetailsDeleteArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderDetails.
     * @param {OrderDetailsUpdateArgs} args - Arguments to update one OrderDetails.
     * @example
     * // Update one OrderDetails
     * const orderDetails = await prisma.orderDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderDetailsUpdateArgs>(args: SelectSubset<T, OrderDetailsUpdateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailsDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDetailsDeleteManyArgs>(args?: SelectSubset<T, OrderDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderDetailsUpdateManyArgs>(args: SelectSubset<T, OrderDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails and returns the data updated in the database.
     * @param {OrderDetailsUpdateManyAndReturnArgs} args - Arguments to update many OrderDetails.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderDetails and only return the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderDetails.
     * @param {OrderDetailsUpsertArgs} args - Arguments to update or create a OrderDetails.
     * @example
     * // Update or create a OrderDetails
     * const orderDetails = await prisma.orderDetails.upsert({
     *   create: {
     *     // ... data to create a OrderDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetails we want to update
     *   }
     * })
     */
    upsert<T extends OrderDetailsUpsertArgs>(args: SelectSubset<T, OrderDetailsUpsertArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetails.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailsCountArgs>(
      args?: Subset<T, OrderDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderDetailsAggregateArgs>(args: Subset<T, OrderDetailsAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailsAggregateType<T>>

    /**
     * Group by OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsGroupByArgs} args - Group by arguments.
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
      T extends OrderDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailsGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetails model
   */
  readonly fields: OrderDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment_details<T extends OrderDetails$payment_detailsArgs<ExtArgs> = {}>(args?: Subset<T, OrderDetails$payment_detailsArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    OrderItem<T extends OrderDetails$OrderItemArgs<ExtArgs> = {}>(args?: Subset<T, OrderDetails$OrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OrderDetails model
   */
  interface OrderDetailsFieldRefs {
    readonly id: FieldRef<"OrderDetails", 'Int'>
    readonly user_id: FieldRef<"OrderDetails", 'Int'>
    readonly payment_id: FieldRef<"OrderDetails", 'String'>
    readonly total: FieldRef<"OrderDetails", 'Int'>
    readonly created_at: FieldRef<"OrderDetails", 'DateTime'>
    readonly updated_at: FieldRef<"OrderDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderDetails findUnique
   */
  export type OrderDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findUniqueOrThrow
   */
  export type OrderDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findFirst
   */
  export type OrderDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails findFirstOrThrow
   */
  export type OrderDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails findMany
   */
  export type OrderDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails create
   */
  export type OrderDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetails.
     */
    data: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
  }

  /**
   * OrderDetails createMany
   */
  export type OrderDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderDetails createManyAndReturn
   */
  export type OrderDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetails update
   */
  export type OrderDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetails.
     */
    data: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
    /**
     * Choose, which OrderDetails to update.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails updateMany
   */
  export type OrderDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number
  }

  /**
   * OrderDetails updateManyAndReturn
   */
  export type OrderDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetails upsert
   */
  export type OrderDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetails to update in case it exists.
     */
    where: OrderDetailsWhereUniqueInput
    /**
     * In case the OrderDetails found by the `where` argument doesn't exist, create a new OrderDetails with this data.
     */
    create: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
    /**
     * In case the OrderDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
  }

  /**
   * OrderDetails delete
   */
  export type OrderDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter which OrderDetails to delete.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails deleteMany
   */
  export type OrderDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to delete.
     */
    limit?: number
  }

  /**
   * OrderDetails.payment_details
   */
  export type OrderDetails$payment_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    where?: PaymentDetailsWhereInput
  }

  /**
   * OrderDetails.OrderItem
   */
  export type OrderDetails$OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderDetails without action
   */
  export type OrderDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    created_at: Date
    updated_at: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_details?: boolean | OrderDetailsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_details?: boolean | OrderDetailsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_details?: boolean | OrderDetailsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "quantity" | "created_at" | "updated_at", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | OrderDetailsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | OrderDetailsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | OrderDetailsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order_details: Prisma.$OrderDetailsPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      product_id: number
      quantity: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_details<T extends OrderDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDetailsDefaultArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'Int'>
    readonly order_id: FieldRef<"OrderItem", 'Int'>
    readonly product_id: FieldRef<"OrderItem", 'Int'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly created_at: FieldRef<"OrderItem", 'DateTime'>
    readonly updated_at: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    image: 'image',
    name: 'name',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AddressesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    address_line_1: 'address_line_1',
    address_line_2: 'address_line_2',
    country: 'country',
    city: 'city',
    postal_code: 'postal_code',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AddressesScalarFieldEnum = (typeof AddressesScalarFieldEnum)[keyof typeof AddressesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const SubCategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categoriesId: 'categoriesId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SubCategoriesScalarFieldEnum = (typeof SubCategoriesScalarFieldEnum)[keyof typeof SubCategoriesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    quantity: 'quantity',
    price: 'price',
    sub_category_id: 'sub_category_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const WishlistScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WishlistScalarFieldEnum = (typeof WishlistScalarFieldEnum)[keyof typeof WishlistScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    total: 'total',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    cart_id: 'cart_id',
    products_id: 'products_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const PaymentDetailsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    amount: 'amount',
    provider: 'provider',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentDetailsScalarFieldEnum = (typeof PaymentDetailsScalarFieldEnum)[keyof typeof PaymentDetailsScalarFieldEnum]


  export const OrderDetailsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    payment_id: 'payment_id',
    total: 'total',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderDetailsScalarFieldEnum = (typeof OrderDetailsScalarFieldEnum)[keyof typeof OrderDetailsScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    image?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone_number?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    addresses?: AddressesListRelationFilter
    wishlist?: WishlistListRelationFilter
    cart?: CartListRelationFilter
    order_details?: OrderDetailsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    addresses?: AddressesOrderByRelationAggregateInput
    wishlist?: WishlistOrderByRelationAggregateInput
    cart?: CartOrderByRelationAggregateInput
    order_details?: OrderDetailsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    phone_number?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    image?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    addresses?: AddressesListRelationFilter
    wishlist?: WishlistListRelationFilter
    cart?: CartListRelationFilter
    order_details?: OrderDetailsListRelationFilter
  }, "id" | "username" | "email" | "phone_number">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    image?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phone_number?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type AddressesWhereInput = {
    AND?: AddressesWhereInput | AddressesWhereInput[]
    OR?: AddressesWhereInput[]
    NOT?: AddressesWhereInput | AddressesWhereInput[]
    id?: IntFilter<"Addresses"> | number
    user_id?: IntFilter<"Addresses"> | number
    address_line_1?: StringFilter<"Addresses"> | string
    address_line_2?: StringFilter<"Addresses"> | string
    country?: StringFilter<"Addresses"> | string
    city?: StringFilter<"Addresses"> | string
    postal_code?: StringFilter<"Addresses"> | string
    created_at?: DateTimeFilter<"Addresses"> | Date | string
    updated_at?: DateTimeFilter<"Addresses"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type AddressesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type AddressesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressesWhereInput | AddressesWhereInput[]
    OR?: AddressesWhereInput[]
    NOT?: AddressesWhereInput | AddressesWhereInput[]
    user_id?: IntFilter<"Addresses"> | number
    address_line_1?: StringFilter<"Addresses"> | string
    address_line_2?: StringFilter<"Addresses"> | string
    country?: StringFilter<"Addresses"> | string
    city?: StringFilter<"Addresses"> | string
    postal_code?: StringFilter<"Addresses"> | string
    created_at?: DateTimeFilter<"Addresses"> | Date | string
    updated_at?: DateTimeFilter<"Addresses"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type AddressesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AddressesCountOrderByAggregateInput
    _avg?: AddressesAvgOrderByAggregateInput
    _max?: AddressesMaxOrderByAggregateInput
    _min?: AddressesMinOrderByAggregateInput
    _sum?: AddressesSumOrderByAggregateInput
  }

  export type AddressesScalarWhereWithAggregatesInput = {
    AND?: AddressesScalarWhereWithAggregatesInput | AddressesScalarWhereWithAggregatesInput[]
    OR?: AddressesScalarWhereWithAggregatesInput[]
    NOT?: AddressesScalarWhereWithAggregatesInput | AddressesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Addresses"> | number
    user_id?: IntWithAggregatesFilter<"Addresses"> | number
    address_line_1?: StringWithAggregatesFilter<"Addresses"> | string
    address_line_2?: StringWithAggregatesFilter<"Addresses"> | string
    country?: StringWithAggregatesFilter<"Addresses"> | string
    city?: StringWithAggregatesFilter<"Addresses"> | string
    postal_code?: StringWithAggregatesFilter<"Addresses"> | string
    created_at?: DateTimeWithAggregatesFilter<"Addresses"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Addresses"> | Date | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    description?: StringFilter<"Categories"> | string
    created_at?: DateTimeFilter<"Categories"> | Date | string
    updated_at?: DateTimeFilter<"Categories"> | Date | string
    sub_categories?: SubCategoriesListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sub_categories?: SubCategoriesOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    description?: StringFilter<"Categories"> | string
    created_at?: DateTimeFilter<"Categories"> | Date | string
    updated_at?: DateTimeFilter<"Categories"> | Date | string
    sub_categories?: SubCategoriesListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    description?: StringWithAggregatesFilter<"Categories"> | string
    created_at?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type SubCategoriesWhereInput = {
    AND?: SubCategoriesWhereInput | SubCategoriesWhereInput[]
    OR?: SubCategoriesWhereInput[]
    NOT?: SubCategoriesWhereInput | SubCategoriesWhereInput[]
    id?: IntFilter<"SubCategories"> | number
    name?: StringFilter<"SubCategories"> | string
    categoriesId?: IntFilter<"SubCategories"> | number
    created_at?: DateTimeFilter<"SubCategories"> | Date | string
    updated_at?: DateTimeFilter<"SubCategories"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    products?: ProductsListRelationFilter
  }

  export type SubCategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categoriesId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category?: CategoriesOrderByWithRelationInput
    products?: ProductsOrderByRelationAggregateInput
  }

  export type SubCategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubCategoriesWhereInput | SubCategoriesWhereInput[]
    OR?: SubCategoriesWhereInput[]
    NOT?: SubCategoriesWhereInput | SubCategoriesWhereInput[]
    name?: StringFilter<"SubCategories"> | string
    categoriesId?: IntFilter<"SubCategories"> | number
    created_at?: DateTimeFilter<"SubCategories"> | Date | string
    updated_at?: DateTimeFilter<"SubCategories"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    products?: ProductsListRelationFilter
  }, "id">

  export type SubCategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categoriesId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SubCategoriesCountOrderByAggregateInput
    _avg?: SubCategoriesAvgOrderByAggregateInput
    _max?: SubCategoriesMaxOrderByAggregateInput
    _min?: SubCategoriesMinOrderByAggregateInput
    _sum?: SubCategoriesSumOrderByAggregateInput
  }

  export type SubCategoriesScalarWhereWithAggregatesInput = {
    AND?: SubCategoriesScalarWhereWithAggregatesInput | SubCategoriesScalarWhereWithAggregatesInput[]
    OR?: SubCategoriesScalarWhereWithAggregatesInput[]
    NOT?: SubCategoriesScalarWhereWithAggregatesInput | SubCategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubCategories"> | number
    name?: StringWithAggregatesFilter<"SubCategories"> | string
    categoriesId?: IntWithAggregatesFilter<"SubCategories"> | number
    created_at?: DateTimeWithAggregatesFilter<"SubCategories"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SubCategories"> | Date | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    image?: StringFilter<"Products"> | string
    quantity?: IntFilter<"Products"> | number
    price?: IntFilter<"Products"> | number
    sub_category_id?: IntFilter<"Products"> | number
    created_at?: DateTimeFilter<"Products"> | Date | string
    updated_at?: DateTimeFilter<"Products"> | Date | string
    sub_category?: XOR<SubCategoriesScalarRelationFilter, SubCategoriesWhereInput>
    wishlist?: WishlistListRelationFilter
    cart_item?: CartItemListRelationFilter
    order_item?: OrderItemListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    sub_category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sub_category?: SubCategoriesOrderByWithRelationInput
    wishlist?: WishlistOrderByRelationAggregateInput
    cart_item?: CartItemOrderByRelationAggregateInput
    order_item?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    image?: StringFilter<"Products"> | string
    quantity?: IntFilter<"Products"> | number
    price?: IntFilter<"Products"> | number
    sub_category_id?: IntFilter<"Products"> | number
    created_at?: DateTimeFilter<"Products"> | Date | string
    updated_at?: DateTimeFilter<"Products"> | Date | string
    sub_category?: XOR<SubCategoriesScalarRelationFilter, SubCategoriesWhereInput>
    wishlist?: WishlistListRelationFilter
    cart_item?: CartItemListRelationFilter
    order_item?: OrderItemListRelationFilter
  }, "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    sub_category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Products"> | number
    name?: StringWithAggregatesFilter<"Products"> | string
    description?: StringWithAggregatesFilter<"Products"> | string
    image?: StringWithAggregatesFilter<"Products"> | string
    quantity?: IntWithAggregatesFilter<"Products"> | number
    price?: IntWithAggregatesFilter<"Products"> | number
    sub_category_id?: IntWithAggregatesFilter<"Products"> | number
    created_at?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Products"> | Date | string
  }

  export type WishlistWhereInput = {
    AND?: WishlistWhereInput | WishlistWhereInput[]
    OR?: WishlistWhereInput[]
    NOT?: WishlistWhereInput | WishlistWhereInput[]
    id?: IntFilter<"Wishlist"> | number
    product_id?: IntFilter<"Wishlist"> | number
    user_id?: IntFilter<"Wishlist"> | number
    created_at?: DateTimeFilter<"Wishlist"> | Date | string
    updated_at?: DateTimeFilter<"Wishlist"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type WishlistOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product?: ProductsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type WishlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WishlistWhereInput | WishlistWhereInput[]
    OR?: WishlistWhereInput[]
    NOT?: WishlistWhereInput | WishlistWhereInput[]
    product_id?: IntFilter<"Wishlist"> | number
    user_id?: IntFilter<"Wishlist"> | number
    created_at?: DateTimeFilter<"Wishlist"> | Date | string
    updated_at?: DateTimeFilter<"Wishlist"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type WishlistOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WishlistCountOrderByAggregateInput
    _avg?: WishlistAvgOrderByAggregateInput
    _max?: WishlistMaxOrderByAggregateInput
    _min?: WishlistMinOrderByAggregateInput
    _sum?: WishlistSumOrderByAggregateInput
  }

  export type WishlistScalarWhereWithAggregatesInput = {
    AND?: WishlistScalarWhereWithAggregatesInput | WishlistScalarWhereWithAggregatesInput[]
    OR?: WishlistScalarWhereWithAggregatesInput[]
    NOT?: WishlistScalarWhereWithAggregatesInput | WishlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wishlist"> | number
    product_id?: IntWithAggregatesFilter<"Wishlist"> | number
    user_id?: IntWithAggregatesFilter<"Wishlist"> | number
    created_at?: DateTimeWithAggregatesFilter<"Wishlist"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Wishlist"> | Date | string
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: IntFilter<"Cart"> | number
    user_id?: IntFilter<"Cart"> | number
    total?: IntFilter<"Cart"> | number
    created_at?: DateTimeFilter<"Cart"> | Date | string
    updated_at?: DateTimeFilter<"Cart"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    cart_item?: CartItemListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    cart_item?: CartItemOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    user_id?: IntFilter<"Cart"> | number
    total?: IntFilter<"Cart"> | number
    created_at?: DateTimeFilter<"Cart"> | Date | string
    updated_at?: DateTimeFilter<"Cart"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    cart_item?: CartItemListRelationFilter
  }, "id">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cart"> | number
    user_id?: IntWithAggregatesFilter<"Cart"> | number
    total?: IntWithAggregatesFilter<"Cart"> | number
    created_at?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: IntFilter<"CartItem"> | number
    cart_id?: IntFilter<"CartItem"> | number
    products_id?: IntFilter<"CartItem"> | number
    created_at?: DateTimeFilter<"CartItem"> | Date | string
    updated_at?: DateTimeFilter<"CartItem"> | Date | string
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    cart_id?: SortOrder
    products_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cart?: CartOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cart_id?: IntFilter<"CartItem"> | number
    products_id?: IntFilter<"CartItem"> | number
    created_at?: DateTimeFilter<"CartItem"> | Date | string
    updated_at?: DateTimeFilter<"CartItem"> | Date | string
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "id">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    cart_id?: SortOrder
    products_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CartItem"> | number
    cart_id?: IntWithAggregatesFilter<"CartItem"> | number
    products_id?: IntWithAggregatesFilter<"CartItem"> | number
    created_at?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
  }

  export type PaymentDetailsWhereInput = {
    AND?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[]
    OR?: PaymentDetailsWhereInput[]
    NOT?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[]
    id?: IntFilter<"PaymentDetails"> | number
    order_id?: IntFilter<"PaymentDetails"> | number
    amount?: IntFilter<"PaymentDetails"> | number
    provider?: StringFilter<"PaymentDetails"> | string
    status?: StringFilter<"PaymentDetails"> | string
    created_at?: DateTimeFilter<"PaymentDetails"> | Date | string
    updated_at?: DateTimeFilter<"PaymentDetails"> | Date | string
    orders?: XOR<OrderDetailsScalarRelationFilter, OrderDetailsWhereInput>
  }

  export type PaymentDetailsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    orders?: OrderDetailsOrderByWithRelationInput
  }

  export type PaymentDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    order_id?: number
    AND?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[]
    OR?: PaymentDetailsWhereInput[]
    NOT?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[]
    amount?: IntFilter<"PaymentDetails"> | number
    provider?: StringFilter<"PaymentDetails"> | string
    status?: StringFilter<"PaymentDetails"> | string
    created_at?: DateTimeFilter<"PaymentDetails"> | Date | string
    updated_at?: DateTimeFilter<"PaymentDetails"> | Date | string
    orders?: XOR<OrderDetailsScalarRelationFilter, OrderDetailsWhereInput>
  }, "id" | "order_id">

  export type PaymentDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PaymentDetailsCountOrderByAggregateInput
    _avg?: PaymentDetailsAvgOrderByAggregateInput
    _max?: PaymentDetailsMaxOrderByAggregateInput
    _min?: PaymentDetailsMinOrderByAggregateInput
    _sum?: PaymentDetailsSumOrderByAggregateInput
  }

  export type PaymentDetailsScalarWhereWithAggregatesInput = {
    AND?: PaymentDetailsScalarWhereWithAggregatesInput | PaymentDetailsScalarWhereWithAggregatesInput[]
    OR?: PaymentDetailsScalarWhereWithAggregatesInput[]
    NOT?: PaymentDetailsScalarWhereWithAggregatesInput | PaymentDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentDetails"> | number
    order_id?: IntWithAggregatesFilter<"PaymentDetails"> | number
    amount?: IntWithAggregatesFilter<"PaymentDetails"> | number
    provider?: StringWithAggregatesFilter<"PaymentDetails"> | string
    status?: StringWithAggregatesFilter<"PaymentDetails"> | string
    created_at?: DateTimeWithAggregatesFilter<"PaymentDetails"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PaymentDetails"> | Date | string
  }

  export type OrderDetailsWhereInput = {
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    id?: IntFilter<"OrderDetails"> | number
    user_id?: IntFilter<"OrderDetails"> | number
    payment_id?: StringFilter<"OrderDetails"> | string
    total?: IntFilter<"OrderDetails"> | number
    created_at?: DateTimeFilter<"OrderDetails"> | Date | string
    updated_at?: DateTimeFilter<"OrderDetails"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    payment_details?: XOR<PaymentDetailsNullableScalarRelationFilter, PaymentDetailsWhereInput> | null
    OrderItem?: OrderItemListRelationFilter
  }

  export type OrderDetailsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_id?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    payment_details?: PaymentDetailsOrderByWithRelationInput
    OrderItem?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    user_id?: IntFilter<"OrderDetails"> | number
    payment_id?: StringFilter<"OrderDetails"> | string
    total?: IntFilter<"OrderDetails"> | number
    created_at?: DateTimeFilter<"OrderDetails"> | Date | string
    updated_at?: DateTimeFilter<"OrderDetails"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    payment_details?: XOR<PaymentDetailsNullableScalarRelationFilter, PaymentDetailsWhereInput> | null
    OrderItem?: OrderItemListRelationFilter
  }, "id">

  export type OrderDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_id?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrderDetailsCountOrderByAggregateInput
    _avg?: OrderDetailsAvgOrderByAggregateInput
    _max?: OrderDetailsMaxOrderByAggregateInput
    _min?: OrderDetailsMinOrderByAggregateInput
    _sum?: OrderDetailsSumOrderByAggregateInput
  }

  export type OrderDetailsScalarWhereWithAggregatesInput = {
    AND?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    OR?: OrderDetailsScalarWhereWithAggregatesInput[]
    NOT?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderDetails"> | number
    user_id?: IntWithAggregatesFilter<"OrderDetails"> | number
    payment_id?: StringWithAggregatesFilter<"OrderDetails"> | string
    total?: IntWithAggregatesFilter<"OrderDetails"> | number
    created_at?: DateTimeWithAggregatesFilter<"OrderDetails"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"OrderDetails"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    order_id?: IntFilter<"OrderItem"> | number
    product_id?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    created_at?: DateTimeFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeFilter<"OrderItem"> | Date | string
    order_details?: XOR<OrderDetailsScalarRelationFilter, OrderDetailsWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_details?: OrderDetailsOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    order_id?: IntFilter<"OrderItem"> | number
    product_id?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    created_at?: DateTimeFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeFilter<"OrderItem"> | Date | string
    order_details?: XOR<OrderDetailsScalarRelationFilter, OrderDetailsWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItem"> | number
    order_id?: IntWithAggregatesFilter<"OrderItem"> | number
    product_id?: IntWithAggregatesFilter<"OrderItem"> | number
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    created_at?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type UsersCreateInput = {
    image: string
    name: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: AddressesCreateNestedManyWithoutUserInput
    wishlist?: WishlistCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedManyWithoutUserInput
    order_details?: OrderDetailsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    image: string
    name: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: AddressesUncheckedCreateNestedManyWithoutUserInput
    wishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedManyWithoutUserInput
    order_details?: OrderDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressesUpdateManyWithoutUserNestedInput
    wishlist?: WishlistUpdateManyWithoutUserNestedInput
    cart?: CartUpdateManyWithoutUserNestedInput
    order_details?: OrderDetailsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressesUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateManyWithoutUserNestedInput
    order_details?: OrderDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    image: string
    name: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressesCreateInput = {
    address_line_1: string
    address_line_2: string
    country: string
    city: string
    postal_code: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutAddressesInput
  }

  export type AddressesUncheckedCreateInput = {
    id?: number
    user_id: number
    address_line_1: string
    address_line_2: string
    country: string
    city: string
    postal_code: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AddressesUpdateInput = {
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressesCreateManyInput = {
    id?: number
    user_id: number
    address_line_1: string
    address_line_2: string
    country: string
    city: string
    postal_code: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AddressesUpdateManyMutationInput = {
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateInput = {
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    sub_categories?: SubCategoriesCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    sub_categories?: SubCategoriesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_categories?: SubCategoriesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_categories?: SubCategoriesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoriesCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoriesCreateNestedOneWithoutSub_categoriesInput
    products?: ProductsCreateNestedManyWithoutSub_categoryInput
  }

  export type SubCategoriesUncheckedCreateInput = {
    id?: number
    name: string
    categoriesId: number
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductsUncheckedCreateNestedManyWithoutSub_categoryInput
  }

  export type SubCategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutSub_categoriesNestedInput
    products?: ProductsUpdateManyWithoutSub_categoryNestedInput
  }

  export type SubCategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoriesId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUncheckedUpdateManyWithoutSub_categoryNestedInput
  }

  export type SubCategoriesCreateManyInput = {
    id?: number
    name: string
    categoriesId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubCategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoriesId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateInput = {
    name: string
    description: string
    image: string
    quantity: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    sub_category: SubCategoriesCreateNestedOneWithoutProductsInput
    wishlist?: WishlistCreateNestedManyWithoutProductInput
    cart_item?: CartItemCreateNestedManyWithoutProductInput
    order_item?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    image: string
    quantity: number
    price: number
    sub_category_id: number
    created_at?: Date | string
    updated_at?: Date | string
    wishlist?: WishlistUncheckedCreateNestedManyWithoutProductInput
    cart_item?: CartItemUncheckedCreateNestedManyWithoutProductInput
    order_item?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_category?: SubCategoriesUpdateOneRequiredWithoutProductsNestedInput
    wishlist?: WishlistUpdateManyWithoutProductNestedInput
    cart_item?: CartItemUpdateManyWithoutProductNestedInput
    order_item?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sub_category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUncheckedUpdateManyWithoutProductNestedInput
    cart_item?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    order_item?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: number
    name: string
    description: string
    image: string
    quantity: number
    price: number
    sub_category_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sub_category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductsCreateNestedOneWithoutWishlistInput
    user: UsersCreateNestedOneWithoutWishlistInput
  }

  export type WishlistUncheckedCreateInput = {
    id?: number
    product_id: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WishlistUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutWishlistNestedInput
    user?: UsersUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type WishlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistCreateManyInput = {
    id?: number
    product_id: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WishlistUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutCartInput
    cart_item?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: number
    user_id: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    cart_item?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCartNestedInput
    cart_item?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_item?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: number
    user_id: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    cart: CartCreateNestedOneWithoutCart_itemInput
    product: ProductsCreateNestedOneWithoutCart_itemInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: number
    cart_id: number
    products_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneRequiredWithoutCart_itemNestedInput
    product?: ProductsUpdateOneRequiredWithoutCart_itemNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    products_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyInput = {
    id?: number
    cart_id: number
    products_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    products_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsCreateInput = {
    amount: number
    provider: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    orders: OrderDetailsCreateNestedOneWithoutPayment_detailsInput
  }

  export type PaymentDetailsUncheckedCreateInput = {
    id?: number
    order_id: number
    amount: number
    provider: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentDetailsUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderDetailsUpdateOneRequiredWithoutPayment_detailsNestedInput
  }

  export type PaymentDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsCreateManyInput = {
    id?: number
    order_id: number
    amount: number
    provider: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentDetailsUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsCreateInput = {
    payment_id: string
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutOrder_detailsInput
    payment_details?: PaymentDetailsCreateNestedOneWithoutOrdersInput
    OrderItem?: OrderItemCreateNestedManyWithoutOrder_detailsInput
  }

  export type OrderDetailsUncheckedCreateInput = {
    id?: number
    user_id: number
    payment_id: string
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    payment_details?: PaymentDetailsUncheckedCreateNestedOneWithoutOrdersInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrder_detailsInput
  }

  export type OrderDetailsUpdateInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutOrder_detailsNestedInput
    payment_details?: PaymentDetailsUpdateOneWithoutOrdersNestedInput
    OrderItem?: OrderItemUpdateManyWithoutOrder_detailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    payment_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_details?: PaymentDetailsUncheckedUpdateOneWithoutOrdersNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrder_detailsNestedInput
  }

  export type OrderDetailsCreateManyInput = {
    id?: number
    user_id: number
    payment_id: string
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderDetailsUpdateManyMutationInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    payment_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
    order_details: OrderDetailsCreateNestedOneWithoutOrderItemInput
    product: ProductsCreateNestedOneWithoutOrder_itemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    order_id: number
    product_id: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_details?: OrderDetailsUpdateOneRequiredWithoutOrderItemNestedInput
    product?: ProductsUpdateOneRequiredWithoutOrder_itemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: number
    order_id: number
    product_id: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type AddressesListRelationFilter = {
    every?: AddressesWhereInput
    some?: AddressesWhereInput
    none?: AddressesWhereInput
  }

  export type WishlistListRelationFilter = {
    every?: WishlistWhereInput
    some?: WishlistWhereInput
    none?: WishlistWhereInput
  }

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type OrderDetailsListRelationFilter = {
    every?: OrderDetailsWhereInput
    some?: OrderDetailsWhereInput
    none?: OrderDetailsWhereInput
  }

  export type AddressesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WishlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type AddressesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AddressesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type AddressesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AddressesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    address_line_1?: SortOrder
    address_line_2?: SortOrder
    country?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AddressesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type SubCategoriesListRelationFilter = {
    every?: SubCategoriesWhereInput
    some?: SubCategoriesWhereInput
    none?: SubCategoriesWhereInput
  }

  export type SubCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubCategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoriesId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SubCategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    categoriesId?: SortOrder
  }

  export type SubCategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoriesId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SubCategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoriesId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SubCategoriesSumOrderByAggregateInput = {
    id?: SortOrder
    categoriesId?: SortOrder
  }

  export type SubCategoriesScalarRelationFilter = {
    is?: SubCategoriesWhereInput
    isNot?: SubCategoriesWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    sub_category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    sub_category_id?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    sub_category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    sub_category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    sub_category_id?: SortOrder
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type WishlistCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WishlistAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
  }

  export type WishlistMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WishlistMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WishlistSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total?: SortOrder
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    products_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    products_id?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    products_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    products_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    products_id?: SortOrder
  }

  export type OrderDetailsScalarRelationFilter = {
    is?: OrderDetailsWhereInput
    isNot?: OrderDetailsWhereInput
  }

  export type PaymentDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type PaymentDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type PaymentDetailsNullableScalarRelationFilter = {
    is?: PaymentDetailsWhereInput | null
    isNot?: PaymentDetailsWhereInput | null
  }

  export type OrderDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_id?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total?: SortOrder
  }

  export type OrderDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_id?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_id?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total?: SortOrder
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type AddressesCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressesCreateWithoutUserInput, AddressesUncheckedCreateWithoutUserInput> | AddressesCreateWithoutUserInput[] | AddressesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressesCreateOrConnectWithoutUserInput | AddressesCreateOrConnectWithoutUserInput[]
    createMany?: AddressesCreateManyUserInputEnvelope
    connect?: AddressesWhereUniqueInput | AddressesWhereUniqueInput[]
  }

  export type WishlistCreateNestedManyWithoutUserInput = {
    create?: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput> | WishlistCreateWithoutUserInput[] | WishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutUserInput | WishlistCreateOrConnectWithoutUserInput[]
    createMany?: WishlistCreateManyUserInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type CartCreateNestedManyWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type OrderDetailsCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput> | OrderDetailsCreateWithoutUserInput[] | OrderDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutUserInput | OrderDetailsCreateOrConnectWithoutUserInput[]
    createMany?: OrderDetailsCreateManyUserInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type AddressesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressesCreateWithoutUserInput, AddressesUncheckedCreateWithoutUserInput> | AddressesCreateWithoutUserInput[] | AddressesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressesCreateOrConnectWithoutUserInput | AddressesCreateOrConnectWithoutUserInput[]
    createMany?: AddressesCreateManyUserInputEnvelope
    connect?: AddressesWhereUniqueInput | AddressesWhereUniqueInput[]
  }

  export type WishlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput> | WishlistCreateWithoutUserInput[] | WishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutUserInput | WishlistCreateOrConnectWithoutUserInput[]
    createMany?: WishlistCreateManyUserInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type OrderDetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput> | OrderDetailsCreateWithoutUserInput[] | OrderDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutUserInput | OrderDetailsCreateOrConnectWithoutUserInput[]
    createMany?: OrderDetailsCreateManyUserInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddressesUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressesCreateWithoutUserInput, AddressesUncheckedCreateWithoutUserInput> | AddressesCreateWithoutUserInput[] | AddressesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressesCreateOrConnectWithoutUserInput | AddressesCreateOrConnectWithoutUserInput[]
    upsert?: AddressesUpsertWithWhereUniqueWithoutUserInput | AddressesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressesCreateManyUserInputEnvelope
    set?: AddressesWhereUniqueInput | AddressesWhereUniqueInput[]
    disconnect?: AddressesWhereUniqueInput | AddressesWhereUniqueInput[]
    delete?: AddressesWhereUniqueInput | AddressesWhereUniqueInput[]
    connect?: AddressesWhereUniqueInput | AddressesWhereUniqueInput[]
    update?: AddressesUpdateWithWhereUniqueWithoutUserInput | AddressesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressesUpdateManyWithWhereWithoutUserInput | AddressesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressesScalarWhereInput | AddressesScalarWhereInput[]
  }

  export type WishlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput> | WishlistCreateWithoutUserInput[] | WishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutUserInput | WishlistCreateOrConnectWithoutUserInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutUserInput | WishlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishlistCreateManyUserInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutUserInput | WishlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutUserInput | WishlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type CartUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUserInput | CartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUserInput | CartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUserInput | CartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type OrderDetailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput> | OrderDetailsCreateWithoutUserInput[] | OrderDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutUserInput | OrderDetailsCreateOrConnectWithoutUserInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutUserInput | OrderDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderDetailsCreateManyUserInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutUserInput | OrderDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutUserInput | OrderDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressesCreateWithoutUserInput, AddressesUncheckedCreateWithoutUserInput> | AddressesCreateWithoutUserInput[] | AddressesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressesCreateOrConnectWithoutUserInput | AddressesCreateOrConnectWithoutUserInput[]
    upsert?: AddressesUpsertWithWhereUniqueWithoutUserInput | AddressesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressesCreateManyUserInputEnvelope
    set?: AddressesWhereUniqueInput | AddressesWhereUniqueInput[]
    disconnect?: AddressesWhereUniqueInput | AddressesWhereUniqueInput[]
    delete?: AddressesWhereUniqueInput | AddressesWhereUniqueInput[]
    connect?: AddressesWhereUniqueInput | AddressesWhereUniqueInput[]
    update?: AddressesUpdateWithWhereUniqueWithoutUserInput | AddressesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressesUpdateManyWithWhereWithoutUserInput | AddressesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressesScalarWhereInput | AddressesScalarWhereInput[]
  }

  export type WishlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput> | WishlistCreateWithoutUserInput[] | WishlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutUserInput | WishlistCreateOrConnectWithoutUserInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutUserInput | WishlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishlistCreateManyUserInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutUserInput | WishlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutUserInput | WishlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type CartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUserInput | CartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUserInput | CartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUserInput | CartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type OrderDetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput> | OrderDetailsCreateWithoutUserInput[] | OrderDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutUserInput | OrderDetailsCreateOrConnectWithoutUserInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutUserInput | OrderDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderDetailsCreateManyUserInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutUserInput | OrderDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutUserInput | OrderDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutAddressesInput = {
    create?: XOR<UsersCreateWithoutAddressesInput, UsersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAddressesInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<UsersCreateWithoutAddressesInput, UsersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAddressesInput
    upsert?: UsersUpsertWithoutAddressesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAddressesInput, UsersUpdateWithoutAddressesInput>, UsersUncheckedUpdateWithoutAddressesInput>
  }

  export type SubCategoriesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoriesCreateWithoutCategoryInput, SubCategoriesUncheckedCreateWithoutCategoryInput> | SubCategoriesCreateWithoutCategoryInput[] | SubCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoriesCreateOrConnectWithoutCategoryInput | SubCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoriesCreateManyCategoryInputEnvelope
    connect?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
  }

  export type SubCategoriesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoriesCreateWithoutCategoryInput, SubCategoriesUncheckedCreateWithoutCategoryInput> | SubCategoriesCreateWithoutCategoryInput[] | SubCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoriesCreateOrConnectWithoutCategoryInput | SubCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoriesCreateManyCategoryInputEnvelope
    connect?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
  }

  export type SubCategoriesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoriesCreateWithoutCategoryInput, SubCategoriesUncheckedCreateWithoutCategoryInput> | SubCategoriesCreateWithoutCategoryInput[] | SubCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoriesCreateOrConnectWithoutCategoryInput | SubCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoriesUpsertWithWhereUniqueWithoutCategoryInput | SubCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoriesCreateManyCategoryInputEnvelope
    set?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    disconnect?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    delete?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    connect?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    update?: SubCategoriesUpdateWithWhereUniqueWithoutCategoryInput | SubCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoriesUpdateManyWithWhereWithoutCategoryInput | SubCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoriesScalarWhereInput | SubCategoriesScalarWhereInput[]
  }

  export type SubCategoriesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoriesCreateWithoutCategoryInput, SubCategoriesUncheckedCreateWithoutCategoryInput> | SubCategoriesCreateWithoutCategoryInput[] | SubCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoriesCreateOrConnectWithoutCategoryInput | SubCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoriesUpsertWithWhereUniqueWithoutCategoryInput | SubCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoriesCreateManyCategoryInputEnvelope
    set?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    disconnect?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    delete?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    connect?: SubCategoriesWhereUniqueInput | SubCategoriesWhereUniqueInput[]
    update?: SubCategoriesUpdateWithWhereUniqueWithoutCategoryInput | SubCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoriesUpdateManyWithWhereWithoutCategoryInput | SubCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoriesScalarWhereInput | SubCategoriesScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutSub_categoriesInput = {
    create?: XOR<CategoriesCreateWithoutSub_categoriesInput, CategoriesUncheckedCreateWithoutSub_categoriesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutSub_categoriesInput
    connect?: CategoriesWhereUniqueInput
  }

  export type ProductsCreateNestedManyWithoutSub_categoryInput = {
    create?: XOR<ProductsCreateWithoutSub_categoryInput, ProductsUncheckedCreateWithoutSub_categoryInput> | ProductsCreateWithoutSub_categoryInput[] | ProductsUncheckedCreateWithoutSub_categoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSub_categoryInput | ProductsCreateOrConnectWithoutSub_categoryInput[]
    createMany?: ProductsCreateManySub_categoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutSub_categoryInput = {
    create?: XOR<ProductsCreateWithoutSub_categoryInput, ProductsUncheckedCreateWithoutSub_categoryInput> | ProductsCreateWithoutSub_categoryInput[] | ProductsUncheckedCreateWithoutSub_categoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSub_categoryInput | ProductsCreateOrConnectWithoutSub_categoryInput[]
    createMany?: ProductsCreateManySub_categoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type CategoriesUpdateOneRequiredWithoutSub_categoriesNestedInput = {
    create?: XOR<CategoriesCreateWithoutSub_categoriesInput, CategoriesUncheckedCreateWithoutSub_categoriesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutSub_categoriesInput
    upsert?: CategoriesUpsertWithoutSub_categoriesInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutSub_categoriesInput, CategoriesUpdateWithoutSub_categoriesInput>, CategoriesUncheckedUpdateWithoutSub_categoriesInput>
  }

  export type ProductsUpdateManyWithoutSub_categoryNestedInput = {
    create?: XOR<ProductsCreateWithoutSub_categoryInput, ProductsUncheckedCreateWithoutSub_categoryInput> | ProductsCreateWithoutSub_categoryInput[] | ProductsUncheckedCreateWithoutSub_categoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSub_categoryInput | ProductsCreateOrConnectWithoutSub_categoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutSub_categoryInput | ProductsUpsertWithWhereUniqueWithoutSub_categoryInput[]
    createMany?: ProductsCreateManySub_categoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutSub_categoryInput | ProductsUpdateWithWhereUniqueWithoutSub_categoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutSub_categoryInput | ProductsUpdateManyWithWhereWithoutSub_categoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutSub_categoryNestedInput = {
    create?: XOR<ProductsCreateWithoutSub_categoryInput, ProductsUncheckedCreateWithoutSub_categoryInput> | ProductsCreateWithoutSub_categoryInput[] | ProductsUncheckedCreateWithoutSub_categoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSub_categoryInput | ProductsCreateOrConnectWithoutSub_categoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutSub_categoryInput | ProductsUpsertWithWhereUniqueWithoutSub_categoryInput[]
    createMany?: ProductsCreateManySub_categoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutSub_categoryInput | ProductsUpdateWithWhereUniqueWithoutSub_categoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutSub_categoryInput | ProductsUpdateManyWithWhereWithoutSub_categoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type SubCategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<SubCategoriesCreateWithoutProductsInput, SubCategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SubCategoriesCreateOrConnectWithoutProductsInput
    connect?: SubCategoriesWhereUniqueInput
  }

  export type WishlistCreateNestedManyWithoutProductInput = {
    create?: XOR<WishlistCreateWithoutProductInput, WishlistUncheckedCreateWithoutProductInput> | WishlistCreateWithoutProductInput[] | WishlistUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutProductInput | WishlistCreateOrConnectWithoutProductInput[]
    createMany?: WishlistCreateManyProductInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type WishlistUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<WishlistCreateWithoutProductInput, WishlistUncheckedCreateWithoutProductInput> | WishlistCreateWithoutProductInput[] | WishlistUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutProductInput | WishlistCreateOrConnectWithoutProductInput[]
    createMany?: WishlistCreateManyProductInputEnvelope
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type SubCategoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SubCategoriesCreateWithoutProductsInput, SubCategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SubCategoriesCreateOrConnectWithoutProductsInput
    upsert?: SubCategoriesUpsertWithoutProductsInput
    connect?: SubCategoriesWhereUniqueInput
    update?: XOR<XOR<SubCategoriesUpdateToOneWithWhereWithoutProductsInput, SubCategoriesUpdateWithoutProductsInput>, SubCategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type WishlistUpdateManyWithoutProductNestedInput = {
    create?: XOR<WishlistCreateWithoutProductInput, WishlistUncheckedCreateWithoutProductInput> | WishlistCreateWithoutProductInput[] | WishlistUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutProductInput | WishlistCreateOrConnectWithoutProductInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutProductInput | WishlistUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: WishlistCreateManyProductInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutProductInput | WishlistUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutProductInput | WishlistUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type WishlistUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<WishlistCreateWithoutProductInput, WishlistUncheckedCreateWithoutProductInput> | WishlistCreateWithoutProductInput[] | WishlistUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WishlistCreateOrConnectWithoutProductInput | WishlistCreateOrConnectWithoutProductInput[]
    upsert?: WishlistUpsertWithWhereUniqueWithoutProductInput | WishlistUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: WishlistCreateManyProductInputEnvelope
    set?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    disconnect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    delete?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    connect?: WishlistWhereUniqueInput | WishlistWhereUniqueInput[]
    update?: WishlistUpdateWithWhereUniqueWithoutProductInput | WishlistUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: WishlistUpdateManyWithWhereWithoutProductInput | WishlistUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutWishlistInput = {
    create?: XOR<ProductsCreateWithoutWishlistInput, ProductsUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutWishlistInput
    connect?: ProductsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutWishlistInput = {
    create?: XOR<UsersCreateWithoutWishlistInput, UsersUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWishlistInput
    connect?: UsersWhereUniqueInput
  }

  export type ProductsUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: XOR<ProductsCreateWithoutWishlistInput, ProductsUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutWishlistInput
    upsert?: ProductsUpsertWithoutWishlistInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutWishlistInput, ProductsUpdateWithoutWishlistInput>, ProductsUncheckedUpdateWithoutWishlistInput>
  }

  export type UsersUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: XOR<UsersCreateWithoutWishlistInput, UsersUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWishlistInput
    upsert?: UsersUpsertWithoutWishlistInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutWishlistInput, UsersUpdateWithoutWishlistInput>, UsersUncheckedUpdateWithoutWishlistInput>
  }

  export type UsersCreateNestedOneWithoutCartInput = {
    create?: XOR<UsersCreateWithoutCartInput, UsersUncheckedCreateWithoutCartInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCartInput
    connect?: UsersWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<UsersCreateWithoutCartInput, UsersUncheckedCreateWithoutCartInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCartInput
    upsert?: UsersUpsertWithoutCartInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCartInput, UsersUpdateWithoutCartInput>, UsersUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutCart_itemInput = {
    create?: XOR<CartCreateWithoutCart_itemInput, CartUncheckedCreateWithoutCart_itemInput>
    connectOrCreate?: CartCreateOrConnectWithoutCart_itemInput
    connect?: CartWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutCart_itemInput = {
    create?: XOR<ProductsCreateWithoutCart_itemInput, ProductsUncheckedCreateWithoutCart_itemInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutCart_itemInput
    connect?: ProductsWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutCart_itemNestedInput = {
    create?: XOR<CartCreateWithoutCart_itemInput, CartUncheckedCreateWithoutCart_itemInput>
    connectOrCreate?: CartCreateOrConnectWithoutCart_itemInput
    upsert?: CartUpsertWithoutCart_itemInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutCart_itemInput, CartUpdateWithoutCart_itemInput>, CartUncheckedUpdateWithoutCart_itemInput>
  }

  export type ProductsUpdateOneRequiredWithoutCart_itemNestedInput = {
    create?: XOR<ProductsCreateWithoutCart_itemInput, ProductsUncheckedCreateWithoutCart_itemInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutCart_itemInput
    upsert?: ProductsUpsertWithoutCart_itemInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutCart_itemInput, ProductsUpdateWithoutCart_itemInput>, ProductsUncheckedUpdateWithoutCart_itemInput>
  }

  export type OrderDetailsCreateNestedOneWithoutPayment_detailsInput = {
    create?: XOR<OrderDetailsCreateWithoutPayment_detailsInput, OrderDetailsUncheckedCreateWithoutPayment_detailsInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutPayment_detailsInput
    connect?: OrderDetailsWhereUniqueInput
  }

  export type OrderDetailsUpdateOneRequiredWithoutPayment_detailsNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutPayment_detailsInput, OrderDetailsUncheckedCreateWithoutPayment_detailsInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutPayment_detailsInput
    upsert?: OrderDetailsUpsertWithoutPayment_detailsInput
    connect?: OrderDetailsWhereUniqueInput
    update?: XOR<XOR<OrderDetailsUpdateToOneWithWhereWithoutPayment_detailsInput, OrderDetailsUpdateWithoutPayment_detailsInput>, OrderDetailsUncheckedUpdateWithoutPayment_detailsInput>
  }

  export type UsersCreateNestedOneWithoutOrder_detailsInput = {
    create?: XOR<UsersCreateWithoutOrder_detailsInput, UsersUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrder_detailsInput
    connect?: UsersWhereUniqueInput
  }

  export type PaymentDetailsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<PaymentDetailsCreateWithoutOrdersInput, PaymentDetailsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutOrdersInput
    connect?: PaymentDetailsWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrder_detailsInput = {
    create?: XOR<OrderItemCreateWithoutOrder_detailsInput, OrderItemUncheckedCreateWithoutOrder_detailsInput> | OrderItemCreateWithoutOrder_detailsInput[] | OrderItemUncheckedCreateWithoutOrder_detailsInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrder_detailsInput | OrderItemCreateOrConnectWithoutOrder_detailsInput[]
    createMany?: OrderItemCreateManyOrder_detailsInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentDetailsUncheckedCreateNestedOneWithoutOrdersInput = {
    create?: XOR<PaymentDetailsCreateWithoutOrdersInput, PaymentDetailsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutOrdersInput
    connect?: PaymentDetailsWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrder_detailsInput = {
    create?: XOR<OrderItemCreateWithoutOrder_detailsInput, OrderItemUncheckedCreateWithoutOrder_detailsInput> | OrderItemCreateWithoutOrder_detailsInput[] | OrderItemUncheckedCreateWithoutOrder_detailsInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrder_detailsInput | OrderItemCreateOrConnectWithoutOrder_detailsInput[]
    createMany?: OrderItemCreateManyOrder_detailsInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutOrder_detailsNestedInput = {
    create?: XOR<UsersCreateWithoutOrder_detailsInput, UsersUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrder_detailsInput
    upsert?: UsersUpsertWithoutOrder_detailsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrder_detailsInput, UsersUpdateWithoutOrder_detailsInput>, UsersUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type PaymentDetailsUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<PaymentDetailsCreateWithoutOrdersInput, PaymentDetailsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutOrdersInput
    upsert?: PaymentDetailsUpsertWithoutOrdersInput
    disconnect?: PaymentDetailsWhereInput | boolean
    delete?: PaymentDetailsWhereInput | boolean
    connect?: PaymentDetailsWhereUniqueInput
    update?: XOR<XOR<PaymentDetailsUpdateToOneWithWhereWithoutOrdersInput, PaymentDetailsUpdateWithoutOrdersInput>, PaymentDetailsUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrder_detailsNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrder_detailsInput, OrderItemUncheckedCreateWithoutOrder_detailsInput> | OrderItemCreateWithoutOrder_detailsInput[] | OrderItemUncheckedCreateWithoutOrder_detailsInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrder_detailsInput | OrderItemCreateOrConnectWithoutOrder_detailsInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrder_detailsInput | OrderItemUpsertWithWhereUniqueWithoutOrder_detailsInput[]
    createMany?: OrderItemCreateManyOrder_detailsInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrder_detailsInput | OrderItemUpdateWithWhereUniqueWithoutOrder_detailsInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrder_detailsInput | OrderItemUpdateManyWithWhereWithoutOrder_detailsInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PaymentDetailsUncheckedUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<PaymentDetailsCreateWithoutOrdersInput, PaymentDetailsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutOrdersInput
    upsert?: PaymentDetailsUpsertWithoutOrdersInput
    disconnect?: PaymentDetailsWhereInput | boolean
    delete?: PaymentDetailsWhereInput | boolean
    connect?: PaymentDetailsWhereUniqueInput
    update?: XOR<XOR<PaymentDetailsUpdateToOneWithWhereWithoutOrdersInput, PaymentDetailsUpdateWithoutOrdersInput>, PaymentDetailsUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrder_detailsNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrder_detailsInput, OrderItemUncheckedCreateWithoutOrder_detailsInput> | OrderItemCreateWithoutOrder_detailsInput[] | OrderItemUncheckedCreateWithoutOrder_detailsInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrder_detailsInput | OrderItemCreateOrConnectWithoutOrder_detailsInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrder_detailsInput | OrderItemUpsertWithWhereUniqueWithoutOrder_detailsInput[]
    createMany?: OrderItemCreateManyOrder_detailsInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrder_detailsInput | OrderItemUpdateWithWhereUniqueWithoutOrder_detailsInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrder_detailsInput | OrderItemUpdateManyWithWhereWithoutOrder_detailsInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderDetailsCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderItemInput, OrderDetailsUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderItemInput
    connect?: OrderDetailsWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutOrder_itemInput = {
    create?: XOR<ProductsCreateWithoutOrder_itemInput, ProductsUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrder_itemInput
    connect?: ProductsWhereUniqueInput
  }

  export type OrderDetailsUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderItemInput, OrderDetailsUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderItemInput
    upsert?: OrderDetailsUpsertWithoutOrderItemInput
    connect?: OrderDetailsWhereUniqueInput
    update?: XOR<XOR<OrderDetailsUpdateToOneWithWhereWithoutOrderItemInput, OrderDetailsUpdateWithoutOrderItemInput>, OrderDetailsUncheckedUpdateWithoutOrderItemInput>
  }

  export type ProductsUpdateOneRequiredWithoutOrder_itemNestedInput = {
    create?: XOR<ProductsCreateWithoutOrder_itemInput, ProductsUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrder_itemInput
    upsert?: ProductsUpsertWithoutOrder_itemInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutOrder_itemInput, ProductsUpdateWithoutOrder_itemInput>, ProductsUncheckedUpdateWithoutOrder_itemInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type AddressesCreateWithoutUserInput = {
    address_line_1: string
    address_line_2: string
    country: string
    city: string
    postal_code: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AddressesUncheckedCreateWithoutUserInput = {
    id?: number
    address_line_1: string
    address_line_2: string
    country: string
    city: string
    postal_code: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AddressesCreateOrConnectWithoutUserInput = {
    where: AddressesWhereUniqueInput
    create: XOR<AddressesCreateWithoutUserInput, AddressesUncheckedCreateWithoutUserInput>
  }

  export type AddressesCreateManyUserInputEnvelope = {
    data: AddressesCreateManyUserInput | AddressesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WishlistCreateWithoutUserInput = {
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductsCreateNestedOneWithoutWishlistInput
  }

  export type WishlistUncheckedCreateWithoutUserInput = {
    id?: number
    product_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WishlistCreateOrConnectWithoutUserInput = {
    where: WishlistWhereUniqueInput
    create: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput>
  }

  export type WishlistCreateManyUserInputEnvelope = {
    data: WishlistCreateManyUserInput | WishlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartCreateWithoutUserInput = {
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    cart_item?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    cart_item?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartCreateManyUserInputEnvelope = {
    data: CartCreateManyUserInput | CartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderDetailsCreateWithoutUserInput = {
    payment_id: string
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    payment_details?: PaymentDetailsCreateNestedOneWithoutOrdersInput
    OrderItem?: OrderItemCreateNestedManyWithoutOrder_detailsInput
  }

  export type OrderDetailsUncheckedCreateWithoutUserInput = {
    id?: number
    payment_id: string
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    payment_details?: PaymentDetailsUncheckedCreateNestedOneWithoutOrdersInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrder_detailsInput
  }

  export type OrderDetailsCreateOrConnectWithoutUserInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput>
  }

  export type OrderDetailsCreateManyUserInputEnvelope = {
    data: OrderDetailsCreateManyUserInput | OrderDetailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressesUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressesWhereUniqueInput
    update: XOR<AddressesUpdateWithoutUserInput, AddressesUncheckedUpdateWithoutUserInput>
    create: XOR<AddressesCreateWithoutUserInput, AddressesUncheckedCreateWithoutUserInput>
  }

  export type AddressesUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressesWhereUniqueInput
    data: XOR<AddressesUpdateWithoutUserInput, AddressesUncheckedUpdateWithoutUserInput>
  }

  export type AddressesUpdateManyWithWhereWithoutUserInput = {
    where: AddressesScalarWhereInput
    data: XOR<AddressesUpdateManyMutationInput, AddressesUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressesScalarWhereInput = {
    AND?: AddressesScalarWhereInput | AddressesScalarWhereInput[]
    OR?: AddressesScalarWhereInput[]
    NOT?: AddressesScalarWhereInput | AddressesScalarWhereInput[]
    id?: IntFilter<"Addresses"> | number
    user_id?: IntFilter<"Addresses"> | number
    address_line_1?: StringFilter<"Addresses"> | string
    address_line_2?: StringFilter<"Addresses"> | string
    country?: StringFilter<"Addresses"> | string
    city?: StringFilter<"Addresses"> | string
    postal_code?: StringFilter<"Addresses"> | string
    created_at?: DateTimeFilter<"Addresses"> | Date | string
    updated_at?: DateTimeFilter<"Addresses"> | Date | string
  }

  export type WishlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WishlistWhereUniqueInput
    update: XOR<WishlistUpdateWithoutUserInput, WishlistUncheckedUpdateWithoutUserInput>
    create: XOR<WishlistCreateWithoutUserInput, WishlistUncheckedCreateWithoutUserInput>
  }

  export type WishlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WishlistWhereUniqueInput
    data: XOR<WishlistUpdateWithoutUserInput, WishlistUncheckedUpdateWithoutUserInput>
  }

  export type WishlistUpdateManyWithWhereWithoutUserInput = {
    where: WishlistScalarWhereInput
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyWithoutUserInput>
  }

  export type WishlistScalarWhereInput = {
    AND?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
    OR?: WishlistScalarWhereInput[]
    NOT?: WishlistScalarWhereInput | WishlistScalarWhereInput[]
    id?: IntFilter<"Wishlist"> | number
    product_id?: IntFilter<"Wishlist"> | number
    user_id?: IntFilter<"Wishlist"> | number
    created_at?: DateTimeFilter<"Wishlist"> | Date | string
    updated_at?: DateTimeFilter<"Wishlist"> | Date | string
  }

  export type CartUpsertWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartUpdateWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateManyWithWhereWithoutUserInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutUserInput>
  }

  export type CartScalarWhereInput = {
    AND?: CartScalarWhereInput | CartScalarWhereInput[]
    OR?: CartScalarWhereInput[]
    NOT?: CartScalarWhereInput | CartScalarWhereInput[]
    id?: IntFilter<"Cart"> | number
    user_id?: IntFilter<"Cart"> | number
    total?: IntFilter<"Cart"> | number
    created_at?: DateTimeFilter<"Cart"> | Date | string
    updated_at?: DateTimeFilter<"Cart"> | Date | string
  }

  export type OrderDetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderDetailsWhereUniqueInput
    update: XOR<OrderDetailsUpdateWithoutUserInput, OrderDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput>
  }

  export type OrderDetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderDetailsWhereUniqueInput
    data: XOR<OrderDetailsUpdateWithoutUserInput, OrderDetailsUncheckedUpdateWithoutUserInput>
  }

  export type OrderDetailsUpdateManyWithWhereWithoutUserInput = {
    where: OrderDetailsScalarWhereInput
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderDetailsScalarWhereInput = {
    AND?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
    OR?: OrderDetailsScalarWhereInput[]
    NOT?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
    id?: IntFilter<"OrderDetails"> | number
    user_id?: IntFilter<"OrderDetails"> | number
    payment_id?: StringFilter<"OrderDetails"> | string
    total?: IntFilter<"OrderDetails"> | number
    created_at?: DateTimeFilter<"OrderDetails"> | Date | string
    updated_at?: DateTimeFilter<"OrderDetails"> | Date | string
  }

  export type UsersCreateWithoutAddressesInput = {
    image: string
    name: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    wishlist?: WishlistCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedManyWithoutUserInput
    order_details?: OrderDetailsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutAddressesInput = {
    id?: number
    image: string
    name: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    wishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedManyWithoutUserInput
    order_details?: OrderDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutAddressesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAddressesInput, UsersUncheckedCreateWithoutAddressesInput>
  }

  export type UsersUpsertWithoutAddressesInput = {
    update: XOR<UsersUpdateWithoutAddressesInput, UsersUncheckedUpdateWithoutAddressesInput>
    create: XOR<UsersCreateWithoutAddressesInput, UsersUncheckedCreateWithoutAddressesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAddressesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAddressesInput, UsersUncheckedUpdateWithoutAddressesInput>
  }

  export type UsersUpdateWithoutAddressesInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUpdateManyWithoutUserNestedInput
    cart?: CartUpdateManyWithoutUserNestedInput
    order_details?: OrderDetailsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateManyWithoutUserNestedInput
    order_details?: OrderDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubCategoriesCreateWithoutCategoryInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductsCreateNestedManyWithoutSub_categoryInput
  }

  export type SubCategoriesUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductsUncheckedCreateNestedManyWithoutSub_categoryInput
  }

  export type SubCategoriesCreateOrConnectWithoutCategoryInput = {
    where: SubCategoriesWhereUniqueInput
    create: XOR<SubCategoriesCreateWithoutCategoryInput, SubCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoriesCreateManyCategoryInputEnvelope = {
    data: SubCategoriesCreateManyCategoryInput | SubCategoriesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoriesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoriesWhereUniqueInput
    update: XOR<SubCategoriesUpdateWithoutCategoryInput, SubCategoriesUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubCategoriesCreateWithoutCategoryInput, SubCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoriesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoriesWhereUniqueInput
    data: XOR<SubCategoriesUpdateWithoutCategoryInput, SubCategoriesUncheckedUpdateWithoutCategoryInput>
  }

  export type SubCategoriesUpdateManyWithWhereWithoutCategoryInput = {
    where: SubCategoriesScalarWhereInput
    data: XOR<SubCategoriesUpdateManyMutationInput, SubCategoriesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubCategoriesScalarWhereInput = {
    AND?: SubCategoriesScalarWhereInput | SubCategoriesScalarWhereInput[]
    OR?: SubCategoriesScalarWhereInput[]
    NOT?: SubCategoriesScalarWhereInput | SubCategoriesScalarWhereInput[]
    id?: IntFilter<"SubCategories"> | number
    name?: StringFilter<"SubCategories"> | string
    categoriesId?: IntFilter<"SubCategories"> | number
    created_at?: DateTimeFilter<"SubCategories"> | Date | string
    updated_at?: DateTimeFilter<"SubCategories"> | Date | string
  }

  export type CategoriesCreateWithoutSub_categoriesInput = {
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesUncheckedCreateWithoutSub_categoriesInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesCreateOrConnectWithoutSub_categoriesInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutSub_categoriesInput, CategoriesUncheckedCreateWithoutSub_categoriesInput>
  }

  export type ProductsCreateWithoutSub_categoryInput = {
    name: string
    description: string
    image: string
    quantity: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    wishlist?: WishlistCreateNestedManyWithoutProductInput
    cart_item?: CartItemCreateNestedManyWithoutProductInput
    order_item?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutSub_categoryInput = {
    id?: number
    name: string
    description: string
    image: string
    quantity: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    wishlist?: WishlistUncheckedCreateNestedManyWithoutProductInput
    cart_item?: CartItemUncheckedCreateNestedManyWithoutProductInput
    order_item?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutSub_categoryInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutSub_categoryInput, ProductsUncheckedCreateWithoutSub_categoryInput>
  }

  export type ProductsCreateManySub_categoryInputEnvelope = {
    data: ProductsCreateManySub_categoryInput | ProductsCreateManySub_categoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutSub_categoriesInput = {
    update: XOR<CategoriesUpdateWithoutSub_categoriesInput, CategoriesUncheckedUpdateWithoutSub_categoriesInput>
    create: XOR<CategoriesCreateWithoutSub_categoriesInput, CategoriesUncheckedCreateWithoutSub_categoriesInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutSub_categoriesInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutSub_categoriesInput, CategoriesUncheckedUpdateWithoutSub_categoriesInput>
  }

  export type CategoriesUpdateWithoutSub_categoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateWithoutSub_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpsertWithWhereUniqueWithoutSub_categoryInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutSub_categoryInput, ProductsUncheckedUpdateWithoutSub_categoryInput>
    create: XOR<ProductsCreateWithoutSub_categoryInput, ProductsUncheckedCreateWithoutSub_categoryInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutSub_categoryInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutSub_categoryInput, ProductsUncheckedUpdateWithoutSub_categoryInput>
  }

  export type ProductsUpdateManyWithWhereWithoutSub_categoryInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutSub_categoryInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    image?: StringFilter<"Products"> | string
    quantity?: IntFilter<"Products"> | number
    price?: IntFilter<"Products"> | number
    sub_category_id?: IntFilter<"Products"> | number
    created_at?: DateTimeFilter<"Products"> | Date | string
    updated_at?: DateTimeFilter<"Products"> | Date | string
  }

  export type SubCategoriesCreateWithoutProductsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoriesCreateNestedOneWithoutSub_categoriesInput
  }

  export type SubCategoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    categoriesId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubCategoriesCreateOrConnectWithoutProductsInput = {
    where: SubCategoriesWhereUniqueInput
    create: XOR<SubCategoriesCreateWithoutProductsInput, SubCategoriesUncheckedCreateWithoutProductsInput>
  }

  export type WishlistCreateWithoutProductInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutWishlistInput
  }

  export type WishlistUncheckedCreateWithoutProductInput = {
    id?: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WishlistCreateOrConnectWithoutProductInput = {
    where: WishlistWhereUniqueInput
    create: XOR<WishlistCreateWithoutProductInput, WishlistUncheckedCreateWithoutProductInput>
  }

  export type WishlistCreateManyProductInputEnvelope = {
    data: WishlistCreateManyProductInput | WishlistCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutProductInput = {
    created_at?: Date | string
    updated_at?: Date | string
    cart: CartCreateNestedOneWithoutCart_itemInput
  }

  export type CartItemUncheckedCreateWithoutProductInput = {
    id?: number
    cart_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateManyProductInputEnvelope = {
    data: CartItemCreateManyProductInput | CartItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductInput = {
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
    order_details: OrderDetailsCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: number
    order_id: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoriesUpsertWithoutProductsInput = {
    update: XOR<SubCategoriesUpdateWithoutProductsInput, SubCategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<SubCategoriesCreateWithoutProductsInput, SubCategoriesUncheckedCreateWithoutProductsInput>
    where?: SubCategoriesWhereInput
  }

  export type SubCategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: SubCategoriesWhereInput
    data: XOR<SubCategoriesUpdateWithoutProductsInput, SubCategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type SubCategoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutSub_categoriesNestedInput
  }

  export type SubCategoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoriesId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistUpsertWithWhereUniqueWithoutProductInput = {
    where: WishlistWhereUniqueInput
    update: XOR<WishlistUpdateWithoutProductInput, WishlistUncheckedUpdateWithoutProductInput>
    create: XOR<WishlistCreateWithoutProductInput, WishlistUncheckedCreateWithoutProductInput>
  }

  export type WishlistUpdateWithWhereUniqueWithoutProductInput = {
    where: WishlistWhereUniqueInput
    data: XOR<WishlistUpdateWithoutProductInput, WishlistUncheckedUpdateWithoutProductInput>
  }

  export type WishlistUpdateManyWithWhereWithoutProductInput = {
    where: WishlistScalarWhereInput
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyWithoutProductInput>
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: IntFilter<"CartItem"> | number
    cart_id?: IntFilter<"CartItem"> | number
    products_id?: IntFilter<"CartItem"> | number
    created_at?: DateTimeFilter<"CartItem"> | Date | string
    updated_at?: DateTimeFilter<"CartItem"> | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    order_id?: IntFilter<"OrderItem"> | number
    product_id?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    created_at?: DateTimeFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type ProductsCreateWithoutWishlistInput = {
    name: string
    description: string
    image: string
    quantity: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    sub_category: SubCategoriesCreateNestedOneWithoutProductsInput
    cart_item?: CartItemCreateNestedManyWithoutProductInput
    order_item?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutWishlistInput = {
    id?: number
    name: string
    description: string
    image: string
    quantity: number
    price: number
    sub_category_id: number
    created_at?: Date | string
    updated_at?: Date | string
    cart_item?: CartItemUncheckedCreateNestedManyWithoutProductInput
    order_item?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutWishlistInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutWishlistInput, ProductsUncheckedCreateWithoutWishlistInput>
  }

  export type UsersCreateWithoutWishlistInput = {
    image: string
    name: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: AddressesCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedManyWithoutUserInput
    order_details?: OrderDetailsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutWishlistInput = {
    id?: number
    image: string
    name: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: AddressesUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedManyWithoutUserInput
    order_details?: OrderDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutWishlistInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutWishlistInput, UsersUncheckedCreateWithoutWishlistInput>
  }

  export type ProductsUpsertWithoutWishlistInput = {
    update: XOR<ProductsUpdateWithoutWishlistInput, ProductsUncheckedUpdateWithoutWishlistInput>
    create: XOR<ProductsCreateWithoutWishlistInput, ProductsUncheckedCreateWithoutWishlistInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutWishlistInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutWishlistInput, ProductsUncheckedUpdateWithoutWishlistInput>
  }

  export type ProductsUpdateWithoutWishlistInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_category?: SubCategoriesUpdateOneRequiredWithoutProductsNestedInput
    cart_item?: CartItemUpdateManyWithoutProductNestedInput
    order_item?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutWishlistInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sub_category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_item?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    order_item?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UsersUpsertWithoutWishlistInput = {
    update: XOR<UsersUpdateWithoutWishlistInput, UsersUncheckedUpdateWithoutWishlistInput>
    create: XOR<UsersCreateWithoutWishlistInput, UsersUncheckedCreateWithoutWishlistInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutWishlistInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutWishlistInput, UsersUncheckedUpdateWithoutWishlistInput>
  }

  export type UsersUpdateWithoutWishlistInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressesUpdateManyWithoutUserNestedInput
    cart?: CartUpdateManyWithoutUserNestedInput
    order_details?: OrderDetailsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutWishlistInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressesUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateManyWithoutUserNestedInput
    order_details?: OrderDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutCartInput = {
    image: string
    name: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: AddressesCreateNestedManyWithoutUserInput
    wishlist?: WishlistCreateNestedManyWithoutUserInput
    order_details?: OrderDetailsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCartInput = {
    id?: number
    image: string
    name: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: AddressesUncheckedCreateNestedManyWithoutUserInput
    wishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
    order_details?: OrderDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCartInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCartInput, UsersUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateWithoutCartInput = {
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductsCreateNestedOneWithoutCart_itemInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: number
    products_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCartInput = {
    update: XOR<UsersUpdateWithoutCartInput, UsersUncheckedUpdateWithoutCartInput>
    create: XOR<UsersCreateWithoutCartInput, UsersUncheckedCreateWithoutCartInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCartInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCartInput, UsersUncheckedUpdateWithoutCartInput>
  }

  export type UsersUpdateWithoutCartInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressesUpdateManyWithoutUserNestedInput
    wishlist?: WishlistUpdateManyWithoutUserNestedInput
    order_details?: OrderDetailsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressesUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
    order_details?: OrderDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type CartCreateWithoutCart_itemInput = {
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutCart_itemInput = {
    id?: number
    user_id: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartCreateOrConnectWithoutCart_itemInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCart_itemInput, CartUncheckedCreateWithoutCart_itemInput>
  }

  export type ProductsCreateWithoutCart_itemInput = {
    name: string
    description: string
    image: string
    quantity: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    sub_category: SubCategoriesCreateNestedOneWithoutProductsInput
    wishlist?: WishlistCreateNestedManyWithoutProductInput
    order_item?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutCart_itemInput = {
    id?: number
    name: string
    description: string
    image: string
    quantity: number
    price: number
    sub_category_id: number
    created_at?: Date | string
    updated_at?: Date | string
    wishlist?: WishlistUncheckedCreateNestedManyWithoutProductInput
    order_item?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutCart_itemInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCart_itemInput, ProductsUncheckedCreateWithoutCart_itemInput>
  }

  export type CartUpsertWithoutCart_itemInput = {
    update: XOR<CartUpdateWithoutCart_itemInput, CartUncheckedUpdateWithoutCart_itemInput>
    create: XOR<CartCreateWithoutCart_itemInput, CartUncheckedCreateWithoutCart_itemInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutCart_itemInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutCart_itemInput, CartUncheckedUpdateWithoutCart_itemInput>
  }

  export type CartUpdateWithoutCart_itemInput = {
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutCart_itemInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpsertWithoutCart_itemInput = {
    update: XOR<ProductsUpdateWithoutCart_itemInput, ProductsUncheckedUpdateWithoutCart_itemInput>
    create: XOR<ProductsCreateWithoutCart_itemInput, ProductsUncheckedCreateWithoutCart_itemInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutCart_itemInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutCart_itemInput, ProductsUncheckedUpdateWithoutCart_itemInput>
  }

  export type ProductsUpdateWithoutCart_itemInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_category?: SubCategoriesUpdateOneRequiredWithoutProductsNestedInput
    wishlist?: WishlistUpdateManyWithoutProductNestedInput
    order_item?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCart_itemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sub_category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUncheckedUpdateManyWithoutProductNestedInput
    order_item?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrderDetailsCreateWithoutPayment_detailsInput = {
    payment_id: string
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutOrder_detailsInput
    OrderItem?: OrderItemCreateNestedManyWithoutOrder_detailsInput
  }

  export type OrderDetailsUncheckedCreateWithoutPayment_detailsInput = {
    id?: number
    user_id: number
    payment_id: string
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrder_detailsInput
  }

  export type OrderDetailsCreateOrConnectWithoutPayment_detailsInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutPayment_detailsInput, OrderDetailsUncheckedCreateWithoutPayment_detailsInput>
  }

  export type OrderDetailsUpsertWithoutPayment_detailsInput = {
    update: XOR<OrderDetailsUpdateWithoutPayment_detailsInput, OrderDetailsUncheckedUpdateWithoutPayment_detailsInput>
    create: XOR<OrderDetailsCreateWithoutPayment_detailsInput, OrderDetailsUncheckedCreateWithoutPayment_detailsInput>
    where?: OrderDetailsWhereInput
  }

  export type OrderDetailsUpdateToOneWithWhereWithoutPayment_detailsInput = {
    where?: OrderDetailsWhereInput
    data: XOR<OrderDetailsUpdateWithoutPayment_detailsInput, OrderDetailsUncheckedUpdateWithoutPayment_detailsInput>
  }

  export type OrderDetailsUpdateWithoutPayment_detailsInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutOrder_detailsNestedInput
    OrderItem?: OrderItemUpdateManyWithoutOrder_detailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutPayment_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    payment_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrder_detailsNestedInput
  }

  export type UsersCreateWithoutOrder_detailsInput = {
    image: string
    name: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: AddressesCreateNestedManyWithoutUserInput
    wishlist?: WishlistCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutOrder_detailsInput = {
    id?: number
    image: string
    name: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: AddressesUncheckedCreateNestedManyWithoutUserInput
    wishlist?: WishlistUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutOrder_detailsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrder_detailsInput, UsersUncheckedCreateWithoutOrder_detailsInput>
  }

  export type PaymentDetailsCreateWithoutOrdersInput = {
    amount: number
    provider: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentDetailsUncheckedCreateWithoutOrdersInput = {
    id?: number
    amount: number
    provider: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentDetailsCreateOrConnectWithoutOrdersInput = {
    where: PaymentDetailsWhereUniqueInput
    create: XOR<PaymentDetailsCreateWithoutOrdersInput, PaymentDetailsUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrder_detailsInput = {
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductsCreateNestedOneWithoutOrder_itemInput
  }

  export type OrderItemUncheckedCreateWithoutOrder_detailsInput = {
    id?: number
    product_id: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrder_detailsInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrder_detailsInput, OrderItemUncheckedCreateWithoutOrder_detailsInput>
  }

  export type OrderItemCreateManyOrder_detailsInputEnvelope = {
    data: OrderItemCreateManyOrder_detailsInput | OrderItemCreateManyOrder_detailsInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutOrder_detailsInput = {
    update: XOR<UsersUpdateWithoutOrder_detailsInput, UsersUncheckedUpdateWithoutOrder_detailsInput>
    create: XOR<UsersCreateWithoutOrder_detailsInput, UsersUncheckedCreateWithoutOrder_detailsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrder_detailsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrder_detailsInput, UsersUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type UsersUpdateWithoutOrder_detailsInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressesUpdateManyWithoutUserNestedInput
    wishlist?: WishlistUpdateManyWithoutUserNestedInput
    cart?: CartUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrder_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressesUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: WishlistUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentDetailsUpsertWithoutOrdersInput = {
    update: XOR<PaymentDetailsUpdateWithoutOrdersInput, PaymentDetailsUncheckedUpdateWithoutOrdersInput>
    create: XOR<PaymentDetailsCreateWithoutOrdersInput, PaymentDetailsUncheckedCreateWithoutOrdersInput>
    where?: PaymentDetailsWhereInput
  }

  export type PaymentDetailsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: PaymentDetailsWhereInput
    data: XOR<PaymentDetailsUpdateWithoutOrdersInput, PaymentDetailsUncheckedUpdateWithoutOrdersInput>
  }

  export type PaymentDetailsUpdateWithoutOrdersInput = {
    amount?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrder_detailsInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrder_detailsInput, OrderItemUncheckedUpdateWithoutOrder_detailsInput>
    create: XOR<OrderItemCreateWithoutOrder_detailsInput, OrderItemUncheckedCreateWithoutOrder_detailsInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrder_detailsInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrder_detailsInput, OrderItemUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrder_detailsInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrder_detailsInput>
  }

  export type OrderDetailsCreateWithoutOrderItemInput = {
    payment_id: string
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutOrder_detailsInput
    payment_details?: PaymentDetailsCreateNestedOneWithoutOrdersInput
  }

  export type OrderDetailsUncheckedCreateWithoutOrderItemInput = {
    id?: number
    user_id: number
    payment_id: string
    total: number
    created_at?: Date | string
    updated_at?: Date | string
    payment_details?: PaymentDetailsUncheckedCreateNestedOneWithoutOrdersInput
  }

  export type OrderDetailsCreateOrConnectWithoutOrderItemInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutOrderItemInput, OrderDetailsUncheckedCreateWithoutOrderItemInput>
  }

  export type ProductsCreateWithoutOrder_itemInput = {
    name: string
    description: string
    image: string
    quantity: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    sub_category: SubCategoriesCreateNestedOneWithoutProductsInput
    wishlist?: WishlistCreateNestedManyWithoutProductInput
    cart_item?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutOrder_itemInput = {
    id?: number
    name: string
    description: string
    image: string
    quantity: number
    price: number
    sub_category_id: number
    created_at?: Date | string
    updated_at?: Date | string
    wishlist?: WishlistUncheckedCreateNestedManyWithoutProductInput
    cart_item?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutOrder_itemInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutOrder_itemInput, ProductsUncheckedCreateWithoutOrder_itemInput>
  }

  export type OrderDetailsUpsertWithoutOrderItemInput = {
    update: XOR<OrderDetailsUpdateWithoutOrderItemInput, OrderDetailsUncheckedUpdateWithoutOrderItemInput>
    create: XOR<OrderDetailsCreateWithoutOrderItemInput, OrderDetailsUncheckedCreateWithoutOrderItemInput>
    where?: OrderDetailsWhereInput
  }

  export type OrderDetailsUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: OrderDetailsWhereInput
    data: XOR<OrderDetailsUpdateWithoutOrderItemInput, OrderDetailsUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderDetailsUpdateWithoutOrderItemInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutOrder_detailsNestedInput
    payment_details?: PaymentDetailsUpdateOneWithoutOrdersNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    payment_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_details?: PaymentDetailsUncheckedUpdateOneWithoutOrdersNestedInput
  }

  export type ProductsUpsertWithoutOrder_itemInput = {
    update: XOR<ProductsUpdateWithoutOrder_itemInput, ProductsUncheckedUpdateWithoutOrder_itemInput>
    create: XOR<ProductsCreateWithoutOrder_itemInput, ProductsUncheckedCreateWithoutOrder_itemInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutOrder_itemInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutOrder_itemInput, ProductsUncheckedUpdateWithoutOrder_itemInput>
  }

  export type ProductsUpdateWithoutOrder_itemInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_category?: SubCategoriesUpdateOneRequiredWithoutProductsNestedInput
    wishlist?: WishlistUpdateManyWithoutProductNestedInput
    cart_item?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutOrder_itemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    sub_category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUncheckedUpdateManyWithoutProductNestedInput
    cart_item?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type AddressesCreateManyUserInput = {
    id?: number
    address_line_1: string
    address_line_2: string
    country: string
    city: string
    postal_code: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WishlistCreateManyUserInput = {
    id?: number
    product_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartCreateManyUserInput = {
    id?: number
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderDetailsCreateManyUserInput = {
    id?: number
    payment_id: string
    total: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AddressesUpdateWithoutUserInput = {
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address_line_1?: StringFieldUpdateOperationsInput | string
    address_line_2?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type WishlistUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUpdateWithoutUserInput = {
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_item?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_item?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsUpdateWithoutUserInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_details?: PaymentDetailsUpdateOneWithoutOrdersNestedInput
    OrderItem?: OrderItemUpdateManyWithoutOrder_detailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_details?: PaymentDetailsUncheckedUpdateOneWithoutOrdersNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrder_detailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoriesCreateManyCategoryInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubCategoriesUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateManyWithoutSub_categoryNestedInput
  }

  export type SubCategoriesUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUncheckedUpdateManyWithoutSub_categoryNestedInput
  }

  export type SubCategoriesUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateManySub_categoryInput = {
    id?: number
    name: string
    description: string
    image: string
    quantity: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsUpdateWithoutSub_categoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUpdateManyWithoutProductNestedInput
    cart_item?: CartItemUpdateManyWithoutProductNestedInput
    order_item?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutSub_categoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUncheckedUpdateManyWithoutProductNestedInput
    cart_item?: CartItemUncheckedUpdateManyWithoutProductNestedInput
    order_item?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutSub_categoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistCreateManyProductInput = {
    id?: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemCreateManyProductInput = {
    id?: number
    cart_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemCreateManyProductInput = {
    id?: number
    order_id: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WishlistUpdateWithoutProductInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type WishlistUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUpdateWithoutProductInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneRequiredWithoutCart_itemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_details?: OrderDetailsUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyCartInput = {
    id?: number
    products_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemUpdateWithoutCartInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutCart_itemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    products_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    products_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrder_detailsInput = {
    id?: number
    product_id: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemUpdateWithoutOrder_detailsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutOrder_itemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrder_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrder_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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