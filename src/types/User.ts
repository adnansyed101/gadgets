type User = {
  name: string;
  email: string;
  password: string;
  role: "customer" | "seller" | "admin";
  phone?: string;
  address?: {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  };
  totalEarnings: number;
  pendingEarnings: number;
  paidEarnings: number;
  createdAt: Date;
};

export default User;
