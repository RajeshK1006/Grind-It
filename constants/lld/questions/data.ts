export interface LLDItem {
  id: number;
  title: string;
  description: string;
  keyModules: string[]; // array of module names
  solution: Record<string, string[]>; // filename -> code lines
  blogLink: string;
  tryItLink: string;
}

export interface LLDAccordionProps {
  items: LLDItem[];
}


export const lldData: LLDAccordionProps = {
  
  items:[
  {
    "id": 1,
    "title": "Design a Parking Lot",
    "description": "Design a parking lot system that manages multiple floors with different types of parking slots (CAR, BIKE, BUS). The system should issue tickets on entry, allocate the nearest available slot based on vehicle type, and compute a simple fee on exit.",
    "keyModules": ["ParkingLot", "ParkingFloor", "ParkingSlot", "Vehicle", "VehicleType", "Ticket", "Payment"],
    "solution": {
      "ParkingLot.java": [
        "import java.util.*;",
        "public class ParkingLot {",
        "  private final String name;",
        "  private final List<ParkingFloor> floors = new ArrayList<>();",
        "  public ParkingLot(String name){ this.name = name; }",
        "  public void addFloor(ParkingFloor f){ floors.add(f); }",
        "  public Ticket parkVehicle(Vehicle v){",
        "    for(ParkingFloor f: floors){",
        "      ParkingSlot s = f.getAvailableSlot(v.getType());",
        "      if(s != null){ s.occupy(v); return new Ticket(v, s, new Date()); }",
        "    }",
        "    return null;",
        "  }",
        "  public double unpark(Ticket t){",
        "    if(t == null) return 0;",
        "    t.getSlot().free();",
        "    return Payment.calculate(t);",
        "  }",
        "}"] ,
      "ParkingFloor.java": [
        "import java.util.*;",
        "public class ParkingFloor {",
        "  private final int number;",
        "  private final List<ParkingSlot> slots = new ArrayList<>();",
        "  public ParkingFloor(int number){ this.number = number; }",
        "  public void addSlot(ParkingSlot s){ slots.add(s); }",
        "  public ParkingSlot getAvailableSlot(VehicleType type){",
        "    for(ParkingSlot s: slots){ if(!s.isOccupied() && s.getType()==type) return s; }",
        "    return null;",
        "  }",
        "}"] ,
      "ParkingSlot.java": [
        "public class ParkingSlot {",
        "  private final int id;",
        "  private final VehicleType type;",
        "  private boolean occupied;",
        "  private Vehicle vehicle;",
        "  public ParkingSlot(int id, VehicleType type){ this.id=id; this.type=type; }",
        "  public boolean isOccupied(){ return occupied; }",
        "  public VehicleType getType(){ return type; }",
        "  public void occupy(Vehicle v){ this.vehicle=v; this.occupied=true; }",
        "  public void free(){ this.vehicle=null; this.occupied=false; }",
        "}"] ,
      "Vehicle.java": [
        "public class Vehicle {",
        "  private final String number;",
        "  private final VehicleType type;",
        "  public Vehicle(String number, VehicleType type){ this.number=number; this.type=type; }",
        "  public String getNumber(){ return number; }",
        "  public VehicleType getType(){ return type; }",
        "}"] ,
      "VehicleType.java": [
        "public enum VehicleType { CAR, BIKE, BUS }"
      ],
      "Ticket.java": [
        "import java.util.*;",
        "public class Ticket {",
        "  private final Vehicle vehicle;",
        "  private final ParkingSlot slot;",
        "  private final Date entry;",
        "  public Ticket(Vehicle v, ParkingSlot s, Date entry){ this.vehicle=v; this.slot=s; this.entry=entry; }",
        "  public Vehicle getVehicle(){ return vehicle; }",
        "  public ParkingSlot getSlot(){ return slot; }",
        "  public Date getEntry(){ return entry; }",
        "}"] ,
      "Payment.java": [
        "import java.util.*;",
        "public class Payment {",
        "  public static double calculate(Ticket t){",
        "    long seconds = (new Date().getTime() - t.getEntry().getTime())/1000;",
        "    return Math.max(10, seconds * 0.05); // min fee 10",
        "  }",
        "}"] ,
      "Demo.java": [
        "public class Demo {",
        "  public static void main(String[] args){",
        "    ParkingLot lot = new ParkingLot(\"CityLot\");",
        "    ParkingFloor f1 = new ParkingFloor(1);",
        "    f1.addSlot(new ParkingSlot(1, VehicleType.CAR));",
        "    f1.addSlot(new ParkingSlot(2, VehicleType.BIKE));",
        "    lot.addFloor(f1);",
        "    Vehicle v = new Vehicle(\"TN09AB1234\", VehicleType.CAR);",
        "    Ticket t = lot.parkVehicle(v);",
        "    double amt = lot.unpark(t);",
        "    System.out.println(amt);",
        "  }",
        "}"]
    },
    "blogLink": "https://www.geeksforgeeks.org/design-parking-lot-using-object-oriented-principles/",
    "tryItLink": "https://www.jdoodle.com/online-java-compiler/"
  },
  {
    "id": 2,
    "title": "Design an Online Library System",
    "description": "Build a library system to add/search books, register members, borrow/return copies, and compute fines for late returns.",
    "keyModules": ["Library", "Book", "BookCopy", "Member", "Loan", "FineCalculator"],
    "solution": {
      "Library.java": [
        "import java.util.*;",
        "public class Library {",
        "  private final Map<String, Book> catalog = new HashMap<>(); // isbn -> book",
        "  private final List<Member> members = new ArrayList<>();",
        "  public void addBook(Book b){ catalog.put(b.getIsbn(), b); }",
        "  public Book findByIsbn(String isbn){ return catalog.get(isbn); }",
        "  public List<Book> searchByTitle(String q){",
        "    List<Book> out = new ArrayList<>();",
        "    for(Book b: catalog.values()) if(b.getTitle().toLowerCase().contains(q.toLowerCase())) out.add(b);",
        "    return out;",
        "  }",
        "  public void register(Member m){ members.add(m); }",
        "}"] ,
      "Book.java": [
        "import java.util.*;",
        "public class Book {",
        "  private final String isbn;",
        "  private final String title;",
        "  private final List<BookCopy> copies = new ArrayList<>();",
        "  public Book(String isbn, String title){ this.isbn=isbn; this.title=title; }",
        "  public String getIsbn(){ return isbn; }",
        "  public String getTitle(){ return title; }",
        "  public void addCopy(BookCopy c){ copies.add(c); }",
        "  public BookCopy getAvailableCopy(){ for(BookCopy c: copies) if(c.isAvailable()) return c; return null; }",
        "}"] ,
      "BookCopy.java": [
        "public class BookCopy {",
        "  private final String barcode;",
        "  private boolean available = true;",
        "  public BookCopy(String barcode){ this.barcode=barcode; }",
        "  public boolean isAvailable(){ return available; }",
        "  public void markBorrowed(){ available=false; }",
        "  public void markReturned(){ available=true; }",
        "}"] ,
      "Member.java": [
        "import java.util.*;",
        "public class Member {",
        "  private final String id;",
        "  private final String name;",
        "  private final List<Loan> loans = new ArrayList<>();",
        "  public Member(String id, String name){ this.id=id; this.name=name; }",
        "  public Loan borrow(Book b){",
        "    BookCopy c = b.getAvailableCopy();",
        "    if(c==null) return null;",
        "    c.markBorrowed();",
        "    Loan l = new Loan(this, c);",
        "    loans.add(l);",
        "    return l;",
        "  }",
        "  public double returns(Loan l){",
        "    l.getCopy().markReturned();",
        "    return FineCalculator.calculate(l);",
        "  }",
        "}"] ,
      "Loan.java": [
        "import java.util.*;",
        "public class Loan {",
        "  private final Member member;",
        "  private final BookCopy copy;",
        "  private final Date borrowedAt = new Date();",
        "  public Loan(Member m, BookCopy c){ this.member=m; this.copy=c; }",
        "  public Member getMember(){ return member; }",
        "  public BookCopy getCopy(){ return copy; }",
        "  public Date getBorrowedAt(){ return borrowedAt; }",
        "}"] ,
      "FineCalculator.java": [
        "import java.util.*;",
        "public class FineCalculator {",
        "  public static double calculate(Loan l){",
        "    long days = Math.max(0, (new Date().getTime()-l.getBorrowedAt().getTime())/(1000*60*60*24) - 14); // 2 weeks free",
        "    return days * 2.0;",
        "  }",
        "}"] ,
      "Demo.java": [
        "public class Demo {",
        "  public static void main(String[] a){",
        "    Library lib = new Library();",
        "    Book b = new Book(\"978-0134685991\", \"Effective Java\");",
        "    b.addCopy(new BookCopy(\"BC1\"));",
        "    lib.addBook(b);",
        "    Member m = new Member(\"U1\", \"Alice\");",
        "    lib.register(m);",
        "    Loan l = m.borrow(b);",
        "    double fine = m.returns(l);",
        "    System.out.println(fine);",
        "  }",
        "}"]
    },
    "blogLink": "https://www.geeksforgeeks.org/design-library-management-system/",
    "tryItLink": "https://www.jdoodle.com/online-java-compiler/"
  },
  {
    "id": 3,
    "title": "Design an ATM Machine",
    "description": "Simulate an ATM: authenticate with card & PIN, support balance inquiry, cash withdrawal, deposit, and maintain simple transaction history.",
    "keyModules": ["ATM", "BankAccount", "Card", "Transaction", "TxType"],
    "solution": {
      "ATM.java": [
        "import java.util.*;",
        "public class ATM {",
        "  private final Map<String, BankAccount> accounts = new HashMap<>(); // cardNumber -> account",
        "  public void addAccount(BankAccount a){ accounts.put(a.getCard().getNumber(), a); }",
        "  public boolean authenticate(String card, int pin){",
        "    BankAccount a = accounts.get(card);",
        "    return a != null && a.getCard().getPin()==pin;",
        "  }",
        "  public double balance(String card){ return accounts.get(card).getBalance(); }",
        "  public boolean withdraw(String card, double amt){",
        "    BankAccount a = accounts.get(card);",
        "    if(a.getBalance()>=amt){ a.debit(amt); a.addTx(new Transaction(TxType.WITHDRAW, amt)); return true; }",
        "    return false;",
        "  }",
        "  public void deposit(String card, double amt){",
        "    BankAccount a = accounts.get(card); a.credit(amt); a.addTx(new Transaction(TxType.DEPOSIT, amt));",
        "  }",
        "  public List<Transaction> history(String card){ return accounts.get(card).getHistory(); }",
        "}"] ,
      "BankAccount.java": [
        "import java.util.*;",
        "public class BankAccount {",
        "  private final String id; private double balance; private final Card card;",
        "  private final List<Transaction> history = new ArrayList<>();",
        "  public BankAccount(String id, double bal, Card c){ this.id=id; this.balance=bal; this.card=c; }",
        "  public String getId(){ return id; }",
        "  public double getBalance(){ return balance; }",
        "  public Card getCard(){ return card; }",
        "  public void debit(double a){ balance -= a; }",
        "  public void credit(double a){ balance += a; }",
        "  public void addTx(Transaction t){ history.add(t); }",
        "  public List<Transaction> getHistory(){ return history; }",
        "}"] ,
      "Card.java": [
        "public class Card {",
        "  private final String number; private final int pin;",
        "  public Card(String number, int pin){ this.number=number; this.pin=pin; }",
        "  public String getNumber(){ return number; }",
        "  public int getPin(){ return pin; }",
        "}"] ,
      "Transaction.java": [
        "import java.util.*;",
        "public class Transaction {",
        "  private final TxType type; private final double amount; private final Date at=new Date();",
        "  public Transaction(TxType t, double a){ this.type=t; this.amount=a; }",
        "  public String toString(){ return type+\":\"+amount+\"@\"+at.getTime(); }",
        "}"] ,
      "TxType.java": [
        "public enum TxType { DEPOSIT, WITHDRAW }"
      ],
      "Demo.java": [
        "public class Demo {",
        "  public static void main(String[] args){",
        "    ATM atm = new ATM();",
        "    Card c = new Card(\"4111111111111111\", 1234);",
        "    BankAccount a = new BankAccount(\"A1\", 5000, c);",
        "    atm.addAccount(a);",
        "    if(atm.authenticate(c.getNumber(), 1234)){",
        "      atm.withdraw(c.getNumber(), 700);",
        "      atm.deposit(c.getNumber(), 200);",
        "      System.out.println(atm.balance(c.getNumber()));",
        "    }",
        "  }",
        "}"]
    },
    "blogLink": "https://www.geeksforgeeks.org/design-an-atm-machine/",
    "tryItLink": "https://www.jdoodle.com/online-java-compiler/"
  },
  {
    "id": 4,
    "title": "Design an Elevator System",
    "description": "Design a simple elevator controller for one building with multiple floors and one or more elevators. Handle requests and move elevator accordingly.",
    "keyModules": ["Elevator", "ElevatorController", "Direction", "Request"],
    "solution": {
      "Direction.java": [
        "public enum Direction { UP, DOWN, IDLE }"
      ],
      "Request.java": [
        "public class Request {",
        "  public final int source; public final int target;",
        "  public Request(int s, int t){ source=s; target=t; }",
        "}"] ,
      "Elevator.java": [
        "import java.util.*;",
        "public class Elevator {",
        "  private int current=0; private Direction dir=Direction.IDLE;",
        "  private final Queue<Integer> q = new LinkedList<>();",
        "  public int getCurrent(){ return current; }",
        "  public Direction getDir(){ return dir; }",
        "  public void addStop(int floor){ q.offer(floor); }",
        "  public void step(){",
        "    if(q.isEmpty()){ dir=Direction.IDLE; return; }",
        "    int target=q.peek();",
        "    if(current<target){ current++; dir=Direction.UP; }",
        "    else if(current>target){ current--; dir=Direction.DOWN; }",
        "    else { q.poll(); }",
        "  }",
        "}"] ,
      "ElevatorController.java": [
        "public class ElevatorController {",
        "  private final Elevator elev = new Elevator();",
        "  public void request(Request r){ elev.addStop(r.source); elev.addStop(r.target); }",
        "  public void tick(){ elev.step(); }",
        "  public int where(){ return elev.getCurrent(); }",
        "}"] ,
      "Demo.java": [
        "public class Demo {",
        "  public static void main(String[] args){",
        "    ElevatorController c = new ElevatorController();",
        "    c.request(new Request(0,5));",
        "    for(int i=0;i<8;i++){ c.tick(); System.out.println(c.where()); }",
        "  }",
        "}"]
    },
    "blogLink": "https://www.geeksforgeeks.org/design-elevator-system/",
    "tryItLink": "https://www.jdoodle.com/online-java-compiler/"
  },
  {
    "id": 5,
    "title": "Design a Ride Sharing System",
    "description": "Simplified ride-sharing: riders request trips, drivers accept and complete trips, with basic fare calculation.",
    "keyModules": ["RideService", "Driver", "Rider", "Trip", "TripStatus"],
    "solution": {
      "TripStatus.java": [
        "public enum TripStatus { REQUESTED, ACCEPTED, COMPLETED, CANCELED }"
      ],
      "Driver.java": [
        "public class Driver {",
        "  private final String id; private final String name; private boolean available=true;",
        "  public Driver(String id, String name){ this.id=id; this.name=name; }",
        "  public boolean isAvailable(){ return available; }",
        "  public void setAvailable(boolean a){ available=a; }",
        "  public String getId(){ return id; }",
        "}"] ,
      "Rider.java": [
        "public class Rider {",
        "  private final String id; private final String name;",
        "  public Rider(String id, String name){ this.id=id; this.name=name; }",
        "  public String getId(){ return id; }",
        "}"] ,
      "Trip.java": [
        "public class Trip {",
        "  private final String riderId; private final String driverId;",
        "  private final double distanceKm; private TripStatus status=TripStatus.REQUESTED;",
        "  public Trip(String riderId, String driverId, double distanceKm){ this.riderId=riderId; this.driverId=driverId; this.distanceKm=distanceKm; }",
        "  public void accept(){ status=TripStatus.ACCEPTED; }",
        "  public double complete(){ status=TripStatus.COMPLETED; return 40 + distanceKm*10; }",
        "  public TripStatus getStatus(){ return status; }",
        "}"] ,
      "RideService.java": [
        "import java.util.*;",
        "public class RideService {",
        "  private final Map<String, Driver> drivers = new HashMap<>();",
        "  public void registerDriver(Driver d){ drivers.put(d.getId(), d); }",
        "  public Trip requestRide(Rider r, double distanceKm){",
        "    for(Driver d: drivers.values()){ if(d.isAvailable()){ d.setAvailable(false); Trip t=new Trip(r.getId(), d.getId(), distanceKm); t.accept(); return t; } }",
        "    return null;",
        "  }",
        "  public double complete(Trip t){ for(Driver d: drivers.values()) if(d.getId().equals(t==null?\"\":\"\")){} return t.complete(); }",
        "}"] ,
      "Demo.java": [
        "public class Demo {",
        "  public static void main(String[] args){",
        "    RideService s = new RideService();",
        "    s.registerDriver(new Driver(\"D1\", \"Bob\"));",
        "    Rider r = new Rider(\"R1\", \"Alice\");",
        "    Trip t = s.requestRide(r, 12.5);",
        "    double fare = t.complete();",
        "    System.out.println(fare);",
        "  }",
        "}"]
    },
    "blogLink": "https://www.geeksforgeeks.org/design-uber-lyft-or-ola/",
    "tryItLink": "https://www.jdoodle.com/online-java-compiler/"
  },
  {
    "id": 6,
    "title": "Design a URL Shortener",
    "description": "Create a tiny URL service to shorten long URLs, expand them back, and track hit counts in-memory.",
    "keyModules": ["UrlShortener", "Base62", "ShortUrl"],
    "solution": {
      "Base62.java": [
        "public class Base62 {",
        "  private static final String ALPHABET = \"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\";",
        "  public static String encode(long num){ StringBuilder sb=new StringBuilder(); if(num==0) return \"0\"; while(num>0){ sb.append(ALPHABET.charAt((int)(num%62))); num/=62; } return sb.reverse().toString(); }",
        "}"] ,
      "ShortUrl.java": [
        "public class ShortUrl {",
        "  public final String code; public final String longUrl; public int hits=0;",
        "  public ShortUrl(String code, String longUrl){ this.code=code; this.longUrl=longUrl; }",
        "}"] ,
      "UrlShortener.java": [
        "import java.util.*;",
        "public class UrlShortener {",
        "  private final Map<String, ShortUrl> map = new HashMap<>();",
        "  private long counter=1000;",
        "  public String shorten(String longUrl){ String code = Base62.encode(counter++); map.put(code, new ShortUrl(code, longUrl)); return code; }",
        "  public String expand(String code){ ShortUrl s = map.get(code); if(s==null) return null; s.hits++; return s.longUrl; }",
        "  public int hits(String code){ return map.containsKey(code)? map.get(code).hits : 0; }",
        "}"] ,
      "Demo.java": [
        "public class Demo {",
        "  public static void main(String[] args){",
        "    UrlShortener u = new UrlShortener();",
        "    String code = u.shorten(\"https://example.com/very-long-url\");",
        "    String url = u.expand(code);",
        "    System.out.println(code+\" -> \"+url+\" hits: \"+u.hits(code));",
        "  }",
        "}"]
    },
    "blogLink": "https://www.geeksforgeeks.org/design-tinyurl-system/",
    "tryItLink": "https://www.jdoodle.com/online-java-compiler/"
    },
  {
  "id": 7,
  "title": "Design a Simple In-Memory Cache with TTL",
  "description": "Design a caching layer that stores data temporarily and automatically evicts expired entries based on TTL (time-to-live). The cache should check for data before querying the actual database, reducing DB hits. If the requested data is not in the cache, it should fetch from the DB, store it in the cache, and then return to the user.",
  "keyModules": [
    "App (Main class to test the cache)",
    "Cache (Handles storing, retrieving, and evicting data)",
    "CacheData (Wraps cached value and timestamp)",
    "Db (Simulated Database)"
  ],
  "solution": {
    "App.java": ["import java.util.*;\n\npublic class App {\n    public static void main(String[] args) {\n        Db db = new Db();\n        Cache cache = new Cache();\n\n        System.out.println(cache.getData(\"1\", db));\n        System.out.println(cache.getData(\"2\", db));\n        System.out.println(cache.getData(\"3\", db));\n\n        // The system first checks cache\n        // If data is present, returns it directly\n        // Else fetches from DB, stores it in cache, and returns it\n    }\n}"],
    "CacheData.java": ["public class CacheData {\n    public String value;\n    public long time;\n\n    public CacheData(String val, long time) {\n        this.value = val;\n        this.time = time;\n    }\n}"],
    "Cache.java": ["import java.util.*;\n\npublic class Cache {\n    private final HashMap<String, CacheData> c;\n    long ttl;\n\n    public Cache() {\n        c = new HashMap<>();\n        ttl = 30000L; // 30 seconds\n    }\n\n    public String getData(String key, Db db) {\n        removeExpiredData();\n        if (c.containsKey(key)) {\n            return c.get(key).value;\n        }\n\n        String value = db.getData(key);\n        CacheData newEntry = new CacheData(value, System.currentTimeMillis());\n        c.put(key, newEntry);\n        return value;\n    }\n\n    private void removeExpiredData() {\n        long now = System.currentTimeMillis();\n        Iterator<Map.Entry<String, CacheData>> it = c.entrySet().iterator();\n        while (it.hasNext()) {\n            Map.Entry<String, CacheData> entry = it.next();\n            if (now - entry.getValue().time > ttl) {\n                it.remove();\n            }\n        }\n        System.out.println(\"done removing the expired ones\");\n    }\n}"],
    "Db.java": ["import java.util.*;\n\npublic class Db {\n    private static HashMap<String, String> data;\n\n    public Db() {\n        this.data = new HashMap<>();\n        data.put(\"1\", \"Rajesh\");\n        data.put(\"2\", \"Sanjay\");\n        data.put(\"3\", \"Kumar\");\n        data.put(\"4\", \"Kavitha\");\n    }\n\n    public String getData(String key) {\n        return data.get(key);\n    }\n\n    public String setData(String key, String val) {\n        data.put(key, val);\n        return \"success\";\n    }\n}"]
  },
  "blogLink": "https://medium.com/system-designing/cache-design-and-implementation-strategies-6d8aa72a44c6",
  "tryItLink": "https://www.jdoodle.com/online-java-compiler/"
}

]

};
