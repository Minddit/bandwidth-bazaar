import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Profile = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 glass">
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="wallet">Wallet Address</Label>
              <Input id="wallet" placeholder="0x..." />
            </div>
            <Button className="w-full">Save Changes</Button>
          </div>
        </Card>
        
        <Card className="p-6 glass">
          <h2 className="text-xl font-semibold mb-6">Bandwidth Settings</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="max-bandwidth">Maximum Bandwidth (MB/s)</Label>
              <Input id="max-bandwidth" type="number" placeholder="10" />
            </div>
            <div>
              <Label htmlFor="schedule">Active Hours</Label>
              <Input id="schedule" placeholder="9:00 AM - 5:00 PM" />
            </div>
            <Button className="w-full">Update Settings</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;