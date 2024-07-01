import Button from "./components/Button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center place-items-center gap-y-4">
      <Button intent="primary" size="sm">
        Primary
      </Button>

      <Button intent="primary" size="md">
        Primary
      </Button>
      <Button intent="primary" size="lg">
        Primary
      </Button>
      <Button intent="primary" size="lg" variant="outline">
        Primary
      </Button>
      <Button intent="secondary" size="sm">
        Secondary
      </Button>
      <Button intent="secondary" size="md">
        Secondary
      </Button>
      <Button intent="secondary" size="lg">
        Secondary
      </Button>
      <Button intent="secondary" size="lg" variant="outline">
        Secondary
      </Button>
      <Button intent="danger" size="sm">
        Danger
      </Button>
      <Button intent="danger" size="md">
        Danger
      </Button>
      <Button intent="danger" size="lg">
        Danger
      </Button>
      <Button intent="danger" size="lg" variant="outline">
        Danger
      </Button>
      {/* Chip */}
      {/* <Chip intent="Primary" label="primary" />
      <Chip intent="Secondary" label="secondary" />
      <Chip intent="Danger" label="danger" />
      <Chip intent="Warning" label="warning" />
      <Chip intent="Info" label="info" />
      <Chip intent="default" label="default" /> */}
    </div>
  );
}
