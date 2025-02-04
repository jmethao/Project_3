import pandas as pd

df = pd.read_excel("alligator data.xlsx", skiprows=1)  
df.columns = df.columns.str.strip()

if "Area Name" not in df.columns:
    raise KeyError("Column 'Area Name' not found. Check the dataset headers.")

counties = [
    "ALACHUA COUNTY", "BAKER COUNTY", "BAY COUNTY", "BRADFORD COUNTY", "BREVARD COUNTY", "BROWARD COUNTY", 
    "CALHOUN COUNTY", "CHARLOTTE COUNTY", "CITRUS COUNTY", "CLAY COUNTY", "COLLIER COUNTY", "COLUMBIA COUNTY", 
    "DE SOTO COUNTY", "DIXIE COUNTY", "DUVAL COUNTY", "ESCAMBIA COUNTY", "FLAGLER COUNTY", "FRANKLIN COUNTY", 
    "GADSDEN COUNTY", "GILCHRIST COUNTY", "GLADES COUNTY", "GULF COUNTY", "HAMILTON COUNTY", "HARDEE COUNTY", 
    "HENDRY COUNTY", "HERNANDO COUNTY", "HIGHLANDS COUNTY", "HILLSBOROUGH COUNTY", "HOLMES COUNTY", "INDIAN RIVER COUNTY", 
    "JACKSON COUNTY", "JEFFERSON COUNTY", "LAFAYETTE COUNTY", "LAKE COUNTY", "LEE COUNTY", "LEON COUNTY", 
    "LEVY COUNTY", "LIBERTY COUNTY", "MADISON COUNTY", "MANATEE COUNTY", "MARION COUNTY", "MARTIN COUNTY", 
    "MIAMI-DADE COUNTY", "MONROE COUNTY", "NASSAU COUNTY", "OKALOOSA COUNTY", "OKEECHOBEE COUNTY", "ORANGE COUNTY", 
    "OSCEOLA COUNTY", "PALM BEACH COUNTY", "PASCO COUNTY", "PINELLAS COUNTY", "POLK COUNTY", "PUTNAM COUNTY", 
    "SANTA ROSA COUNTY", "SARASOTA COUNTY", "SEMINOLE COUNTY", "ST. JOHNS COUNTY", "ST. LUCIE COUNTY", 
    "SUMTER COUNTY", "SUWANNEE COUNTY", "TAYLOR COUNTY", "UNION COUNTY", "VOLUSIA COUNTY", "WAKULLA COUNTY", 
    "WALTON COUNTY", "WASHINGTON COUNTY"
]

df["Area Name"] = df["Area Name"].str.strip().str.upper()

df = df[df["Area Name"].isin(counties)]

if df.empty:
    print("❌ No matching counties found. Check the dataset formatting.")
else:
    print("Matching counties found. Processing data...")

county_counts = df["Area Name"].value_counts().reset_index()
county_counts.columns = ["County", "Number of Gators"]

county_counts.to_csv("county_gator_counts.csv", index=False)

print("Data processing complete. Saved as 'county_gator_counts.csv'.")